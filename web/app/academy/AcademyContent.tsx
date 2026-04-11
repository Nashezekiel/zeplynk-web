"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import {
    ArrowRight,
    Zap,
    CheckCircle,
    Award,
    Users,
    Clock,
    BookOpen,
    Briefcase,
    Building2,
    GraduationCap,
    Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Dynamic Sections
const AcademyStats = dynamic(() => import("@/components/sections/academy/AcademyStats"), {
    loading: () => <div className="h-32 bg-zinc-900 animate-pulse w-full border-y border-white/5" />
});

const CourseCatalog = dynamic(() => import("@/components/sections/academy/CourseCatalog"), {
    loading: () => <div className="h-96 bg-black animate-pulse w-full" />
});

const CorporateTraining = dynamic(() => import("@/components/sections/academy/CorporateTraining"), {
    loading: () => <div className="h-[600px] bg-zinc-900 animate-pulse w-full" />
});

export default function AcademyContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zgreen-900/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-8 backdrop-blur-sm"
                    >
                        <GraduationCap className="h-4 w-4 text-zgreen-400 mr-2" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">EdTech & Corporate Training</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
                    >
                        Master the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 via-emerald-500 to-cyan-500">Technology</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Whether you're starting your career or upskilling your workforce, Zeplynk Academy provides
                        world-class training in software engineering, data, AI, and design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link href="#programs">
                            <Button className="h-16 px-10 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-lg font-bold w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95">
                                View Course Catalog
                            </Button>
                        </Link>
                        <Link href="#corporate">
                            <Button variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-2xl text-lg font-bold w-full sm:w-auto backdrop-blur-sm transition-all hover:border-white/40">
                                Corporate Training
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <Suspense fallback={<div className="h-32 bg-zinc-900 animate-pulse w-full border-y border-white/5" />}>
                <AcademyStats />
            </Suspense>

            {/* Course Catalog */}
            <Suspense fallback={<div className="h-96 bg-black animate-pulse w-full" />}>
                <CourseCatalog />
            </Suspense>

            {/* Corporate Training Section */}
            <Suspense fallback={<div className="h-[600px] bg-zinc-900 animate-pulse w-full" />}>
                <CorporateTraining />
            </Suspense>

            {/* Why Choose Us */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zgreen-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">Why Zeplynk Academy?</h2>
                        <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                            Our pedagogy is built on real-world engineering experience and industry demand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Users, title: "Expert Mentorship", desc: "Learn directly from senior engineers who have built scalable products and lead teams at top tech firms." },
                            { icon: Briefcase, title: "Career Support", desc: "Resume reviews, interview prep, and direct connections to our network of high-growth hiring partners." },
                            { icon: Award, title: "Verified Certification", desc: "Earn a certificate that is widely recognized and validates your skills to employers globally." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/20 hover:border-zgreen-500/30 transition-all group hover:bg-zinc-900/80 backdrop-blur-md"
                            >
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-zgreen-500/10 transition-colors group-hover:rotate-6 duration-300">
                                    <item.icon className="h-10 w-10 text-white group-hover:text-zgreen-500 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zgreen-400 transition-colors tracking-tight">{item.title}</h3>
                                <p className="text-gray-200 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-zgreen-500/20 transition-all duration-700" />

                        <Zap className="h-12 w-12 text-zgreen-500 mx-auto mb-8 animate-pulse" />

                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 relative z-10 leading-tight">
                            Ready to Upgrade <br /> Your Career?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
                            The tech industry is evolving fast. Join the next cohort of future leaders and master the skills that matter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link href="/register">
                                <Button className="h-16 px-12 bg-white text-black hover:bg-gray-200 rounded-2xl text-xl font-bold w-full sm:w-auto shadow-2xl transition-all hover:scale-105 active:scale-95">
                                    Apply for Enrollment
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

