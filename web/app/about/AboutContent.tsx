"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic Imports
const AboutHero = dynamic(() => import("@/components/sections/about/AboutHero"), {
    loading: () => <div className="h-[500px] bg-black animate-pulse" />
});

const JourneyTimeline = dynamic(() => import("@/components/sections/about/JourneyTimeline"), {
    loading: () => <div className="h-[600px] bg-zinc-900 animate-pulse" />
});

const CoreValues = dynamic(() => import("@/components/sections/about/CoreValues"), {
    loading: () => <div className="h-[400px] bg-black animate-pulse" />
});

export default function AboutContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Hero Section */}
            <Suspense fallback={<div className="h-[500px] bg-black animate-pulse" />}>
                <AboutHero />
            </Suspense>

            {/* Mission & Vision */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/60 border-y border-white/10 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zgreen-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-black/50 border border-white/10 rounded-[2.5rem] p-10 hover:border-zgreen-500/30 transition-all duration-500 group"
                        >
                            <div className="bg-zgreen-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Zap className="h-8 w-8 text-zgreen-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-200 leading-relaxed mb-8 text-lg font-medium">
                                To democratize access to technology education and services across Africa,
                                creating pathways for digital transformation in underserved communities while
                                delivering world-class solutions to businesses globally.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Accessible tech education for all",
                                    "Bridging the digital divide",
                                    "Empowering local communities"
                                ].map((item) => (
                                    <li key={item} className="flex items-center text-white font-bold">
                                        <CheckCircle className="h-5 w-5 text-zgreen-500 mr-4" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 hover:border-blue-500/30 transition-all duration-500 group"
                        >
                            <div className="bg-blue-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Zap className="h-8 w-8 text-blue-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-gray-200 leading-relaxed mb-8 text-lg font-medium">
                                To be Africa's leading catalyst for technological innovation and education,
                                creating a generation of skilled developers and innovators who will shape
                                the future of the digital economy.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "1 million+ trained developers by 2030",
                                    "Presence in all 36 Nigerian states",
                                    "Leading African tech education platform"
                                ].map((item) => (
                                    <li key={item} className="flex items-center text-white font-bold">
                                        <CheckCircle className="h-5 w-5 text-blue-500 mr-4" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story / Journey */}
            <Suspense fallback={<div className="h-[600px] bg-zinc-900 animate-pulse" />}>
                <JourneyTimeline />
            </Suspense>

            {/* Core Values */}
            <Suspense fallback={<div className="h-[400px] bg-black animate-pulse" />}>
                <CoreValues />
            </Suspense>

            {/* Impact Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/70">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-20 border border-white/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-zgreen-500/20 transition-all duration-700" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                                    Impact <br /> That Matters.
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-medium">
                                    We've helped launch over 50 startups, automated business processes for SMEs,
                                    and trained more than 2,000 students in Nigeria. Our alumni work at leading
                                    tech firms and contribute to open-source projects worldwide.
                                </p>
                                <Link href="/contact" className="inline-flex items-center text-zgreen-400 font-bold hover:text-zgreen-300 transition-colors group/link">
                                    Read our success stories <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Startups Launched", value: "50+" },
                                    { label: "Students Trained", value: "2,000+" },
                                    { label: "Automation Solutions", value: "100+" },
                                    { label: "Community Impact", value: "Nigeria Wide" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20"
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                            Join the movement.
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                            Whether you're ready to start your tech journey, need development services,
                            or want to partner with us for social impact, we're here to help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/academy">
                                <Button className="h-16 px-10 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-lg font-bold w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95">
                                    Start Learning
                                </Button>
                            </Link>
                            <Link href="/solutions">
                                <Button variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-2xl text-lg font-bold w-full sm:w-auto transition-all hover:border-white/40">
                                    Our Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
