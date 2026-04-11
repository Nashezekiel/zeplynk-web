"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Clock,
    ArrowRight,
    Layout,
    Globe,
    Smartphone,
    Database,
    Bot,
    Cloud,
    Terminal,
    Shield,
    BarChart3,
    PenTool,
    Briefcase,
    Server
} from "lucide-react";

const courses = [
    {
        category: "Software Development",
        items: [
            { title: "Frontend Engineering", icon: Layout, desc: "React, Next.js, Tailwind CSS", duration: "12 Weeks" },
            { title: "Backend Development", icon: Server, desc: "Node.js, Python, PostgreSQL", duration: "12 Weeks" },
            { title: "Full Stack Development", icon: Globe, desc: "MERN Stack, Next.js", duration: "24 Weeks" },
            { title: "Mobile App Dev", icon: Smartphone, desc: "React Native, Flutter", duration: "16 Weeks" },
        ]
    },
    {
        category: "Data & AI",
        items: [
            { title: "Data Analytics", icon: BarChart3, desc: "Excel, SQL, PowerBI, Python", duration: "10 Weeks" },
            { title: "Data Science", icon: Database, desc: "Python, Pandas, ML Basics", duration: "16 Weeks" },
            { title: "AI Engineering", icon: Bot, desc: "LLMs, Prompt Engineering", duration: "12 Weeks" },
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            { title: "Cloud Computing", icon: Cloud, desc: "AWS, Azure Fundamentals", duration: "12 Weeks" },
            { title: "DevOps Engineering", icon: Terminal, desc: "Docker, Kubernetes, CI/CD", duration: "16 Weeks" },
            { title: "Cybersecurity", icon: Shield, desc: "Network Security, Eth Hacking", duration: "16 Weeks" },
        ]
    },
    {
        category: "Design & Product",
        items: [
            { title: "UI/UX Design", icon: PenTool, desc: "Figma, Prototyping, Research", duration: "10 Weeks" },
            { title: "Product Management", icon: Briefcase, desc: "Agile, Scrum, Strategy", duration: "8 Weeks" },
        ]
    }
];

export default function CourseCatalog() {
    return (
        <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-5xl font-bold text-white mb-6"
                    >
                        Comprehensive Tech Programs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-300 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Curated paths designed to take you from beginner to job-ready professional.
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {courses.map((category, idx) => (
                        <div key={idx}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl font-bold text-white mb-8 border-l-4 border-zgreen-500 pl-4"
                            >
                                {category.category}
                            </motion.h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.items.map((course, cIdx) => (
                                    <motion.div
                                        key={cIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: cIdx * 0.05 }}
                                        className="group bg-zinc-900 border border-white/10 hover:border-zgreen-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zgreen-500/10"
                                    >
                                        <div className="h-12 w-12 rounded-xl bg-white/5 group-hover:bg-zgreen-500/10 flex items-center justify-center mb-6 transition-colors">
                                            <course.icon className="h-6 w-6 text-gray-300 group-hover:text-zgreen-500 transition-colors" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zgreen-400 transition-colors">{course.title}</h4>
                                        <p className="text-sm text-gray-400 mb-4 h-10">{course.desc}</p>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center text-xs text-gray-500">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {course.duration}
                                            </div>
                                            <Link href="/register">
                                                <span className="text-xs font-bold text-white hover:underline flex items-center group-hover:text-zgreen-400 transition-colors">
                                                    Apply <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
