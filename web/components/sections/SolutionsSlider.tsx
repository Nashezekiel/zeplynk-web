"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code, Bot, Laptop, GraduationCap, ArrowUpRight, ChevronLeft, ChevronRight, Server } from "lucide-react";
import NextImage from "next/image";

import Link from "next/link";

const solutions = [
    {
        icon: Code,
        title: "Web Engineering",
        desc: "High-performance websites & SaaS platforms engineered for scale.",
        color: "text-blue-500",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        href: "/solutions#engineering"
    },
    {
        icon: Bot,
        title: "AI Automation",
        desc: "Intelligent bots & CRM systems that drive efficiency.",
        color: "text-purple-500",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        href: "/solutions#ai"
    },
    {
        icon: Laptop,
        title: "Digitization",
        desc: "Internal portals & dashboards to streamline operations.",
        color: "text-zgreen-500",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        href: "/solutions#enterprise"
    },
    {
        icon: GraduationCap,
        title: "Tech Academy",
        desc: "Training the next generation of software engineers.",
        color: "text-yellow-500",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        href: "/academy"
    },
    {
        icon: Server,
        title: "Custom APIs",
        desc: "Robust backend infrastructure for mobile & web apps.",
        color: "text-pink-500",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        href: "/solutions#engineering"
    }
];

export default function SolutionsSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 350;
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section suppressHydrationWarning className="pb-24 bg-black overflow-hidden relative group/section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                            Our Core <span className="text-gray-400">Solutions</span>
                        </h2>
                        <p className="text-gray-300 max-w-xl font-medium">
                            Explore how we engineer growth for your business through specialized digital infrastructure.
                        </p>
                    </div>
                    <Link href="/solutions">
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center text-zgreen-500 font-bold group/link cursor-pointer"
                        >
                            View All Solutions <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </motion.div>
                    </Link>
                </div>
            </div>

            {/* Slider Container Wrapper */}
            <div className="relative w-full">

                {/* Left Arrow - Positioned Absolute Left */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-zgreen-500 hover:border-zgreen-500 transition-all duration-300 shadow-lg hidden md:flex"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Right Arrow - Positioned Absolute Right */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-zgreen-500 hover:border-zgreen-500 transition-all duration-300 shadow-lg hidden md:flex"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Scrollable Area */}
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-proximity scrollbar-hide no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-none w-[300px] md:w-[350px] snap-center"
                        >
                            <Link href={item.href}>
                                <div className="h-[450px] flex flex-col rounded-3xl bg-zinc-900/60 border border-white/20 hover:border-zgreen-500/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-md cursor-pointer shadow-xl">

                                    {/* Image Background */}
                                    <div className="absolute inset-0">
                                        <NextImage
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 300px, 350px"
                                            className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                        <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 ${item.color}`}>
                                            <item.icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 text-shadow">{item.title}</h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed text-sm font-medium">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center text-sm font-bold text-zgreen-500">
                                            Read More <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Spacer for right padding */}
                    <div className="w-4 sm:w-6 lg:w-8 flex-none" />
                </div>
            </div>
        </section>
    );
}
