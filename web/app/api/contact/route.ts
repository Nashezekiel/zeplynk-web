import { NextRequest, NextResponse } from "next/server";
import { deliverSubmission, sendFormEmail } from "@/lib/notify-email";
import { createContactSubmission } from "@/lib/submissions-store";
import { HONEYPOT_FIELD, isHoneypotFilled, validateContactInput } from "@/lib/validate-submission-input";

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    if (isHoneypotFilled(body?.[HONEYPOT_FIELD])) {
        console.warn("[contact] dropped: spam-trap field was filled");
        return NextResponse.json({ ok: true }, { status: 201 });
    }

    const result = validateContactInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { name, email, subject, message } = result.input;
    const delivered = await deliverSubmission("contact", [
        sendFormEmail({
            subject: `New contact message: ${subject}`,
            heading: "New message from the contact form",
            replyTo: email,
            fields: [
                { label: "Name", value: name },
                { label: "Email", value: email },
                { label: "Subject", value: subject },
                { label: "Message", value: message },
            ],
        }),
        createContactSubmission(result.input),
    ]);

    if (!delivered) {
        return NextResponse.json(
            { error: "We couldn't send your message. Please try again or reach us on WhatsApp." },
            { status: 500 }
        );
    }
    return NextResponse.json({ ok: true }, { status: 201 });
}
