import { NextRequest, NextResponse } from "next/server";
import { getAllSubmissions, getAllSubscribers } from "@/lib/submissions-store";
import { isRequestAuthorized } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
    if (!(await isRequestAuthorized(request))) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const [submissions, subscribers] = await Promise.all([getAllSubmissions(), getAllSubscribers()]);
        return NextResponse.json({ submissions, subscribers });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to load submissions." },
            { status: 500 }
        );
    }
}
