import "server-only";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { newsItems as seedNewsItems, type NewsItem } from "@/constants/news";

const TABLE = "news_posts";

function fromRow(row: Record<string, unknown>): NewsItem {
    return {
        id: row.id as string,
        slug: row.slug as string,
        title: row.title as string,
        excerpt: row.excerpt as string,
        content: (row.content as string | null) ?? undefined,
        image: row.image as string,
        category: row.category as string,
        date: row.date as string,
        aspectRatio: row.aspect_ratio as NewsItem["aspectRatio"],
    };
}

function toRow(item: NewsItem) {
    return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        content: item.content ?? null,
        image: item.image,
        category: item.category,
        date: item.date,
        aspect_ratio: item.aspectRatio,
    };
}

function createSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

async function readAll(): Promise<NewsItem[]> {
    const supabase = getSupabase();
    if (!supabase) return seedNewsItems;

    const { data, error } = await supabase
        .from(TABLE)
        .select("*")
        .order("created_at", { ascending: false });
    if (error) throw new Error(`Failed to read news posts: ${error.message}`);

    if (!data || data.length === 0) {
        const { error: seedError } = await supabase.from(TABLE).insert(seedNewsItems.map(toRow));
        if (seedError) throw new Error(`Failed to seed news posts: ${seedError.message}`);
        return seedNewsItems;
    }
    return data.map(fromRow);
}

export async function getAllNews(): Promise<NewsItem[]> {
    return readAll();
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
    const items = await readAll();
    return items.find((item) => item.slug === slug);
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
    const items = await readAll();
    return items.find((item) => item.id === id);
}

export interface NewsInput {
    title: string;
    slug?: string;
    excerpt: string;
    content?: string;
    image: string;
    category: string;
    date: string;
    aspectRatio: NewsItem["aspectRatio"];
}

function uniqueSlug(base: string, items: NewsItem[], ignoreId?: string) {
    let slug = base || "post";
    let suffix = 2;
    while (items.some((item) => item.slug === slug && item.id !== ignoreId)) {
        slug = `${base}-${suffix}`;
        suffix += 1;
    }
    return slug;
}

function requireSupabase() {
    const supabase = getSupabase();
    if (!supabase) {
        throw new Error(
            "News storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable creating, editing, or deleting posts."
        );
    }
    return supabase;
}

export async function createNews(input: NewsInput): Promise<NewsItem> {
    const supabase = requireSupabase();
    const items = await readAll();
    const slugBase = createSlug(input.slug || input.title);
    const item: NewsItem = {
        id: crypto.randomUUID(),
        title: input.title,
        slug: uniqueSlug(slugBase, items),
        excerpt: input.excerpt,
        content: input.content,
        image: input.image,
        category: input.category,
        date: input.date,
        aspectRatio: input.aspectRatio,
    };
    const { error } = await supabase.from(TABLE).insert(toRow(item));
    if (error) throw new Error(`Failed to create post: ${error.message}`);
    return item;
}

export async function updateNews(id: string, input: NewsInput): Promise<NewsItem> {
    const supabase = requireSupabase();
    const items = await readAll();
    const existing = items.find((item) => item.id === id);
    if (!existing) {
        throw new Error(`News post with id "${id}" was not found.`);
    }
    const slugBase = createSlug(input.slug || input.title);
    const updated: NewsItem = {
        ...existing,
        title: input.title,
        slug: uniqueSlug(slugBase, items, id),
        excerpt: input.excerpt,
        content: input.content,
        image: input.image,
        category: input.category,
        date: input.date,
        aspectRatio: input.aspectRatio,
    };
    const { error } = await supabase.from(TABLE).update(toRow(updated)).eq("id", id);
    if (error) throw new Error(`Failed to update post: ${error.message}`);
    return updated;
}

export async function deleteNews(id: string): Promise<void> {
    const supabase = requireSupabase();
    const { error, count } = await supabase.from(TABLE).delete({ count: "exact" }).eq("id", id);
    if (error) throw new Error(`Failed to delete post: ${error.message}`);
    if (!count) throw new Error(`News post with id "${id}" was not found.`);
}

export function isNewsStoreConfigured(): boolean {
    return isSupabaseConfigured();
}
