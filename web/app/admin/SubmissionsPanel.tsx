"use client";

import { useCallback, useEffect, useState } from "react";
import {
    CheckCircle2,
    Circle,
    Copy,
    GraduationCap,
    Inbox,
    LoaderCircle,
    Mail,
    MessageSquare,
    Paperclip,
    Phone,
    Trash2,
} from "lucide-react";
import type { Submission, Subscriber } from "@/lib/submissions-store";

type Tab = "contact" | "registration" | "subscribers";

const TABS: { id: Tab; label: string; icon: typeof Inbox }[] = [
    { id: "contact", label: "Messages", icon: MessageSquare },
    { id: "registration", label: "Registrations", icon: GraduationCap },
    { id: "subscribers", label: "Subscribers", icon: Mail },
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default function SubmissionsPanel() {
    const [tab, setTab] = useState<Tab>("contact");
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [busyId, setBusyId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/submissions", { cache: "no-store" });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to load submissions.");
            setSubmissions(data.submissions || []);
            setSubscribers(data.subscribers || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load submissions.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const toggleHandled = async (item: Submission) => {
        setBusyId(item.id);
        try {
            const res = await fetch(`/api/submissions/${item.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ handled: !item.handled }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to update submission.");
            }
            setSubmissions((prev) => prev.map((s) => (s.id === item.id ? { ...s, handled: !s.handled } : s)));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to update submission.");
        } finally {
            setBusyId(null);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this submission? This cannot be undone.")) return;
        setBusyId(id);
        try {
            const res = await fetch(`/api/submissions/${id}`, { method: "DELETE" });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to delete submission.");
            }
            setSubmissions((prev) => prev.filter((s) => s.id !== id));
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete submission.");
        } finally {
            setBusyId(null);
        }
    };

    const copyEmails = async () => {
        await navigator.clipboard.writeText(subscribers.map((s) => s.email).join(", "));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const countFor = (id: Tab) =>
        id === "subscribers"
            ? subscribers.length
            : submissions.filter((s) => s.type === id && !s.handled).length;

    const visible = submissions.filter((s) => s.type === tab);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                {TABS.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                            tab === id
                                ? "bg-white/10 border border-white/20 text-white"
                                : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400"
                        }`}
                    >
                        <Icon className="h-3.5 w-3.5" /> {label}
                        {!loading && countFor(id) > 0 && (
                            <span className="ml-1 rounded-full bg-zgreen-600 px-2 py-0.5 text-[10px] text-white">{countFor(id)}</span>
                        )}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-24 text-gray-500 gap-2">
                    <LoaderCircle className="h-5 w-5 animate-spin" /> Loading inbox…
                </div>
            ) : error ? (
                <p className="text-center py-24 text-red-400">{error}</p>
            ) : tab === "subscribers" ? (
                subscribers.length === 0 ? (
                    <EmptyState text="No newsletter subscribers yet." />
                ) : (
                    <div className="bg-zinc-900/30 border border-white/10 rounded-3xl overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <p className="text-caption text-gray-500 uppercase tracking-widest font-bold">
                                {subscribers.length} subscribers
                            </p>
                            <button
                                onClick={copyEmails}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300"
                            >
                                <Copy className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy all emails"}
                            </button>
                        </div>
                        <ul className="divide-y divide-white/5">
                            {subscribers.map((s) => (
                                <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 px-6 py-3 text-sm">
                                    <span className="text-white">{s.email}</span>
                                    <span className="text-gray-500">
                                        {s.source ?? "unknown"} · {formatDate(s.createdAt)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            ) : visible.length === 0 ? (
                <EmptyState text={tab === "contact" ? "No messages yet." : "No registrations yet."} />
            ) : (
                <div className="space-y-4">
                    {visible.map((item) => (
                        <div
                            key={item.id}
                            className={`bg-zinc-900/30 border rounded-3xl p-6 transition-colors ${
                                item.handled ? "border-white/10 opacity-60" : "border-zgreen-500/30"
                            }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-1 min-w-0 space-y-3">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <h3 className="text-lg font-bold text-white">{item.name}</h3>
                                        <span className="text-caption text-gray-500">{formatDate(item.createdAt)}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-400">
                                        <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 hover:text-zgreen-400">
                                            <Mail className="h-3.5 w-3.5" /> {item.email}
                                        </a>
                                        {item.phone && (
                                            <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 hover:text-zgreen-400">
                                                <Phone className="h-3.5 w-3.5" /> {item.phone}
                                            </a>
                                        )}
                                        {(item.subject || item.courseInterest) && (
                                            <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-gray-300">
                                                {item.subject ?? item.courseInterest}
                                            </span>
                                        )}
                                    </div>
                                    {item.message && (
                                        <p className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                                            {item.message}
                                        </p>
                                    )}
                                    {item.attachmentUrl && (
                                        <a
                                            href={item.attachmentUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-zgreen-400 hover:text-zgreen-300"
                                        >
                                            <Paperclip className="h-4 w-4" /> View payment proof
                                        </a>
                                    )}
                                </div>

                                <div className="flex md:flex-col gap-2 md:w-40 shrink-0">
                                    <button
                                        onClick={() => toggleHandled(item)}
                                        disabled={busyId === item.id}
                                        className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 ${
                                            item.handled
                                                ? "bg-white/5 border border-white/10 text-gray-300"
                                                : "bg-zgreen-600 hover:bg-zgreen-500 text-white"
                                        }`}
                                    >
                                        {item.handled ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                                        {item.handled ? "Handled" : "Mark handled"}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        disabled={busyId === item.id}
                                        className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all disabled:opacity-50"
                                    >
                                        <Trash2 className="h-4 w-4" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function EmptyState({ text }: { text: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-gray-500 gap-4">
            <Inbox className="h-10 w-10 opacity-30" />
            <p>{text}</p>
        </div>
    );
}
