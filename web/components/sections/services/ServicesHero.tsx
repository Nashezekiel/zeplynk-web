"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ServicesHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-zgreen-900/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="h-4 w-4 text-zgreen-400 mr-2" />
                    <span className="text-sm font-medium text-zgreen-200 tracking-wide uppercase">Full-Stack Technology Ecosystem</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
                >
                    Innovative solutions <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 via-emerald-500 to-cyan-500">for every scale.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    From specialized engineering to transformative AI and industry-specific training,
                    we provide the technical catalyst your business needs to outperform.
                </motion.p>
            </div>
        </section>
    );
}
