import { NextRequest, NextResponse } from "next/server";
import { deliverSubmission, sendFormEmail } from "@/lib/notify-email";
import { addSubscriber } from "@/lib/submissions-store";
import { isHoneypotFilled, validateNewsletterInput } from "@/lib/validate-submission-input";

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    if (isHoneypotFilled(body?.website)) {
        return NextResponse.json({ ok: true }, { status: 201 });
    }

    const result = validateNewsletterInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { email, source } = result.input;
    const delivered = await deliverSubmission("newsletter", [
        sendFormEmail({
            subject: `New newsletter subscriber: ${email}`,
            heading: "New newsletter subscriber",
            replyTo: email,
            fields: [
                { label: "Email", value: email },
                { label: "Signed up on", value: source },
            ],
        }),
        addSubscriber(email, source),
    ]);

    if (!delivered) {
        return NextResponse.json({ error: "We couldn't subscribe you right now. Please try again." }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
}
