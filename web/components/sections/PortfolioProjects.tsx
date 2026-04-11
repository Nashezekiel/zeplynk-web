"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Satellite, BrainCircuit } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "datagram",
        label: "Connectivity Platform",
        title: "Datagram NG",
        subtitle: "Starlink Installation & Services — Nigeria",
        description:
            "Full-stack web platform built for Nigeria's leading Starlink installation and distribution company. The site serves customers across all 36 states with service booking, coverage information, and satellite internet consultation.",
        tags: ["Web Engineering", "Next.js", "SEO", "Performance"],
        href: "https://datagram.ng/",
        icon: Satellite,
        gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
        border: "border-blue-500/30 hover:border-blue-400/60",
        glow: "bg-blue-500/10",
        iconColor: "text-blue-400",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    },
    {
        id: "artech",
        label: "AI & Data Intelligence",
        title: "Artech Systems",
        subtitle: "Data Intelligence & AI Platform",
        description:
            "Designed and developed a modern, high-performance web presence for Artech Systems — a data intelligence and AI company. The platform showcases their services, case studies, and positions them as a leader in enterprise AI solutions.",
        tags: ["AI Platform", "React", "UI/UX Design", "Branding"],
        href: "https://artechsystems.org/",
        icon: BrainCircuit,
        gradient: "from-purple-600/20 via-indigo-500/10 to-transparent",
        border: "border-purple-500/30 hover:border-purple-400/60",
        glow: "bg-purple-500/10",
        iconColor: "text-purple-400",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
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
                    className="text-center mb-20"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative flex flex-col h-full bg-zinc-900/50 border ${project.border} rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block`}
                            >
                                {/* Top gradient stripe */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient.replace("from-", "from-").replace("via-", "via-").replace("to-transparent", "to-transparent")} opacity-60 group-hover:opacity-100 transition-opacity`}
                                />

                                {/* Gradient background bleed */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-64 bg-gradient-to-br ${project.gradient} pointer-events-none`}
                                />

                                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                                    {/* Icon + Badge row */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div
                                            className={`w-14 h-14 rounded-2xl ${project.glow} border ${project.border.split(" ")[0]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <project.icon className={`h-7 w-7 ${project.iconColor}`} />
                                        </div>
                                        <div
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${project.badgeColor}`}
                                        >
                                            {project.label}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-zgreen-300 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className={`text-sm font-semibold ${project.iconColor} mb-4`}>
                                            {project.subtitle}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed text-base mb-8">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                                            View Live Project
                                        </span>
                                        <div
                                            className={`w-10 h-10 rounded-full ${project.glow} border ${project.border.split(" ")[0]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                                        >
                                            <ArrowUpRight className={`h-5 w-5 ${project.iconColor}`} />
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
