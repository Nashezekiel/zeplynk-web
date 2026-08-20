import type { FeedbackInput } from "@/lib/feedback-store";

export function validateFeedbackInput(body: unknown): { input: FeedbackInput } | { error: string } {
    if (!body || typeof body !== "object") return { error: "Invalid request body." };
    const b = body as Record<string, unknown>;

    if (typeof b.name !== "string" || !b.name.trim()) return { error: "Name is required." };
    if (typeof b.message !== "string" || !b.message.trim()) return { error: "Review message is required." };

    const rating = Number(b.rating);
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        return { error: "Rating must be a whole number between 1 and 5." };
    }
    if (b.email !== undefined && typeof b.email !== "string") return { error: "Invalid email." };
    if (b.service !== undefined && typeof b.service !== "string") return { error: "Invalid service." };
    if (b.avatarUrl !== undefined && typeof b.avatarUrl !== "string") return { error: "Invalid avatar." };

    return {
        input: {
            name: b.name.trim().slice(0, 100),
            email: typeof b.email === "string" && b.email.trim() ? b.email.trim().slice(0, 200) : undefined,
            service: typeof b.service === "string" && b.service.trim() ? b.service.trim().slice(0, 100) : undefined,
            rating,
            message: b.message.trim().slice(0, 2000),
            avatarUrl:
                typeof b.avatarUrl === "string" && b.avatarUrl.trim() ? b.avatarUrl.trim().slice(0, 500) : undefined,
        },
    };
}
