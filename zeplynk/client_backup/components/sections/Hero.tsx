import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code2, Globe, Layers, Server, Terminal, Cpu, Database, Cloud } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop";

// Hero Logos (using Lucide for safety, can swap to Si* brands later)
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
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-zgreen-900/20 rounded-full blur-[120px] opacity-70" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Headline */}
                    <motion.h1
                        className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        We Engineer Digital Infrastructure<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                            That Powers Business Growth.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        ZEPLYNK builds high-performance web platforms and AI-driven automation systems that eliminate inefficiencies, increase conversion, and give modern businesses a measurable competitive edge.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link to="/contact">
                            <Button size="lg" className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-full h-14 px-8 text-lg font-semibold shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300">
                                Book a Strategy Call
                            </Button>
                        </Link>
                        <Link to="#solutions">
                            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full h-14 px-8 text-lg font-medium backdrop-blur-sm">
                                Explore Our Solutions
                            </Button>
                        </Link>
                    </motion.div>
                    {/* Logo Loop - Large */}
                    <motion.div
                        className="py-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Trusted Technology Stack</p>
                        <LogoLoop
                            logos={heroLogos}
                            speed={50}
                            direction="left"
                            iconSize="text-6xl"
                        />
                    </motion.div>
                </div>

                {/* Hero Dashboard Abstract UI */}
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
                    className="relative mx-auto max-w-6xl perspective-1000 mt-8"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.35/1]">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

                        {/* UI Content Mockup */}
                        <div className="p-8 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="h-2 w-1/3 bg-white/5 rounded-full" />
                                <div className="h-2 w-10 bg-white/5 rounded-full" />
                            </div>

                            <div className="grid grid-cols-4 gap-6 h-full">
                                <div className="col-span-1 border-r border-white/5 pr-6 space-y-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-8 w-full bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                                    ))}
                                </div>
                                <div className="col-span-3 grid grid-cols-2 gap-6">
                                    <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                                        <div className="h-32 bg-gradient-to-t from-zgreen-500/20 to-transparent rounded-lg relative overflow-hidden">
                                            <div className="absolute bottom-0 w-full h-[1px] bg-zgreen-500/50" />
                                        </div>
                                    </div>
                                    <div className="bg-black/20 rounded-xl p-4 border border-white/5 space-y-3">
                                        <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-2 w-full bg-white/5 rounded-full" />
                                        <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 mb-8"
                animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
