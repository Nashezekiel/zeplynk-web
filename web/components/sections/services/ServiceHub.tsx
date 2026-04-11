"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Laptop, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const hubs = [
    {
        title: "AI & Automation",
        desc: "Transform your operations with intelligent agents, predictive analytics, and conversational AI.",
        href: "/ai",
        icon: Bot,
        color: "text-zgreen-500",
        bg: "bg-zgreen-950/40",
        border: "hover:border-zgreen-500/50"
    },
    {
        title: "Web Engineering",
        desc: "Scalable product development, corporate systems, and performance-driven digital experiences.",
        href: "/web",
        icon: Laptop,
        color: "text-blue-500",
        bg: "bg-blue-950/20",
        border: "hover:border-blue-500/50"
    },
    {
        title: "Industry Solutions",
        desc: "Specialized technology expertise for HR, Startups, E-commerce, EdTech, and Enterprises.",
        href: "/industries",
        icon: Briefcase,
        color: "text-purple-500",
        bg: "bg-purple-950/20",
        border: "hover:border-purple-500/50"
    },
    {
        title: "Zeplynk Academy",
        desc: "Career-launching tech programs and corporate workforce upskilling for the modern age.",
        href: "/academy",
        icon: GraduationCap,
        color: "text-cyan-500",
        bg: "bg-cyan-950/20",
        border: "hover:border-cyan-500/50"
    }
];

export default function ServiceHub() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hubs.map((hub, i) => (
                        <motion.div
                            key={hub.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link href={hub.href} className="group block h-full">
                                <div className={`h-full ${hub.bg} border border-white/10 ${hub.border} rounded-[2.5rem] p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <hub.icon className={`h-8 w-8 ${hub.color}`} />
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-white transition-colors">{hub.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                        {hub.desc}
                                    </p>

                                    <div className="inline-flex items-center font-bold text-white group-hover:translate-x-2 transition-transform">
                                        Explored specialized solutions <ArrowRight className="ml-2 h-5 w-5" />
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
