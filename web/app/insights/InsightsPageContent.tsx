"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Lightbulb, Send, CheckCircle } from "lucide-react";
import type { NewsItem } from "@/constants/news";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InsightsPageContent({ items: newsItems }: { items: NewsItem[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const categories = useMemo(
        () => Array.from(new Set(newsItems.map((item) => item.category))),
        [newsItems]
    );

    const [featured, ...rest] = newsItems;

    const visibleArticles = activeCategory
        ? rest.filter((item) => item.category === activeCategory)
        : rest;

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        const subject = encodeURIComponent("Newsletter Signup — Engineering Weekly");
        const body = encodeURIComponent(`Please subscribe this email to Engineering Weekly: ${email}`);
        window.location.href = `mailto:zeplynk001@gmail.com?subject=${subject}&body=${body}`;
        setSubscribed(true);
    };

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-zgreen-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-96 left-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-zgreen-500 transition-colors mb-8 group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold mb-6 tracking-widest uppercase">
                            <Lightbulb className="h-3 w-3" />
                            Insights &amp; Knowledge
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">INSIGHTS.</span>
                        </h1>
                        <p className="text-gray-400 text-xl font-medium leading-relaxed">
                            Deep-dives into scalable engineering, AI automation, and the future of digital infrastructure — written by the Zeplynk team in Kaduna, Nigeria.
                        </p>
                    </div>
                </header>

                {/* Featured Article */}
                {!activeCategory && featured && (
                    <ScrollReveal>
                        <Link
                            href={`/news/${featured.slug}`}
                            className="group relative flex flex-col lg:flex-row gap-0 bg-zinc-900/60 border border-white/15 rounded-[2.5rem] overflow-hidden hover:border-zgreen-500/40 transition-all duration-500 backdrop-blur-md mb-16"
                        >
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zgreen-500 via-emerald-400 to-zgreen-500 opacity-70 z-10" />
                            <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
                                <div className="absolute top-5 left-5 flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-zgreen-500 text-black text-[10px] font-black tracking-widest uppercase">
                                        Featured
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">
                                        {featured.category}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold mb-4 tracking-widest uppercase">
                                    <Calendar className="h-3 w-3" />
                                    {featured.date}
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-zgreen-400 transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3">
                                    {featured.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-white text-sm font-black uppercase tracking-widest w-fit">
                                    Read Full Article
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </ScrollReveal>
                )}

                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-3 mb-16">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border ${
                            activeCategory === null
                                ? "bg-zgreen-500 text-black border-zgreen-500"
                                : "bg-white/5 text-gray-400 border-white/15 hover:border-white/30 hover:text-white"
                        }`}
                    >
                        All Articles
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border ${
                                activeCategory === cat
                                    ? "bg-zgreen-500 text-black border-zgreen-500"
                                    : "bg-white/5 text-gray-400 border-white/15 hover:border-white/30 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Article Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
                    {visibleArticles.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 0.1}>
                            <Link
                                href={`/news/${item.slug}`}
                                className="break-inside-avoid block group relative bg-zinc-900/60 border border-white/15 rounded-3xl overflow-hidden hover:border-zgreen-500/40 transition-all duration-500 backdrop-blur-md"
                            >
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
                                    <span className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group/btn">
                                        Read Article
                                        <div className="h-[2px] w-8 bg-zgreen-500 group-hover/btn:w-12 transition-all duration-300" />
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}

                    {visibleArticles.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500 text-lg">No articles in this category yet.</p>
                        </div>
                    )}
                </div>

                {/* Newsletter */}
                <div className="relative overflow-hidden p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zgreen-500/10 via-zinc-900/60 to-zinc-900/60 border border-zgreen-500/20 backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Engineering Weekly</h3>
                            <p className="text-gray-400 font-medium">Join 2,500+ leaders getting the stack blueprint every Tuesday.</p>
                        </div>
                        {subscribed ? (
                            <div className="flex items-center gap-2 text-zgreen-400 font-bold px-6 py-3">
                                <CheckCircle className="h-5 w-5" />
                                Check your email app to confirm!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@company.com"
                                    className="bg-black/50 border border-white/15 rounded-xl px-6 py-3 flex-1 md:w-64 hover:border-white/25 focus:border-zgreen-500/60 focus:ring-4 focus:ring-zgreen-500/10 outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold px-8 py-3 rounded-xl transition-all whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-95"
                                >
                                    Join Now <Send className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
