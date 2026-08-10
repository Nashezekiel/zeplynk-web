import { NextRequest, NextResponse } from "next/server";
import { deleteNews, getNewsById, updateNews } from "@/lib/news-store";
import { isRequestAuthorized } from "@/lib/admin-auth";
import { validateNewsInput } from "@/lib/validate-news-input";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = await getNewsById(id);
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ item });
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json().catch(() => null);
    const result = validateNewsInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        const item = await updateNews(id, result.input);
        return NextResponse.json({ item });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to update post." },
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
        await deleteNews(id);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to delete post." },
            { status: 404 }
        );
    }
}
