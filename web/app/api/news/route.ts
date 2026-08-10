import { NextRequest, NextResponse } from "next/server";
import { createNews, getAllNews } from "@/lib/news-store";
import { isRequestAuthorized } from "@/lib/admin-auth";
import { validateNewsInput } from "@/lib/validate-news-input";

export async function GET() {
    const items = await getAllNews();
    return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const result = validateNewsInput(body);
    if ("error" in result) {
        return NextResponse.json({ error: result.error }, { status: 400 });
    }

    try {
        const item = await createNews(result.input);
        return NextResponse.json({ item }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to create post." },
            { status: 500 }
        );
    }
}
