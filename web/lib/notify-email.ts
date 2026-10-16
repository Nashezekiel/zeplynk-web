import "server-only";

// Form submissions are emailed to the company inbox through Resend (https://resend.com).
// Until a sending domain is verified in Resend, the default onboarding@resend.dev sender
// can only deliver to the email address the Resend account was created with, so create
// the account with the same address as FORM_NOTIFY_EMAIL.
const RESEND_URL = "https://api.resend.com/emails";
const DEFAULT_TO = "zeplynk001@gmail.com";
const DEFAULT_FROM = "Zeplynk Website <onboarding@resend.dev>";

export interface EmailField {
    label: string;
    value?: string;
}

export interface EmailAttachment {
    filename: string;
    file: File;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderHtml(heading: string, fields: EmailField[]): string {
    const rows = fields
        .filter((f) => f.value)
        .map(
            (f) =>
                `<tr><td style="padding:8px 16px 8px 0;color:#6b7280;vertical-align:top;white-space:nowrap">${escapeHtml(f.label)}</td>` +
                `<td style="padding:8px 0;color:#111827;white-space:pre-wrap">${escapeHtml(f.value!)}</td></tr>`
        )
        .join("");
    return (
        `<div style="font-family:Arial,sans-serif;font-size:14px;max-width:600px">` +
        `<h2 style="color:#15803d;margin:0 0 16px">${escapeHtml(heading)}</h2>` +
        `<table style="border-collapse:collapse">${rows}</table>` +
        `<p style="color:#9ca3af;font-size:12px;margin-top:24px">Sent from a form on zeplynk.com. Reply to this email to answer the sender directly.</p>` +
        `</div>`
    );
}

function renderText(heading: string, fields: EmailField[]): string {
    return [heading, "", ...fields.filter((f) => f.value).map((f) => `${f.label}: ${f.value}`)].join("\n");
}

/** Emails a form submission to the company inbox. Throws if Resend is not configured or rejects the send. */
export async function sendFormEmail({
    subject,
    heading,
    fields,
    replyTo,
    attachment,
}: {
    subject: string;
    heading: string;
    fields: EmailField[];
    replyTo?: string;
    attachment?: EmailAttachment;
}): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("Email is not configured. Set RESEND_API_KEY.");

    const attachments = attachment
        ? [
              {
                  filename: attachment.filename,
                  content: Buffer.from(await attachment.file.arrayBuffer()).toString("base64"),
              },
          ]
        : undefined;

    const res = await fetch(RESEND_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            from: process.env.FORM_FROM_EMAIL || DEFAULT_FROM,
            to: [process.env.FORM_NOTIFY_EMAIL || DEFAULT_TO],
            reply_to: replyTo,
            subject,
            html: renderHtml(heading, fields),
            text: renderText(heading, fields),
            attachments,
        }),
    });
    if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(`Resend rejected the email (${res.status}): ${detail}`);
    }
}

/**
 * Runs the email and the database save side by side. The submission counts as received
 * if either one succeeds, so a missing table or an email outage alone never loses it.
 */
export async function deliverSubmission(tag: string, tasks: Promise<void>[]): Promise<boolean> {
    const results = await Promise.allSettled(tasks);
    for (const result of results) {
        if (result.status === "rejected") console.error(`[${tag}]`, result.reason);
    }
    return results.some((result) => result.status === "fulfilled");
}
