import { NextRequest, NextResponse } from "next/server";
import { createFeedback, getAllFeedback } from "@/lib/feedback-store";
import { isRequestAuthorized } from "@/lib/admin-auth";
import { validateFeedbackInput } from "@/lib/validate-feedback-input";

export async function GET(request: NextRequest) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const items = await getAllFeedback();
    return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    const result = validateFeedbackInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        const item = await createFeedback(result.input);
        return NextResponse.json({ item }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to submit feedback." },
            { status: 500 }
        );
    }
}
