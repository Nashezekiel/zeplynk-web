"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Mail, Send, Sparkles, CheckCircle } from "lucide-react";
import type { NewsItem } from "@/constants/news";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Testimonials from "@/components/sections/Testimonials";

export default function NewsListingContent({ items: newsItems }: { items: NewsItem[] }) {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        const subject = encodeURIComponent("Newsletter Signup — Engineering Weekly");
        const body = encodeURIComponent(`Please subscribe this email to Engineering Weekly: ${email}`);
        window.location.href = `mailto:zeplynk001@gmail.com?subject=${subject}&body=${body}`;
        setSubscribed(true);
    };

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-zgreen-500 transition-colors mb-8 group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold mb-6 tracking-widest uppercase">
                            <Tag className="h-3 w-3" />
                            Insights & Architecture
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            LATEST FROM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">THE LAB.</span>
                        </h1>
                        <p className="text-gray-400 text-xl font-medium leading-relaxed">
                            Deep-dives into scalable engineering, AI automation, and the future of digital infrastructure — from the Zeplynk team in Kaduna, Nigeria.
                        </p>
                    </div>
                </header>

                {/* Testimonials */}
                <Testimonials />

                {/* Newsletter Teaser */}
                <div className="relative overflow-hidden mb-20 p-6 sm:p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-zgreen-500/10 via-zinc-900/60 to-zinc-900/60 border border-zgreen-500/20 backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex-1 max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-500 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                                <Sparkles className="h-3 w-3" />
                                Engineering Weekly
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                                Join 2,500+ leaders getting the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                    stack blueprint
                                </span>{" "}
                                every Tuesday.
                            </h3>
                            <p className="text-gray-400 font-medium text-sm sm:text-base">No fluff — just the technical deep-dives, straight to your inbox.</p>
                        </div>
                        {subscribed ? (
                            <div className="flex items-center justify-center gap-2 text-zgreen-400 font-bold px-6 py-3 w-full lg:w-auto">
                                <CheckCircle className="h-5 w-5 shrink-0" />
                                Check your email app to confirm!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                                <div className="relative w-full sm:w-64">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email@company.com"
                                        className="w-full bg-black/50 border border-white/15 rounded-xl pl-11 pr-4 py-3 hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 outline-none transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold px-8 py-3 rounded-xl transition-all whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-95"
                                >
                                    Join Now <Send className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {newsItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 0.1}>
                            <div className="break-inside-avoid group relative bg-zinc-900/60 border border-white/20 rounded-3xl overflow-hidden hover:border-zgreen-500/30 transition-all duration-500 backdrop-blur-md">
                                {/* Image Overlay */}
                                <div className={`relative ${item.aspectRatio} overflow-hidden`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold mb-3 tracking-widest uppercase">
                                        <Calendar className="h-3 w-3" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zgreen-400 transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed mb-6 font-bold">
                                        {item.excerpt}
                                    </p>

                                    <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group/btn">
                                        Read Article
                                        <div className="h-[2px] w-8 bg-zgreen-500 group-hover/btn:w-12 transition-all duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </main>
    );
}
