import "server-only";
import { getSupabase } from "@/lib/supabase";
import type { ContactInput, RegistrationInput } from "@/lib/validate-submission-input";

const TABLE = "form_submissions";
const SUBSCRIBERS_TABLE = "newsletter_subscribers";
const PROOF_BUCKET = "payment-proofs";
const SIGNED_URL_SECONDS = 60 * 60;

export type SubmissionType = "contact" | "registration";

export interface Submission {
    id: string;
    type: SubmissionType;
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    courseInterest?: string;
    message?: string;
    attachmentUrl?: string;
    handled: boolean;
    createdAt: string;
}

export interface Subscriber {
    id: string;
    email: string;
    source?: string;
    createdAt: string;
}

function requireSupabase() {
    const supabase = getSupabase();
    if (!supabase) {
        throw new Error("Form storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
    }
    return supabase;
}

export async function createContactSubmission(input: ContactInput): Promise<void> {
    const supabase = requireSupabase();
    const { error } = await supabase.from(TABLE).insert({
        type: "contact",
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
    });
    if (error) throw new Error(`Failed to save message: ${error.message}`);
}

export async function createRegistration(input: RegistrationInput, proof?: File): Promise<void> {
    const supabase = requireSupabase();

    let attachmentPath: string | null = null;
    if (proof) {
        const ext = proof.type === "application/pdf" ? "pdf" : proof.type.split("/")[1];
        attachmentPath = `${crypto.randomUUID()}.${ext}`;
        const { error } = await supabase.storage.from(PROOF_BUCKET).upload(attachmentPath, proof, {
            contentType: proof.type,
            upsert: false,
        });
        if (error) throw new Error(`Failed to upload payment proof: ${error.message}`);
    }

    const { error } = await supabase.from(TABLE).insert({
        type: "registration",
        name: input.name,
        email: input.email,
        phone: input.phone,
        course_interest: input.courseInterest,
        message: input.message ?? null,
        attachment_path: attachmentPath,
    });
    if (error) {
        if (attachmentPath) await supabase.storage.from(PROOF_BUCKET).remove([attachmentPath]);
        throw new Error(`Failed to save registration: ${error.message}`);
    }
}

/** Adds a subscriber; signing up twice with the same email is not an error. */
export async function addSubscriber(email: string, source?: string): Promise<void> {
    const supabase = requireSupabase();
    const { error } = await supabase
        .from(SUBSCRIBERS_TABLE)
        .upsert({ email, source: source ?? null }, { onConflict: "email", ignoreDuplicates: true });
    if (error) throw new Error(`Failed to subscribe: ${error.message}`);
}

export async function getAllSubmissions(): Promise<Submission[]> {
    const supabase = requireSupabase();
    const { data, error } = await supabase.from(TABLE).select("*").order("created_at", { ascending: false });
    if (error) throw new Error(`Failed to load submissions: ${error.message}`);

    const rows = data ?? [];
    const paths = rows.map((row) => row.attachment_path as string | null).filter((p): p is string => Boolean(p));
    const signed = new Map<string, string>();
    if (paths.length > 0) {
        const { data: urls } = await supabase.storage.from(PROOF_BUCKET).createSignedUrls(paths, SIGNED_URL_SECONDS);
        for (const entry of urls ?? []) {
            if (entry.path && entry.signedUrl) signed.set(entry.path, entry.signedUrl);
        }
    }

    return rows.map((row) => ({
        id: row.id as string,
        type: row.type as SubmissionType,
        name: row.name as string,
        email: row.email as string,
        phone: (row.phone as string | null) ?? undefined,
        subject: (row.subject as string | null) ?? undefined,
        courseInterest: (row.course_interest as string | null) ?? undefined,
        message: (row.message as string | null) ?? undefined,
        attachmentUrl: row.attachment_path ? signed.get(row.attachment_path as string) : undefined,
        handled: Boolean(row.handled),
        createdAt: row.created_at as string,
    }));
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
    const supabase = requireSupabase();
    const { data, error } = await supabase
        .from(SUBSCRIBERS_TABLE)
        .select("*")
        .order("created_at", { ascending: false });
    if (error) throw new Error(`Failed to load subscribers: ${error.message}`);
    return (data ?? []).map((row) => ({
        id: row.id as string,
        email: row.email as string,
        source: (row.source as string | null) ?? undefined,
        createdAt: row.created_at as string,
    }));
}

export async function setSubmissionHandled(id: string, handled: boolean): Promise<void> {
    const supabase = requireSupabase();
    const { error, count } = await supabase.from(TABLE).update({ handled }, { count: "exact" }).eq("id", id);
    if (error) throw new Error(`Failed to update submission: ${error.message}`);
    if (count === 0) throw new Error(`Submission with id "${id}" was not found.`);
}

export async function deleteSubmission(id: string): Promise<void> {
    const supabase = requireSupabase();
    const { data, error } = await supabase.from(TABLE).delete().eq("id", id).select("attachment_path");
    if (error) throw new Error(`Failed to delete submission: ${error.message}`);
    if (!data || data.length === 0) throw new Error(`Submission with id "${id}" was not found.`);
    const path = data[0].attachment_path as string | null;
    if (path) await supabase.storage.from(PROOF_BUCKET).remove([path]);
}
