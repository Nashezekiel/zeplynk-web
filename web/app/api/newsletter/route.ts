import { NextRequest, NextResponse } from "next/server";
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

    try {
        await addSubscriber(result.input.email, result.input.source);
        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (error) {
        console.error("[newsletter]", error);
        return NextResponse.json({ error: "We couldn't subscribe you right now. Please try again." }, { status: 500 });
    }
}
