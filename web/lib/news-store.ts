import "server-only";
import { Redis } from "@upstash/redis";
import { newsItems as seedNewsItems, type NewsItem } from "@/constants/news";

const STORE_KEY = "zeplynk:news:v1";

function getRedis(): Redis | null {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) return null;
    return new Redis({ url, token });
}

function createSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

async function readAll(): Promise<NewsItem[]> {
    const redis = getRedis();
    if (!redis) return seedNewsItems;

    const stored = await redis.get<NewsItem[]>(STORE_KEY);
    if (stored === null || stored === undefined) {
        await redis.set(STORE_KEY, seedNewsItems);
        return seedNewsItems;
    }
    return stored;
}

async function writeAll(items: NewsItem[]): Promise<void> {
    const redis = getRedis();
    if (!redis) {
        throw new Error(
            "News storage is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to enable creating, editing, or deleting posts."
        );
    }
    await redis.set(STORE_KEY, items);
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

export async function createNews(input: NewsInput): Promise<NewsItem> {
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
    await writeAll([item, ...items]);
    return item;
}

export async function updateNews(id: string, input: NewsInput): Promise<NewsItem> {
    const items = await readAll();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
        throw new Error(`News post with id "${id}" was not found.`);
    }
    const slugBase = createSlug(input.slug || input.title);
    const updated: NewsItem = {
        ...items[index],
        title: input.title,
        slug: uniqueSlug(slugBase, items, id),
        excerpt: input.excerpt,
        content: input.content,
        image: input.image,
        category: input.category,
        date: input.date,
        aspectRatio: input.aspectRatio,
    };
    const next = [...items];
    next[index] = updated;
    await writeAll(next);
    return updated;
}

export async function deleteNews(id: string): Promise<void> {
    const items = await readAll();
    const next = items.filter((item) => item.id !== id);
    if (next.length === items.length) {
        throw new Error(`News post with id "${id}" was not found.`);
    }
    await writeAll(next);
}

export function isNewsStoreConfigured(): boolean {
    return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}
