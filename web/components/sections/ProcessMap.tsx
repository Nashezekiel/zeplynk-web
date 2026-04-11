"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "Business analysis & requirements gathering.",
        icon: Search,
        color: "from-blue-500 to-cyan-500"
    },
    {
        num: "02",
        title: "Strategy",
        desc: "System architecture & solution design.",
        icon: Lightbulb,
        color: "from-amber-400 to-orange-500"
    },
    {
        num: "03",
        title: "Blueprint",
        desc: "UI/UX design & technical prototyping.",
        icon: PenTool,
        color: "from-purple-500 to-pink-500"
    },
    {
        num: "04",
        title: "Engineering",
        desc: "Agile development & rigorous testing.",
        icon: Code2,
        color: "from-zgreen-400 to-emerald-600"
    },
    {
        num: "05",
        title: "Scale",
        desc: "Deployment, optimization & growth.",
        icon: Rocket,
        color: "from-blue-600 to-indigo-600"
    },
];

export default function ProcessMap() {
    return (
        <section className="min-h-[80vh] flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-zgreen-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zgreen-500 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zgreen-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-zgreen-500"></span>
                        </span>
                        Our Methodology
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight"
                    >
                        Our Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">Framework</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium"
                    >
                        We don't just build websites. We engineer high-performance digital systems
                        designed to scale with your ambition.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                    {/* Visual Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center group"
                        >
                            {/* Icon Wrapper */}
                            <div className="relative mb-8 z-10">
                                <div className={`w-24 h-24 rounded-[2rem] bg-zinc-900 border border-white/20 flex items-center justify-center group-hover:border-zgreen-500/50 transition-all duration-500 group-hover:rotate-[10deg] shadow-2xl overflow-hidden backdrop-blur-md`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                    <step.icon className="h-8 w-8 text-white group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-gray-300 group-hover:text-zgreen-500 group-hover:border-zgreen-500/30 transition-all duration-500 z-20">
                                    {step.num}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center group-hover:translate-y-[-4px] transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed max-w-[200px] group-hover:text-white transition-colors font-medium">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Mobile Connector */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden w-[1px] h-12 bg-white/5 my-6" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <a href="/contact" className="inline-flex items-center gap-2 text-zgreen-500 font-bold hover:text-zgreen-400 transition-colors group">
                        Let's build your blueprint <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
