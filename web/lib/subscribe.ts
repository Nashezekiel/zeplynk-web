/** Client-side helper shared by every newsletter form. Throws with a user-facing message on failure. */
export async function subscribeToNewsletter(email: string, source: string): Promise<void> {
    const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
    });
    if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "We couldn't subscribe you right now. Please try again.");
    }
}
