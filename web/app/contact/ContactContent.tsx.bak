"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Orb = dynamic(() => import("@/components/ui/Orb"), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[-1]" />
});

// Dynamic Imports
const ContactHero = dynamic(() => import("@/components/sections/contact/ContactHero"), {
    loading: () => <div className="h-[500px] bg-black animate-pulse" />
});

const ContactMethods = dynamic(() => import("@/components/sections/contact/ContactMethods"), {
    loading: () => <div className="h-[600px] bg-zinc-900 animate-pulse" />
});

const ContactForm = dynamic(() => import("@/components/sections/contact/ContactForm"), {
    loading: () => <div className="h-[600px] bg-black animate-pulse" />
});

export default function ContactContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly relative overflow-hidden">
            {/* Ambient Background Orb */}
            <div className="fixed inset-0 pointer-events-none z-[1]">
                <Orb
                    hue={0}
                    hoverIntensity={0.8}
                    rotateOnHover={true}
                    forceHoverState={false}
                    backgroundColor="#000000"
                />
            </div>

            <div className="relative z-[2] bg-transparent">

                {/* Hero Section */}
                <Suspense fallback={<div className="h-[500px] bg-black animate-pulse" />}>
                    <ContactHero />
                </Suspense>

                {/* Contact Grid Section (Form + Value Prop) */}
                <section className="pt-4 pb-24 px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                                        Have a project <br />
                                        <span className="text-zgreen-500">in mind?</span>
                                    </h2>
                                    <p className="text-xl text-gray-200 leading-relaxed mb-10 max-w-xl font-medium">
                                        Tell us about your goals, challenges, and vision. Our engineering
                                        experts will help you translate your ideas into high-impact digital realities.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            "Strategy-first approach",
                                            "Scalable system architecture",
                                            "AI-powered process optimization",
                                            "Post-launch support & maintenance"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center text-white">
                                                <div className="bg-zgreen-500/20 rounded-full p-1.5 mr-4 border border-zgreen-500/30">
                                                    <CheckCircle className="h-5 w-5 text-zgreen-400" />
                                                </div>
                                                <span className="text-lg font-bold">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <Suspense fallback={<div className="h-[600px] bg-zinc-900 animate-pulse rounded-[2.5rem]" />}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </section>

                {/* Contact Methods (Email, Phone, WhatsApp, Hours) */}
                <Suspense fallback={<div className="h-[600px] bg-zinc-900 animate-pulse" />}>
                    <ContactMethods />
                </Suspense>

                {/* Strategy Call CTA */}
                <section className="py-32 px-4 sm:px-6 lg:px-8 bg-transparent relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zgreen-900/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-zgreen-500/20 transition-all duration-700" />

                            <Zap className="h-12 w-12 text-zgreen-500 mx-auto mb-8 animate-pulse" />

                            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
                                Ready for the next <br /> level of growth?
                            </h2>
                            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Book a free 30-minute strategy call with our team. No strings attached,
                                just high-value consulting to help you identify your next move.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <Link href="https://wa.me/2348067263891" target="_blank">
                                    <Button className="h-16 px-12 bg-white text-black hover:bg-gray-200 rounded-2xl text-xl font-bold w-full sm:w-auto shadow-2xl transition-all hover:scale-105 active:scale-95">
                                        Book Strategy Call
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}
