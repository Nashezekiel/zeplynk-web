import { NextRequest, NextResponse } from "next/server";
import { deleteSubmission, setSubmissionHandled } from "@/lib/submissions-store";
import { isRequestAuthorized } from "@/lib/admin-auth";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json().catch(() => null);
    if (typeof body?.handled !== "boolean") {
        return NextResponse.json({ error: "Expected { handled: boolean }." }, { status: 400 });
    }

    try {
        await setSubmissionHandled(id, body.handled);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to update submission." },
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
        await deleteSubmission(id);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to delete submission." },
            { status: 404 }
        );
    }
}
