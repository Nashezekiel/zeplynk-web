import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
    if (client !== undefined) return client;

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
        client = null;
        return client;
    }

    client = createClient(url, key, {
        auth: { persistSession: false },
    });
    return client;
}

export function isSupabaseConfigured(): boolean {
    return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
