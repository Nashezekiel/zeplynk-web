import "server-only";

export const ADMIN_SESSION_COOKIE = "zeplynk_admin_session";
export const ADMIN_SESSION_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

function getSecret(): string {
    const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
    if (!secret) {
        throw new Error(
            "Set ADMIN_PASSWORD (and ideally ADMIN_SESSION_SECRET) in your environment to enable /admin."
        );
    }
    return secret;
}

function toBase64Url(bytes: ArrayBuffer): string {
    const bin = String.fromCharCode(...new Uint8Array(bytes));
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message: string): Promise<string> {
    const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(getSecret()),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
    return toBase64Url(signature);
}

function timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
}

export function verifyPassword(candidate: string): boolean {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected) return false;
    return timingSafeEqual(candidate, expected);
}

export async function createSessionToken(): Promise<string> {
    const expires = Date.now() + ADMIN_SESSION_TTL_SECONDS * 1000;
    const payload = String(expires);
    const signature = await hmac(payload);
    return `${payload}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
    if (!token) return false;
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;

    let expected: string;
    try {
        expected = await hmac(payload);
    } catch {
        return false;
    }
    if (!timingSafeEqual(signature, expected)) return false;

    const expires = Number(payload);
    if (!Number.isFinite(expires) || Date.now() > expires) return false;
    return true;
}

export async function isRequestAuthorized(request: Request): Promise<boolean> {
    const cookieHeader = request.headers.get("cookie") || "";
    const match = cookieHeader.match(new RegExp(`${ADMIN_SESSION_COOKIE}=([^;]+)`));
    const token = match ? decodeURIComponent(match[1]) : undefined;
    return verifySessionToken(token);
}
