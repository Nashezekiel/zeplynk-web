"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SolutionSectionProps {
    id: string;
    title: string;
    description: string;
    items: { name: string; href: string }[];
    icon: LucideIcon;
    image?: string;
    reversed?: boolean;
    accentColor?: string; // e.g., "text-zgreen-500", "text-blue-500"
    bgColor?: string; // e.g., "bg-zgreen-500/10", "bg-blue-500/10"
}

export default function SolutionSection({
    id,
    title,
    description,
    items,
    icon: Icon,
    image,
    reversed = false,
    accentColor = "text-zgreen-500",
    bgColor = "bg-zgreen-500/5",
}: SolutionSectionProps) {
    return (
        <section id={id} className="lg:min-h-screen flex items-center justify-center relative overflow-hidden group/section scroll-mt-16 lg:scroll-mt-20 px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
            {/* Background Accent Fade */}
            <div className={`absolute top-1/2 ${reversed ? 'left-0' : 'right-0'} -translate-y-1/2 w-[500px] h-[500px] ${bgColor} rounded-full blur-[120px] opacity-20 pointer-events-none group-hover/section:opacity-30 transition-opacity duration-1000`} />

            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-24`}>
                
                {/* Content Column - Flows in from opposite side of the image */}
                <motion.div 
                    initial={{ opacity: 0, x: reversed ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 space-y-8"
                >
                    <div className="space-y-4">
                        <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full ${bgColor} border border-white/5`}>
                            <Icon className={`w-5 h-5 ${accentColor}`} />
                            <span className={`text-xs font-black uppercase tracking-[0.2em] ${accentColor}`}>{title.split(' ')[0]} Expertise</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            {title}
                        </h2>
                        
                        <p className="text-xl text-gray-400 leading-relaxed font-medium">
                            {description}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {items.map((item, idx) => (
                            <Link 
                                key={idx} 
                                href={item.href}
                                className="group/item flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all"
                            >
                                <CheckCircle2 className={`w-5 h-5 ${accentColor} shrink-0`} />
                                <span className="text-gray-300 font-bold text-sm tracking-wide group-hover/item:text-white transition-colors">{item.name}</span>
                                <ArrowRight className="w-4 h-4 ml-auto text-gray-600 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>

                    <div>
                        <Link href="/contact">
                            <Button className="h-14 px-8 bg-white hover:bg-zinc-200 text-black rounded-2xl text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                                Start With {title.split(' ')[0]}
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Visual / Image Column - Flows in from opposite side of content */}
                <motion.div
                    initial={{ opacity: 0, x: reversed ? -100 : 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 w-full flex justify-center items-center"
                >
                    <div className="relative w-full aspect-square max-w-[500px]">
                        {/* High-Tech Decorative Card */}
                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zgreen-500/50 to-transparent`} />
                            
                            <div className="h-full w-full relative">
                                {image ? (
                                    <Image 
                                        src={image} 
                                        alt={title} 
                                        fill 
                                        className="object-cover opacity-80 group-hover/section:scale-110 transition-transform duration-[2000ms] ease-out"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className={`absolute w-32 h-32 ${bgColor} rounded-full blur-3xl opacity-50`} />
                                        <Icon className={`w-24 h-24 ${accentColor} relative z-10 animate-pulse`} strokeWidth={1} />
                                    </div>
                                )}
                                
                                {/* Floating Nodes Decoration */}
                                <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-white opacity-20 animate-ping" />
                                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-zgreen-500 opacity-40 animate-bounce delay-700" />
                                <div className="absolute top-1/2 left-10 w-12 h-1 bg-white/5 rounded-full rotate-45" />
                                <div className="absolute bottom-10 right-20 w-1 h-12 bg-white/5 rounded-full -rotate-12" />
                            </div>
                        </div>

                        {/* Outer Glow Ring */}
                        <div className={`absolute -inset-4 rounded-[4rem] border border-white/5 opacity-50 group-hover/section:opacity-100 group-hover/section:scale-105 transition-all duration-1000 ${reversed ? 'rotate-3' : '-rotate-3'}`} />
                        <div className={`absolute -inset-8 rounded-[5rem] border border-white/[0.02] group-hover/section:scale-110 transition-all duration-1000 ${reversed ? '-rotate-6' : 'rotate-6'}`} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
