import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_TTL_SECONDS, createSessionToken, verifyPassword } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
    if (!process.env.ADMIN_PASSWORD) {
        return NextResponse.json(
            { error: "ADMIN_PASSWORD is not configured on the server." },
            { status: 500 }
        );
    }

    const body = await request.json().catch(() => null);
    const password = body && typeof body.password === "string" ? body.password : "";

    if (!password || !verifyPassword(password)) {
        return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    const token = await createSessionToken();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: ADMIN_SESSION_TTL_SECONDS,
    });
    return response;
}
