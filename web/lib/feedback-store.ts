import "server-only";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

const TABLE = "feedback";

export interface FeedbackItem {
    id: string;
    name: string;
    email?: string;
    service?: string;
    rating: number;
    message: string;
    avatarUrl?: string;
    displayRole?: string;
    featured: boolean;
    displayOrder: number;
    createdAt: string;
}

function fromRow(row: Record<string, unknown>): FeedbackItem {
    return {
        id: row.id as string,
        name: row.name as string,
        email: (row.email as string | null) ?? undefined,
        service: (row.service as string | null) ?? undefined,
        rating: row.rating as number,
        message: row.message as string,
        avatarUrl: (row.avatar_url as string | null) ?? undefined,
        displayRole: (row.display_role as string | null) ?? undefined,
        featured: Boolean(row.featured),
        displayOrder: (row.display_order as number) ?? 0,
        createdAt: row.created_at as string,
    };
}

function requireSupabase() {
    const supabase = getSupabase();
    if (!supabase) {
        throw new Error(
            "Feedback storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
        );
    }
    return supabase;
}

export interface FeedbackInput {
    name: string;
    email?: string;
    service?: string;
    rating: number;
    message: string;
    avatarUrl?: string;
}

export async function createFeedback(input: FeedbackInput): Promise<FeedbackItem> {
    const supabase = requireSupabase();
    const { data, error } = await supabase
        .from(TABLE)
        .insert({
            name: input.name,
            email: input.email ?? null,
            service: input.service ?? null,
            rating: input.rating,
            message: input.message,
            avatar_url: input.avatarUrl ?? null,
        })
        .select()
        .single();
    if (error) throw new Error(`Failed to submit feedback: ${error.message}`);
    return fromRow(data);
}

export async function getAllFeedback(): Promise<FeedbackItem[]> {
    const supabase = requireSupabase();
    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .order("created_at", { ascending: false });
    if (error) throw new Error(`Failed to load feedback: ${error.message}`);
    return (data ?? []).map(fromRow);
}

export async function getFeaturedFeedback(): Promise<FeedbackItem[]> {
    const supabase = getSupabase();
    if (!supabase) return [];
    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .eq("featured", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });
    if (error) throw new Error(`Failed to load testimonials: ${error.message}`);
    return (data ?? []).map(fromRow);
}

export interface FeedbackUpdateInput {
    featured?: boolean;
    displayOrder?: number;
    displayRole?: string;
    message?: string;
}

export async function updateFeedback(id: string, input: FeedbackUpdateInput): Promise<FeedbackItem> {
    const supabase = requireSupabase();
    const patch: Record<string, unknown> = {};
    if (input.featured !== undefined) patch.featured = input.featured;
    if (input.displayOrder !== undefined) patch.display_order = input.displayOrder;
    if (input.displayRole !== undefined) patch.display_role = input.displayRole || null;
    if (input.message !== undefined) patch.message = input.message;

    const { data, error } = await supabase.from(TABLE).update(patch).eq("id", id).select().single();
    if (error) throw new Error(`Failed to update feedback: ${error.message}`);
    if (!data) throw new Error(`Feedback with id "${id}" was not found.`);
    return fromRow(data);
}

export async function deleteFeedback(id: string): Promise<void> {
    const supabase = requireSupabase();
    const { error, count } = await supabase.from(TABLE).delete({ count: "exact" }).eq("id", id);
    if (error) throw new Error(`Failed to delete feedback: ${error.message}`);
    if (!count) throw new Error(`Feedback with id "${id}" was not found.`);
}

export function isFeedbackStoreConfigured(): boolean {
    return isSupabaseConfigured();
}
