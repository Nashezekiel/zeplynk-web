"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock, Zap, Sparkles } from "lucide-react";

const stats = [
    { icon: TrendingUp, value: "145%", label: "Revenue Increase", color: "text-zgreen-500", bg: "bg-zgreen-500/10" },
    { icon: Clock, value: "20hrs", label: "Saved Weekly", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Zap, value: "3.2x", label: "Faster Load Time", color: "text-zyellow-400", bg: "bg-zyellow-500/10" },
    { icon: TrendingDown, value: "12%", label: "Cart Abandonment", color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function CaseStudyBlock() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zgreen-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-6 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-zgreen-400" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">Case Study</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Real Business Impact</h2>
                    <p className="text-gray-400 text-lg">See how we engineer growth for our partners.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative bg-zinc-900/50 border border-white/15 rounded-[2.5rem] overflow-hidden backdrop-blur-md"
                >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zgreen-500 via-blue-400 to-purple-500 opacity-70" />

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left: Context */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                                <span>E-commerce Automation</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                                Scaling a Retail Startup to 10k+ Monthly Users
                            </h3>

                            <div className="space-y-6 text-gray-200 font-medium">
                                <div className="flex gap-4">
                                    <div className="w-1 rounded-full bg-red-500/40 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold mb-2">The Problem</h4>
                                        <p className="text-sm text-gray-400">Manual inventory management and slow site performance were causing a 40% cart abandonment rate.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1 rounded-full bg-zgreen-500/40 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold mb-2">The Solution</h4>
                                        <p className="text-sm text-gray-400">We engineered a custom Next.js storefront with an automated inventory syncing bot and AI-powered product recommendations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="p-8 md:p-12 bg-black/20 flex flex-col justify-center">
                            <h4 className="text-white font-bold mb-8 uppercase tracking-wide text-sm">Measurable Results</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-black/40 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                        </div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-gray-400 font-bold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
