"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Image as ImageIcon,
    Plus,
    Pencil,
    Trash2,
    Eye,
    Save,
    ArrowLeft,
    Type,
    Link as LinkIcon,
    Calendar,
    Hash,
    LoaderCircle,
    LogOut,
    X,
    Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { NewsItem } from "@/constants/news";
import FeedbackPanel from "./FeedbackPanel";

interface PostDraft {
    title: string;
    slug: string;
    category: string;
    date: string;
    excerpt: string;
    content: string;
    image: string;
    aspectRatio: NewsItem["aspectRatio"];
}

const CATEGORIES = ["Engineering", "AI & Future", "Research", "Sustainability", "Academy", "Tech Stack"];

const emptyDraft = (): PostDraft => ({
    title: "",
    slug: "",
    category: "Engineering",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    excerpt: "",
    content: "",
    image: "",
    aspectRatio: "aspect-video",
});

const createSlug = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

function isPreviewableUrl(url: string) {
    try {
        const parsed = new URL(url);
        return parsed.hostname === "images.unsplash.com" || parsed.hostname === "i.pravatar.cc";
    } catch {
        return false;
    }
}

export default function AdminDashboard() {
    const router = useRouter();
    const [section, setSection] = useState<"insights" | "testimonials">("insights");
    const [posts, setPosts] = useState<NewsItem[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [view, setView] = useState<"list" | "editor">("list");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [draft, setDraft] = useState<PostDraft>(emptyDraft());
    const [saving, setSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const loadPosts = useCallback(async () => {
        setLoadingPosts(true);
        try {
            const res = await fetch("/api/news", { cache: "no-store" });
            const data = await res.json();
            setPosts(data.items || []);
        } finally {
            setLoadingPosts(false);
        }
    }, []);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    const startCreate = () => {
        setDraft(emptyDraft());
        setEditingId(null);
        setError(null);
        setView("editor");
    };

    const startEdit = (post: NewsItem) => {
        setDraft({
            title: post.title,
            slug: post.slug,
            category: post.category,
            date: post.date,
            excerpt: post.excerpt,
            content: post.content || "",
            image: post.image,
            aspectRatio: post.aspectRatio,
        });
        setEditingId(post.id);
        setError(null);
        setView("editor");
    };

    const cancelEdit = () => {
        setView("list");
        setEditingId(null);
        setError(null);
    };

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        try {
            const url = editingId ? `/api/news/${editingId}` : "/api/news";
            const method = editingId ? "PUT" : "POST";
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Failed to save post.");
                return;
            }
            await loadPosts();
            setView("list");
            setEditingId(null);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this post? This cannot be undone.")) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
            if (res.ok) {
                setPosts((prev) => prev.filter((p) => p.id !== id));
            } else {
                const data = await res.json().catch(() => ({}));
                alert(data.error || "Failed to delete post.");
            }
        } finally {
            setDeletingId(null);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 group">
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Site
                        </Link>
                        <h1 className="text-h1 font-black uppercase tracking-tight flex items-center gap-3 font-mono">
                            <LayoutDashboard className="h-8 w-8 text-zgreen-500" />
                            Admin <span className="text-zgreen-500">Dashboard</span>
                        </h1>
                        <div className="flex items-center gap-2 mt-6">
                            <button
                                onClick={() => setSection("insights")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                                    section === "insights"
                                        ? "bg-zgreen-600 text-white"
                                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400"
                                }`}
                            >
                                <FileText className="h-3.5 w-3.5" /> Insights
                            </button>
                            <button
                                onClick={() => setSection("testimonials")}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                                    section === "testimonials"
                                        ? "bg-zgreen-600 text-white"
                                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400"
                                }`}
                            >
                                <Star className="h-3.5 w-3.5" /> Testimonials
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {section === "insights" &&
                            (view === "list" ? (
                                <button
                                    onClick={startCreate}
                                    className="flex items-center gap-2 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
                                >
                                    <Plus className="h-4 w-4" /> New Post
                                </button>
                            ) : (
                                <button
                                    onClick={cancelEdit}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-bold px-6 py-3 rounded-xl transition-all"
                                >
                                    <X className="h-4 w-4" /> Cancel
                                </button>
                            ))}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 font-bold px-4 py-3 rounded-xl transition-all"
                        >
                            <LogOut className="h-4 w-4" />
                        </button>
                    </div>
                </header>

                {section === "testimonials" ? (
                    <FeedbackPanel />
                ) : view === "list" ? (
                    <div className="bg-zinc-900/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                        {loadingPosts ? (
                            <div className="flex items-center justify-center py-24 text-gray-500 gap-2">
                                <LoaderCircle className="h-5 w-5 animate-spin" /> Loading posts…
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 text-gray-500 gap-4">
                                <FileText className="h-10 w-10 opacity-30" />
                                <p>No posts yet. Create your first one.</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-white/5">
                                {posts.map((post) => (
                                    <li key={post.id} className="flex items-center gap-4 p-4 sm:p-6 hover:bg-white/[0.02] transition-colors">
                                        <div className="relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                                            {isPreviewableUrl(post.image) ? (
                                                <Image src={post.image} alt={post.title} fill sizes="96px" className="object-cover" />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                                                    <ImageIcon className="h-5 w-5" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-0.5 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-[10px] font-bold text-zgreen-500 uppercase">
                                                    {post.category}
                                                </span>
                                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{post.date}</span>
                                            </div>
                                            <h3 className="text-h3 font-bold text-white truncate">{post.title}</h3>
                                            <p className="text-caption text-gray-500 truncate">/news/{post.slug}</p>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <a
                                                href={`/news/${post.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
                                                title="View live"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </a>
                                            <button
                                                onClick={() => startEdit(post)}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
                                                title="Edit"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                disabled={deletingId === post.id}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all disabled:opacity-50"
                                                title="Delete"
                                            >
                                                {deletingId === post.id ? (
                                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <Type className="h-3 w-3" /> Post Title
                                        </label>
                                        <input
                                            type="text"
                                            value={draft.title}
                                            onChange={(e) => {
                                                const title = e.target.value;
                                                setDraft((d) => ({
                                                    ...d,
                                                    title,
                                                    slug: editingId ? d.slug : createSlug(title),
                                                }));
                                            }}
                                            placeholder="Enter high-impact title..."
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all placeholder:text-gray-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <LinkIcon className="h-3 w-3" /> Slug
                                        </label>
                                        <input
                                            type="text"
                                            value={draft.slug}
                                            onChange={(e) => setDraft((d) => ({ ...d, slug: e.target.value }))}
                                            placeholder="auto-generated-slug"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all placeholder:text-gray-700 font-mono text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <Hash className="h-3 w-3" /> Category
                                        </label>
                                        <select
                                            value={draft.category}
                                            onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all appearance-none"
                                        >
                                            {CATEGORIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <Calendar className="h-3 w-3" /> Published Date
                                        </label>
                                        <input
                                            type="text"
                                            value={draft.date}
                                            onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
                                            placeholder="Mar 12, 2026"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                        <FileText className="h-3 w-3" /> Short Excerpt
                                    </label>
                                    <textarea
                                        value={draft.excerpt}
                                        onChange={(e) => setDraft((d) => ({ ...d, excerpt: e.target.value }))}
                                        rows={2}
                                        placeholder="A brief summary for the preview card..."
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                        <FileText className="h-3 w-3" /> Article Body (HTML)
                                    </label>
                                    <textarea
                                        value={draft.content}
                                        onChange={(e) => setDraft((d) => ({ ...d, content: e.target.value }))}
                                        rows={12}
                                        placeholder="<p>Write your technical deep-dive here...</p>"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-zgreen-500/50 outline-none transition-all resize-y font-mono text-sm leading-relaxed"
                                    />
                                </div>

                                <div className="bg-zinc-900/10 border-t border-white/5 pt-6 mt-6">
                                    <h3 className="text-caption font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <ImageIcon className="h-4 w-4 text-zgreen-500" /> Header Image
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Unsplash URL</label>
                                            <input
                                                type="text"
                                                value={draft.image}
                                                onChange={(e) => setDraft((d) => ({ ...d, image: e.target.value }))}
                                                placeholder="https://images.unsplash.com/..."
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Aspect Ratio</label>
                                            <select
                                                value={draft.aspectRatio}
                                                onChange={(e) => setDraft((d) => ({ ...d, aspectRatio: e.target.value as PostDraft["aspectRatio"] }))}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all appearance-none"
                                            >
                                                <option value="aspect-video">Video (16:9)</option>
                                                <option value="aspect-square">Square (1:1)</option>
                                                <option value="aspect-[3/4]">Portrait (3:4)</option>
                                                <option value="aspect-[4/3]">Classic (4:3)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {error && <p className="text-caption text-red-400">{error}</p>}

                                <button
                                    onClick={handleSave}
                                    disabled={saving || !draft.title || !draft.excerpt || !draft.image}
                                    className="w-full flex items-center justify-center gap-2 bg-zgreen-600 hover:bg-zgreen-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold h-12 rounded-xl transition-all"
                                >
                                    {saving ? (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Save className="h-4 w-4" />
                                    )}
                                    {editingId ? "Save Changes" : "Publish Post"}
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-4 sticky top-24 h-fit">
                            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                                <div className="p-4 border-b border-white/10 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">Preview</span>
                                </div>
                                <div className="bg-zinc-950 p-6">
                                    <div className={`relative ${draft.aspectRatio} rounded-2xl overflow-hidden mb-4 border border-white/5 bg-zinc-900`}>
                                        {draft.image && isPreviewableUrl(draft.image) ? (
                                            <Image src={draft.image} alt="Preview" fill sizes="384px" className="object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 bg-zinc-900">
                                                <ImageIcon className="h-12 w-12 opacity-20" />
                                            </div>
                                        )}
                                    </div>
                                    <span className="inline-block px-2 py-0.5 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-[10px] font-bold text-zgreen-500 uppercase mb-3">
                                        {draft.category}
                                    </span>
                                    <h3 className="text-h3 font-bold text-white mb-2 uppercase line-clamp-1">{draft.title || "Untitled Post"}</h3>
                                    <p className="text-caption text-gray-400 line-clamp-2 italic">{draft.excerpt || "No excerpt provided yet..."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
