"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { newsItems } from "@/constants/news";

export default function NewsSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="max-w-7xl mx-auto uppercase">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold mb-4 tracking-widest">
                                <Tag className="h-3 w-3" />
                                ZEPlynk INSIGHTS
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
                                LATEST FROM <br />
                                <span className="text-zgreen-500">OUR WORLD.</span>
                            </h2>
                        </div>
                        <Link href="/news" className="group flex items-center gap-2 text-white/80 hover:text-zgreen-400 transition-colors font-bold tracking-tighter uppercase">
                            View All News
                            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Pinterest-style Masonry Grid (Slider on Mobile) */}
                <div className="flex flex-row sm:block overflow-x-auto sm:overflow-visible snap-x snap-proximity gap-6 sm:columns-2 lg:columns-3 pb-8 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {newsItems.map((item, index) => (
                        <div key={item.id} className="flex-none w-[300px] snap-center sm:w-full sm:inline-block sm:break-inside-avoid sm:mb-6">
                            <ScrollReveal delay={index * 0.1}>
                                <div className="group relative bg-zinc-900/60 border border-white/20 rounded-3xl overflow-hidden hover:border-zgreen-500/30 transition-all duration-500 backdrop-blur-md flex flex-col h-[450px] sm:h-auto sm:block">
                                    {/* Image Overlay */}
                                    <div className={`relative w-full h-[200px] shrink-0 sm:h-auto sm:w-full ${item.aspectRatio} overflow-hidden`}>
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
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold mb-3 tracking-widest uppercase shrink-0">
                                            <Calendar className="h-3 w-3" />
                                            {item.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zgreen-400 transition-colors line-clamp-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed mb-6 font-bold flex-1">
                                            {item.excerpt}
                                        </p>

                                        <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group/btn shrink-0 mt-auto">
                                            Read Article
                                            <div className="h-[2px] w-8 bg-zgreen-500 group-hover/btn:w-12 transition-all duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
