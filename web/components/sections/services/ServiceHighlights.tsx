"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, Globe2 } from "lucide-react";

const highlights = [
    {
        icon: ShieldCheck,
        title: "Enterprise Grade",
        desc: "We build systems that scale securely, meeting the highest standards of reliability and performance."
    },
    {
        icon: Zap,
        title: "Agile Execution",
        desc: "Rapid prototyping and iterative development ensure your product goes from concept to launch faster."
    },
    {
        icon: BarChart3,
        title: "Data-Driven AI",
        desc: "Our AI solutions are built on solid data foundations, providing actionable insights and real ROI."
    },
    {
        icon: Globe2,
        title: "Global Standards",
        desc: "While we're rooted in Africa, we apply global engineering best practices and design aesthetics."
    }
];

export default function ServiceHighlights() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-zgreen-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl mb-8 group-hover:border-zgreen-500/30 transition-all duration-300 relative">
                                <div className="absolute inset-0 bg-zgreen-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <item.icon className="h-10 w-10 text-zgreen-500 relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
