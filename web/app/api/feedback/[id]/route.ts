import { NextRequest, NextResponse } from "next/server";
import { deleteFeedback, updateFeedback } from "@/lib/feedback-store";
import { isRequestAuthorized } from "@/lib/admin-auth";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }
    const b = body as Record<string, unknown>;

    const patch: { featured?: boolean; displayOrder?: number; displayRole?: string; message?: string } = {};
    if (typeof b.featured === "boolean") patch.featured = b.featured;
    if (typeof b.displayOrder === "number") patch.displayOrder = b.displayOrder;
    if (typeof b.displayRole === "string") patch.displayRole = b.displayRole.trim().slice(0, 120);
    if (typeof b.message === "string" && b.message.trim()) patch.message = b.message.trim().slice(0, 2000);

    try {
        const item = await updateFeedback(id, patch);
        return NextResponse.json({ item });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to update feedback." },
            { status: 404 }
        );
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    try {
        await deleteFeedback(id);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to delete feedback." },
            { status: 404 }
        );
    }
}
