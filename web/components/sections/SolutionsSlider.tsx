"use client";

import { motion } from "framer-motion";
import { Code, Bot, Laptop, GraduationCap, ArrowUpRight, Server } from "lucide-react";
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
    return (
        <section className="pb-24 bg-black relative">
            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-h2 font-bold text-white mb-4">
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

            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link href={item.href}>
                                <div className="h-[260px] sm:h-[320px] lg:h-[380px] flex flex-col rounded-2xl bg-zinc-900/60 border border-white/20 hover:border-zgreen-500/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-md cursor-pointer shadow-xl">

                                    {/* Image Background */}
                                    <div className="absolute inset-0">
                                        <NextImage
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                                            className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-end">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 ${item.color}`}>
                                            <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </div>

                                        <h3 className="text-h3 font-bold text-white mb-2 leading-tight text-shadow">{item.title}</h3>
                                        <p className="hidden sm:block text-gray-300 mb-4 leading-relaxed text-caption font-medium line-clamp-2">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center text-xs sm:text-sm font-bold text-zgreen-500">
                                            Read More <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
