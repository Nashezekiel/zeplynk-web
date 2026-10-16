import { NextRequest, NextResponse } from "next/server";
import { deliverSubmission, sendFormEmail } from "@/lib/notify-email";
import { createRegistration } from "@/lib/submissions-store";
import {
    isHoneypotFilled,
    validateAttachment,
    validateRegistrationInput,
} from "@/lib/validate-submission-input";

export async function POST(request: NextRequest) {
    const formData = await request.formData().catch(() => null);
    if (!formData) {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }
    if (isHoneypotFilled(formData.get("website"))) {
        return NextResponse.json({ ok: true }, { status: 201 });
    }

    const result = validateRegistrationInput(Object.fromEntries(formData));
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const proof = formData.get("paymentProof");
    const file = proof instanceof File && proof.size > 0 ? proof : undefined;
    if (file) {
        const fileError = validateAttachment(file);
        if (fileError) return NextResponse.json({ error: fileError }, { status: 400 });
    }

    const { name, email, phone, courseInterest, message } = result.input;
    const delivered = await deliverSubmission("register", [
        sendFormEmail({
            subject: `New Academy registration: ${name} (${courseInterest})`,
            heading: "New Zeplynk Academy registration",
            replyTo: email,
            fields: [
                { label: "Name", value: name },
                { label: "Email", value: email },
                { label: "Phone", value: phone },
                { label: "Course", value: courseInterest },
                { label: "Notes", value: message },
                { label: "Payment proof", value: file ? "Attached" : "Not provided" },
            ],
            attachment: file ? { filename: `payment-proof-${name.replace(/[^a-z0-9]+/gi, "-")}.${extensionFor(file)}`, file } : undefined,
        }),
        createRegistration(result.input, file),
    ]);

    if (!delivered) {
        return NextResponse.json(
            { error: "We couldn't submit your registration. Please try again or reach us on WhatsApp." },
            { status: 500 }
        );
    }
    return NextResponse.json({ ok: true }, { status: 201 });
}

function extensionFor(file: File): string {
    return file.type === "application/pdf" ? "pdf" : file.type.split("/")[1] || "bin";
}
