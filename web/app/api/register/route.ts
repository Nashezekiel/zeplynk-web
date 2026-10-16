import { NextRequest, NextResponse } from "next/server";
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

    try {
        await createRegistration(result.input, file);
        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (error) {
        console.error("[register]", error);
        return NextResponse.json(
            { error: "We couldn't submit your registration. Please try again or reach us on WhatsApp." },
            { status: 500 }
        );
    }
}
