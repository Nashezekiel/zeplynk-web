"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Satellite, BrainCircuit } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "datagram",
        label: "Connectivity Platform",
        title: "Datagram NG",
        domain: "datagram.ng",
        description:
            "Full-stack platform for Nigeria's leading Starlink installer, serving all 36 states.",
        tags: ["Web Engineering", "Next.js", "SEO"],
        href: "https://datagram.ng/",
        icon: Satellite,
        gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
        border: "border-blue-500/30 hover:border-blue-400/60",
        glow: "bg-blue-500/10",
        iconColor: "text-blue-400",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        meshColor: "34,211,238",
    },
    {
        id: "artech",
        label: "AI & Data Intelligence",
        title: "Artech Systems",
        domain: "artechsystems.org",
        description:
            "Modern web presence for an enterprise data intelligence and AI company.",
        tags: ["AI Platform", "React", "Branding"],
        href: "https://artechsystems.org/",
        icon: BrainCircuit,
        gradient: "from-purple-600/20 via-indigo-500/10 to-transparent",
        border: "border-purple-500/30 hover:border-purple-400/60",
        glow: "bg-purple-500/10",
        iconColor: "text-purple-400",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        meshColor: "168,85,247",
    },
];

export default function PortfolioProjects() {
    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/8 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-6 backdrop-blur-sm">
                        <Globe className="h-4 w-4 text-zgreen-400" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">
                            Client Work
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                        Projects We've{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                            Shipped
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Real platforms built for real businesses — from satellite internet services
                        to enterprise AI intelligence systems.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="w-full sm:w-[320px]"
                        >
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col h-full bg-zinc-900/50 border ${project.border} rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block`}
                            >
                                {/* Top gradient stripe */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity z-10`}
                                />

                                {/* Browser mockup preview */}
                                <div className="relative h-32 border-b border-white/10 overflow-hidden">
                                    {/* Backdrop wash */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                                    <div
                                        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full blur-[50px] transition-opacity duration-500 opacity-60 group-hover:opacity-90"
                                        style={{ background: `rgba(${project.meshColor}, 0.35)` }}
                                    />

                                    {/* Fake browser chrome */}
                                    <div className="relative z-10 mx-3 mt-3 rounded-t-lg bg-black/50 border border-white/10 border-b-0 backdrop-blur-md">
                                        <div className="flex items-center gap-1 px-2.5 py-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                                            <span className="ml-2 flex-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-gray-400 font-mono truncate">
                                                {project.domain}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mock viewport with centered brand icon */}
                                    <div className="relative z-10 mx-3 h-[calc(100%-2.75rem)] rounded-b-lg bg-black/30 border border-white/10 border-t-0 backdrop-blur-md flex items-center justify-center">
                                        <div
                                            className={`w-11 h-11 rounded-xl ${project.glow} border ${project.border.split(" ")[0]} flex items-center justify-center`}
                                        >
                                            <project.icon className={`h-5 w-5 ${project.iconColor}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 p-5 flex flex-col flex-1">
                                    <div
                                        className={`inline-flex self-start px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-3 ${project.badgeColor}`}
                                    >
                                        {project.label}
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-zgreen-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-snug text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                        <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                                            View Live Project
                                        </span>
                                        <div
                                            className={`w-7 h-7 rounded-full ${project.glow} border ${project.border.split(" ")[0]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                                        >
                                            <ArrowUpRight className={`h-3.5 w-3.5 ${project.iconColor}`} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-zgreen-400 font-bold hover:text-zgreen-300 transition-colors group/link text-lg"
                    >
                        See all client projects
                        <ArrowUpRight className="h-5 w-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
