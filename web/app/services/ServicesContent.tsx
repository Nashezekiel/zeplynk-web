"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic Imports
const ServicesHero = dynamic(() => import("@/components/sections/services/ServicesHero"), {
    loading: () => <div className="h-[500px] bg-black animate-pulse" />
});

const ServiceHub = dynamic(() => import("@/components/sections/services/ServiceHub"), {
    loading: () => <div className="h-[800px] bg-zinc-950 animate-pulse" />
});

const ServiceHighlights = dynamic(() => import("@/components/sections/services/ServiceHighlights"), {
    loading: () => <div className="h-[400px] bg-black animate-pulse" />
});

export default function ServicesContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Hero Section */}
            <Suspense fallback={<div className="h-[500px] bg-black animate-pulse" />}>
                <ServicesHero />
            </Suspense>

            {/* Hub Navigation Tiles */}
            <Suspense fallback={<div className="h-[800px] bg-zinc-950 animate-pulse" />}>
                <ServiceHub />
            </Suspense>

            {/* Highlights Bar */}
            <Suspense fallback={<div className="h-[400px] bg-black animate-pulse" />}>
                <ServiceHighlights />
            </Suspense>

            {/* Ecosystem CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-zinc-950">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zgreen-900/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

                        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-10 leading-tight">
                            Build your tech <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">legacy with us.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
                            Zeplynk is more than a service provider—we're a dedicated partner in your growth.
                            From training your team to building your most critical systems, we're with you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <Button className="h-16 px-12 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-xl font-bold w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95">
                                    Start a Project
                                </Button>
                            </Link>
                            <Link href="/academy">
                                <Button variant="outline" className="h-16 px-12 border-white/10 text-white hover:bg-white/5 rounded-2xl text-xl font-bold w-full sm:w-auto transition-all">
                                    Browse Academy
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
