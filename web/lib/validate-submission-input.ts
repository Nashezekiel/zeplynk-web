const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+()\-\s]{7,}$/;

export const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
export const ALLOWED_ATTACHMENT_TYPES = ["image/png", "image/jpeg", "image/webp", "application/pdf"];

export interface ContactInput {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface RegistrationInput {
    name: string;
    email: string;
    phone: string;
    courseInterest: string;
    message?: string;
}

type Result<T> = { input: T } | { error: string };

function text(value: unknown, max: number): string {
    return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(value: string): boolean {
    return EMAIL_REGEX.test(value);
}

/**
 * Name of the hidden spam-trap field. Deliberately meaningless: a recognisable name such as
 * "website" gets filled in by browser autofill, which silently dropped real submissions.
 */
export const HONEYPOT_FIELD = "hp_x7q";

/**
 * Bots fill every field, including ones hidden from people. A filled honeypot means
 * the request should be accepted silently and dropped.
 */
export function isHoneypotFilled(value: unknown): boolean {
    return typeof value === "string" && value.trim() !== "";
}

export function validateContactInput(body: unknown): Result<ContactInput> {
    if (!body || typeof body !== "object") return { error: "Invalid request body." };
    const b = body as Record<string, unknown>;

    const name = text(b.name, 100);
    const email = text(b.email, 200);
    const subject = text(b.subject, 100) || "General Inquiry";
    const message = text(b.message, 5000);

    if (!name) return { error: "Please enter your name." };
    if (!validEmail(email)) return { error: "Please enter a valid email address." };
    if (message.length < 10) return { error: "Please add a few more details (at least 10 characters)." };

    return { input: { name, email, subject, message } };
}

export function validateRegistrationInput(fields: Record<string, unknown>): Result<RegistrationInput> {
    const name = text(fields.name, 100);
    const email = text(fields.email, 200);
    const phone = text(fields.phone, 40);
    const courseInterest = text(fields.courseInterest, 100);
    const message = text(fields.additionalNote, 2000);

    if (!name) return { error: "Please enter your full name." };
    if (!validEmail(email)) return { error: "Please enter a valid email address." };
    if (!PHONE_REGEX.test(phone)) return { error: "Please enter a valid phone number." };
    if (!courseInterest) return { error: "Please select your primary interest." };

    return { input: { name, email, phone, courseInterest, message: message || undefined } };
}

export function validateAttachment(file: File): string | null {
    if (!ALLOWED_ATTACHMENT_TYPES.includes(file.type)) return "Payment proof must be an image (PNG, JPG, WebP) or a PDF.";
    if (file.size > MAX_ATTACHMENT_BYTES) return "Payment proof must be under 5MB.";
    return null;
}

export function validateNewsletterInput(body: unknown): Result<{ email: string; source?: string }> {
    if (!body || typeof body !== "object") return { error: "Invalid request body." };
    const b = body as Record<string, unknown>;
    const email = text(b.email, 200).toLowerCase();
    if (!validEmail(email)) return { error: "Please enter a valid email address." };
    const source = text(b.source, 50);
    return { input: { email, source: source || undefined } };
}
