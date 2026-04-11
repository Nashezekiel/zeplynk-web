"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ArrowUpRight } from "lucide-react";
import { newsItems } from "@/constants/news";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Testimonials from "@/components/sections/Testimonials";

export default function NewsListingPage() {
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
                            Deep-dives into scalable engineering, AI automation, and the future of digital infrastructure.
                        </p>
                    </div>
                </header>

                {/* Testimonials */}
                <Testimonials />

                {/* Newsletter Teaser */}
                <div className="mb-20 p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Engineering Weekly</h3>
                        <p className="text-gray-400 font-medium">Join 2,500+ leaders getting the stack blueprint every Tuesday.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-4">
                        <input
                            type="email"
                            placeholder="email@company.com"
                            className="bg-black/40 border border-white/10 rounded-xl px-6 py-3 flex-1 md:w-64 focus:border-zgreen-500/50 outline-none transition-all"
                        />
                        <button className="bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold px-8 py-3 rounded-xl transition-all whitespace-nowrap">
                            Join Now
                        </button>
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
