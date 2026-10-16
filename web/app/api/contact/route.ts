import { NextRequest, NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/submissions-store";
import { isHoneypotFilled, validateContactInput } from "@/lib/validate-submission-input";

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    if (isHoneypotFilled(body?.website)) {
        return NextResponse.json({ ok: true }, { status: 201 });
    }

    const result = validateContactInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        await createContactSubmission(result.input);
        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (error) {
        console.error("[contact]", error);
        return NextResponse.json(
            { error: "We couldn't send your message. Please try again or reach us on WhatsApp." },
            { status: 500 }
        );
    }
}
