"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
    Star,
    User,
    LoaderCircle,
    Trash2,
    Save,
    CheckCircle2,
    Circle,
    Mail,
    Briefcase,
} from "lucide-react";
import type { FeedbackItem } from "@/lib/feedback-store";

function isPreviewableAvatar(url?: string) {
    if (!url) return false;
    try {
        const parsed = new URL(url);
        return parsed.hostname.endsWith(".supabase.co");
    } catch {
        return false;
    }
}

interface Draft {
    message: string;
    displayRole: string;
}

export default function FeedbackPanel() {
    const [items, setItems] = useState<FeedbackItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [drafts, setDrafts] = useState<Record<string, Draft>>({});
    const [savingId, setSavingId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/feedback", { cache: "no-store" });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to load feedback.");
            const list: FeedbackItem[] = data.items || [];
            setItems(list);
            setDrafts(
                Object.fromEntries(
                    list.map((item) => [item.id, { message: item.message, displayRole: item.displayRole || "" }])
                )
            );
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load feedback.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const patch = async (id: string, body: Record<string, unknown>) => {
        const res = await fetch(`/api/feedback/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update feedback.");
        return data.item as FeedbackItem;
    };

    const toggleFeatured = async (item: FeedbackItem) => {
        setSavingId(item.id);
        try {
            const updated = await patch(item.id, { featured: !item.featured });
            setItems((prev) => prev.map((i) => (i.id === item.id ? updated : i)));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to update feedback.");
        } finally {
            setSavingId(null);
        }
    };

    const saveEdits = async (item: FeedbackItem) => {
        const draft = drafts[item.id];
        if (!draft) return;
        setSavingId(item.id);
        try {
            const updated = await patch(item.id, { message: draft.message, displayRole: draft.displayRole });
            setItems((prev) => prev.map((i) => (i.id === item.id ? updated : i)));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to update feedback.");
        } finally {
            setSavingId(null);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this feedback? This cannot be undone.")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/feedback/${id}`, { method: "DELETE" });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to delete feedback.");
            }
            setItems((prev) => prev.filter((i) => i.id !== id));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete feedback.");
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-24 text-gray-500 gap-2">
                <LoaderCircle className="h-5 w-5 animate-spin" /> Loading feedback…
            </div>
        );
    }

    if (error) {
        return <p className="text-center py-24 text-red-400">{error}</p>;
    }

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-gray-500 gap-4">
                <Star className="h-10 w-10 opacity-30" />
                <p>No feedback submitted yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <p className="text-caption text-gray-500 uppercase tracking-widest font-bold">
                {items.filter((i) => i.featured).length} featured on site · {items.length} total submissions
            </p>
            {items.map((item) => {
                const draft = drafts[item.id] || { message: item.message, displayRole: item.displayRole || "" };
                const dirty = draft.message !== item.message || draft.displayRole !== (item.displayRole || "");
                return (
                    <div
                        key={item.id}
                        className={`bg-zinc-900/30 border rounded-3xl p-6 backdrop-blur-md transition-colors ${
                            item.featured ? "border-zgreen-500/40" : "border-white/10"
                        }`}
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex items-center gap-4 md:w-64 shrink-0">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-zinc-800 flex items-center justify-center shrink-0">
                                    {isPreviewableAvatar(item.avatarUrl) ? (
                                        <Image src={item.avatarUrl!} alt={item.name} fill sizes="56px" className="object-cover" />
                                    ) : (
                                        <User className="h-6 w-6 text-gray-500" />
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-h3 font-bold text-white truncate">{item.name}</h3>
                                    {item.email && (
                                        <p className="text-caption text-gray-500 truncate flex items-center gap-1">
                                            <Mail className="h-3 w-3" /> {item.email}
                                        </p>
                                    )}
                                    {item.service && (
                                        <p className="text-caption text-gray-500 truncate flex items-center gap-1">
                                            <Briefcase className="h-3 w-3" /> {item.service}
                                        </p>
                                    )}
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-3.5 w-3.5 ${
                                                    i < item.rating ? "fill-zyellow-400 text-zyellow-400" : "text-gray-700"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Quote shown on site
                                    </label>
                                    <textarea
                                        value={draft.message}
                                        onChange={(e) =>
                                            setDrafts((prev) => ({ ...prev, [item.id]: { ...draft, message: e.target.value } }))
                                        }
                                        rows={3}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-zgreen-500/50 outline-none transition-all resize-none"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Display role (optional — e.g. &ldquo;Founder, Datagram NG&rdquo;)
                                    </label>
                                    <input
                                        type="text"
                                        value={draft.displayRole}
                                        onChange={(e) =>
                                            setDrafts((prev) => ({ ...prev, [item.id]: { ...draft, displayRole: e.target.value } }))
                                        }
                                        placeholder={item.service || "Role, Company"}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-zgreen-500/50 outline-none transition-all placeholder:text-gray-700"
                                    />
                                </div>
                            </div>

                            <div className="flex md:flex-col gap-2 md:w-40 shrink-0 justify-end">
                                <button
                                    onClick={() => toggleFeatured(item)}
                                    disabled={savingId === item.id}
                                    className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 ${
                                        item.featured
                                            ? "bg-zgreen-600 hover:bg-zgreen-500 text-white"
                                            : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300"
                                    }`}
                                >
                                    {item.featured ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                                    {item.featured ? "Featured" : "Feature"}
                                </button>
                                <button
                                    onClick={() => saveEdits(item)}
                                    disabled={!dirty || savingId === item.id}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-all disabled:opacity-30"
                                >
                                    {savingId === item.id ? (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Save className="h-4 w-4" />
                                    )}
                                    Save
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    disabled={deletingId === item.id}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all disabled:opacity-50"
                                >
                                    {deletingId === item.id ? (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Trash2 className="h-4 w-4" />
                                    )}
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
