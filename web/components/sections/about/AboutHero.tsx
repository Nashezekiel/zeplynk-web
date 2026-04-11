"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Target } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-0 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zgreen-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-8 backdrop-blur-sm"
                >
                    <Zap className="h-4 w-4 text-zgreen-400 mr-2" />
                    <span className="text-sm font-bold text-white tracking-wide uppercase">Engineering Africa's Future</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
                >
                    We Build, We Teach, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 via-emerald-500 to-cyan-500">We Empower.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    Zeplynk is a full-service technology powerhouse dedicated to digital transformation.
                    From high-end software engineering to world-class education, we are the bridge to greatness.
                </motion.p>
            </div>
        </section>
    );
}
