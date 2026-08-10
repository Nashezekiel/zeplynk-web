import type { NewsInput } from "@/lib/news-store";

const ASPECT_RATIOS = ["aspect-square", "aspect-video", "aspect-[3/4]", "aspect-[4/3]"];

export function validateNewsInput(body: unknown): { input: NewsInput } | { error: string } {
    if (!body || typeof body !== "object") return { error: "Invalid request body." };
    const b = body as Record<string, unknown>;

    if (typeof b.title !== "string" || !b.title.trim()) return { error: "Title is required." };
    if (typeof b.excerpt !== "string" || !b.excerpt.trim()) return { error: "Excerpt is required." };
    if (typeof b.image !== "string" || !b.image.trim()) return { error: "Image URL is required." };
    if (typeof b.category !== "string" || !b.category.trim()) return { error: "Category is required." };
    if (typeof b.date !== "string" || !b.date.trim()) return { error: "Date is required." };
    if (typeof b.aspectRatio !== "string" || !ASPECT_RATIOS.includes(b.aspectRatio)) {
        return { error: "Invalid aspect ratio." };
    }

    return {
        input: {
            title: b.title.trim(),
            slug: typeof b.slug === "string" ? b.slug.trim() : undefined,
            excerpt: b.excerpt.trim(),
            content: typeof b.content === "string" ? b.content : undefined,
            image: b.image.trim(),
            category: b.category.trim(),
            date: b.date.trim(),
            aspectRatio: b.aspectRatio as NewsInput["aspectRatio"],
        },
    };
}
