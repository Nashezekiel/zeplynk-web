"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe, Layers, Server, Terminal, Cpu, Database, Cloud } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop";
import Particles from "@/components/ui/Particles";
import TechInfographic from "@/components/ui/TechInfographic";

const heroLogos = [
    { node: <Code2 />, title: "React", href: "https://react.dev", color: "text-blue-400" },
    { node: <Globe />, title: "Next.js", href: "https://nextjs.org", color: "text-white" },
    { node: <Code2 />, title: "TypeScript", href: "https://www.typescriptlang.org", color: "text-blue-600" },
    { node: <Layers />, title: "Tailwind CSS", href: "https://tailwindcss.com", color: "text-cyan-400" },
    { node: <Server />, title: "Node.js", href: "https://nodejs.org", color: "text-green-500" },
    { node: <Terminal />, title: "Python", href: "https://www.python.org", color: "text-yellow-400" },
    { node: <Cpu />, title: "Java", href: "https://www.java.com", color: "text-red-500" },
    { node: <Database />, title: "PostgreSQL", href: "https://www.postgresql.org", color: "text-blue-300" },
    { node: <Cloud />, title: "AWS", href: "https://aws.amazon.com", color: "text-orange-500" },
];

export default function Hero() {
    return (
        <section suppressHydrationWarning className="relative pt-28 pb-20 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Effects */}
            <div suppressHydrationWarning className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0">
                    <Particles
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleColors={["#ffffff", "#ffffff", "#ffffff"]}
                        moveParticlesOnHover={false}
                        particleHoverFactor={1}
                        alphaParticles={false}
                        particleBaseSize={100}
                        sizeRandomness={1}
                        cameraDistance={20}
                        disableRotation={false}
                    />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-zgreen-900/20 rounded-full blur-[120px] opacity-70" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-40" />
            </div>

            <div suppressHydrationWarning className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

                    {/* Left Column: Content */}
                    <div className="text-left">
                        {/* Headline */}
                        <motion.h1
                            className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Engineering Infrastructure<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                For Global Scale.
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed font-medium"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            ZEPLYNK delivers high-performance web platforms and AI automation systems that eliminate inefficiencies and drive measurable business growth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 items-left"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Link href="/contact">
                                <Button size="lg" className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl h-12 px-7 text-base font-bold shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] transition-all">
                                    Book Strategy Call
                                </Button>
                            </Link>
                            <Link href="#solutions">
                                <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-2xl h-12 px-7 text-base font-bold backdrop-blur-sm">
                                    Our Solutions
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated Tech Infographic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        className="relative hidden lg:block lg:-mt-32"
                    >
                        <TechInfographic />
                    </motion.div>
                </div>

                {/* Logo Loop - Full Width */}
                <motion.div
                    className="pt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <LogoLoop
                        logos={heroLogos}
                        speed={60}
                        direction="left"
                        iconSize="text-4xl"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-12 flex flex-col items-center gap-2 text-gray-500"
                animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-zgreen-500/50 to-transparent" />
            </motion.div>
        </section>
    );
}
