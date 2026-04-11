"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    FileText,
    Image as ImageIcon,
    Plus,
    Eye,
    Code,
    Copy,
    Check,
    Trash2,
    Save,
    ArrowLeft,
    Type,
    Link as LinkIcon,
    Calendar,
    Hash,
    User,
    Briefcase,
    Star,
    Quote as QuoteIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BlogPostDraft {
    title: string;
    slug: string;
    category: string;
    date: string;
    excerpt: string;
    content: string;
    image: string;
    aspectRatio: string;
}

interface TestimonialDraft {
    name: string;
    role: string;
    content: string;
    image: string;
    rating: number;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<"news" | "testimonials">("news");

    // News State
    const [newsDraft, setNewsDraft] = useState<BlogPostDraft>({
        title: "",
        slug: "",
        category: "Engineering",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        excerpt: "",
        content: "",
        image: "",
        aspectRatio: "aspect-video"
    });

    // Testimonials State
    const [testimonialDraft, setTestimonialDraft] = useState<TestimonialDraft>({
        name: "",
        role: "",
        content: "",
        image: "https://i.pravatar.cc/150?u=new",
        rating: 5
    });

    const [view, setView] = useState<"edit" | "preview" | "json">("edit");
    const [copied, setCopied] = useState(false);

    // Auto-generate slug from title
    useEffect(() => {
        if (view === "edit" && activeTab === "news") {
            const generatedSlug = newsDraft.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            if (generatedSlug !== newsDraft.slug) {
                setNewsDraft(prev => ({ ...prev, slug: generatedSlug }));
            }
        }
    }, [newsDraft.title, activeTab, view]);

    const handleCopyJson = () => {
        const data = activeTab === "news" ? newsDraft : testimonialDraft;
        const json = JSON.stringify({
            id: Math.random().toString(36).substr(2, 9),
            ...data
        }, null, 4);
        navigator.clipboard.writeText(json);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isValidUrl = (url: string) => {
        try {
            const parsed = new URL(url);
            return parsed.hostname === 'images.unsplash.com' || parsed.hostname === 'i.pravatar.cc';
        } catch {
            return false;
        }
    };

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 group">
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Site
                        </Link>
                        <h1 className="text-4xl font-black uppercase tracking-tight flex items-center gap-3 font-mono">
                            <LayoutDashboard className="h-8 w-8 text-zgreen-500" />
                            CMS <span className="text-zgreen-500">Dashboard</span>
                        </h1>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Tab Switcher */}
                        <div className="flex bg-zinc-900/50 p-1 rounded-xl border border-white/10 backdrop-blur-md self-end">
                            <button
                                onClick={() => setActiveTab("news")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "news" ? "bg-white/10 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                <FileText className="h-4 w-4" /> News
                            </button>
                            <button
                                onClick={() => setActiveTab("testimonials")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "testimonials" ? "bg-white/10 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                <QuoteIcon className="h-4 w-4" /> Testimonials
                            </button>
                        </div>

                        {/* View Switcher */}
                        <div className="flex bg-zinc-900/50 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                            <button
                                onClick={() => setView("edit")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === "edit" ? "bg-zgreen-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                <Plus className="h-4 w-4" /> Compose
                            </button>
                            <button
                                onClick={() => setView("preview")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === "preview" ? "bg-zgreen-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                <Eye className="h-4 w-4" /> Preview
                            </button>
                            <button
                                onClick={() => setView("json")}
                                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === "json" ? "bg-zgreen-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                <Code className="h-4 w-4" /> JSON Export
                            </button>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: Editor */}
                    <div className={`lg:col-span-8 space-y-6 ${view !== "edit" && "hidden lg:block lg:opacity-50 lg:pointer-events-none"}`}>
                        {activeTab === "news" ? (
                            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                                <Type className="h-3 w-3" /> Post Title
                                            </label>
                                            <input
                                                type="text"
                                                value={newsDraft.title}
                                                onChange={(e) => setNewsDraft({ ...newsDraft, title: e.target.value })}
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
                                                value={newsDraft.slug}
                                                onChange={(e) => setNewsDraft({ ...newsDraft, slug: e.target.value })}
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
                                                value={newsDraft.category}
                                                onChange={(e) => setNewsDraft({ ...newsDraft, category: e.target.value })}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all appearance-none"
                                            >
                                                <option value="Engineering">Engineering</option>
                                                <option value="AI & Future">AI & Future</option>
                                                <option value="Research">Research</option>
                                                <option value="Sustainability">Sustainability</option>
                                                <option value="Academy">Academy</option>
                                                <option value="Tech Stack">Tech Stack</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                                <Calendar className="h-3 w-3" /> Published Date
                                            </label>
                                            <input
                                                type="text"
                                                value={newsDraft.date}
                                                onChange={(e) => setNewsDraft({ ...newsDraft, date: e.target.value })}
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
                                            value={newsDraft.excerpt}
                                            onChange={(e) => setNewsDraft({ ...newsDraft, excerpt: e.target.value })}
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
                                            value={newsDraft.content}
                                            onChange={(e) => setNewsDraft({ ...newsDraft, content: e.target.value })}
                                            rows={12}
                                            placeholder="<p>Write your technical deep-dive here...</p>"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-zgreen-500/50 outline-none transition-all resize-y font-mono text-sm leading-relaxed"
                                        />
                                    </div>

                                    <div className="bg-zinc-900/10 border-t border-white/5 pt-6 mt-6">
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <ImageIcon className="h-4 w-4 text-zgreen-500" /> Header Image
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="md:col-span-2 space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Unsplash URL or Static Path</label>
                                                <input
                                                    type="text"
                                                    value={newsDraft.image}
                                                    onChange={(e) => setNewsDraft({ ...newsDraft, image: e.target.value })}
                                                    placeholder="https://images.unsplash.com/..."
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Aspect Ratio</label>
                                                <select
                                                    value={newsDraft.aspectRatio}
                                                    onChange={(e) => setNewsDraft({ ...newsDraft, aspectRatio: e.target.value })}
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
                                </div>
                            </div>
                        ) : (
                            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                                <User className="h-3 w-3" /> Client Name
                                            </label>
                                            <input
                                                type="text"
                                                value={testimonialDraft.name}
                                                onChange={(e) => setTestimonialDraft({ ...testimonialDraft, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all placeholder:text-gray-700"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                                <Briefcase className="h-3 w-3" /> Client Role
                                            </label>
                                            <input
                                                type="text"
                                                value={testimonialDraft.role}
                                                onChange={(e) => setTestimonialDraft({ ...testimonialDraft, role: e.target.value })}
                                                placeholder="CEO at FutureCorp"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all placeholder:text-gray-700"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <ImageIcon className="h-3 w-3" /> Avatar URL
                                        </label>
                                        <input
                                            type="text"
                                            value={testimonialDraft.image}
                                            onChange={(e) => setTestimonialDraft({ ...testimonialDraft, image: e.target.value })}
                                            placeholder="https://i.pravatar.cc/150?u=xyz"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <QuoteIcon className="h-3 w-3" /> Testimonial Content
                                        </label>
                                        <textarea
                                            value={testimonialDraft.content}
                                            onChange={(e) => setTestimonialDraft({ ...testimonialDraft, content: e.target.value })}
                                            rows={4}
                                            placeholder="ZEPLYNK delivered exceptional results..."
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-zgreen-500/50 outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                            <Star className="h-3 w-3" /> Rating (1-5)
                                        </label>
                                        <div className="flex gap-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    onClick={() => setTestimonialDraft({ ...testimonialDraft, rating: star })}
                                                    className={`p-3 rounded-xl border transition-all ${testimonialDraft.rating >= star ? "bg-zgreen-500/20 border-zgreen-500 text-zgreen-500" : "bg-white/5 border-white/10 text-gray-600"}`}
                                                >
                                                    <Star className={`h-5 w-5 ${testimonialDraft.rating >= star ? "fill-zgreen-500" : ""}`} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Panel: Preview / JSON */}
                    <div className="lg:col-span-4 sticky top-24 h-fit space-y-6">
                        {view === "edit" || view === "preview" ? (
                            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                                <div className="p-4 border-b border-white/10 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">{activeTab} Preview</span>
                                </div>

                                <div className="p-0 overflow-hidden">
                                    {activeTab === "news" ? (
                                        <div className="bg-zinc-950 border-b border-white/10 p-6">
                                            <div className={`relative ${newsDraft.aspectRatio} rounded-2xl overflow-hidden mb-4 border border-white/5 bg-zinc-900`}>
                                                {newsDraft.image && isValidUrl(newsDraft.image) ? (
                                                    <Image src={newsDraft.image} alt="Preview" fill className="object-cover" />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 bg-zinc-900">
                                                        <ImageIcon className="h-12 w-12 opacity-20" />
                                                    </div>
                                                )}
                                            </div>
                                            <span className="inline-block px-2 py-0.5 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-[10px] font-bold text-zgreen-500 uppercase mb-3">
                                                {newsDraft.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-white mb-2 uppercase line-clamp-1">{newsDraft.title || "Untitled Post"}</h3>
                                            <p className="text-xs text-gray-400 line-clamp-2 italic">{newsDraft.excerpt || "No excerpt provided yet..."}</p>
                                        </div>
                                    ) : (
                                        <div className="bg-zinc-950 border-b border-white/10 p-6">
                                            <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-2xl">
                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`h-3 w-3 ${i < testimonialDraft.rating ? "fill-zgreen-500 text-zgreen-500" : "text-gray-700"}`} />
                                                    ))}
                                                </div>
                                                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium italic line-clamp-3">
                                                    "{testimonialDraft.content || "Client feedback text goes here..."}"
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zgreen-500/30 bg-zinc-800">
                                                        {testimonialDraft.image && isValidUrl(testimonialDraft.image) ? (
                                                            <Image src={testimonialDraft.image} alt="Avatar" fill className="object-cover" />
                                                        ) : (
                                                            <div className="absolute inset-0 flex items-center justify-center text-zgreen-500/40">
                                                                <User className="h-5 w-5" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white text-xs font-bold">{testimonialDraft.name || "Client Name"}</h4>
                                                        <p className="text-zgreen-500 text-[10px] font-black uppercase tracking-widest">{testimonialDraft.role || "Role"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Bar */}
                                    <div className="p-6 space-y-3">
                                        <Button
                                            onClick={handleCopyJson}
                                            className="w-full bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-zgreen-500/20"
                                        >
                                            {copied ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                                            {copied ? "JSON Copied!" : `Export ${activeTab} JSON`}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-[600px] flex flex-col">
                                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Code className="h-4 w-4 text-zgreen-500" />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{activeTab} JSON</span>
                                    </div>
                                    <button
                                        onClick={handleCopyJson}
                                        className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        {copied ? <Check className="h-3 w-3 text-zgreen-500" /> : <Copy className="h-3 w-3" />}
                                        {copied ? "COPIED" : "COPY"}
                                    </button>
                                </div>
                                <pre className="p-6 font-mono text-[11px] text-zgreen-400/80 overflow-auto flex-1 bg-black/40">
                                    {JSON.stringify({
                                        id: "new_id",
                                        ...(activeTab === "news" ? newsDraft : testimonialDraft)
                                    }, null, 4)}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
