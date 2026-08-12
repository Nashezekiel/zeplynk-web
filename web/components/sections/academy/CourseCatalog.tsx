"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Clock,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
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
            { title: "Frontend Engineering", icon: Layout, desc: "React, Next.js, Tailwind CSS", duration: "12 Weeks", image: "/Service Images/web.jpeg" },
            { title: "Backend Development", icon: Server, desc: "Node.js, Python, PostgreSQL", duration: "12 Weeks", image: "/Service Images/Backend.jpeg" },
            { title: "Full Stack Development", icon: Globe, desc: "MERN Stack, Next.js", duration: "24 Weeks", image: "/Service Images/web.jpeg" },
            { title: "Mobile App Dev", icon: Smartphone, desc: "React Native, Flutter", duration: "16 Weeks", image: "/Service Images/andriod.png" },
        ]
    },
    {
        category: "Data & AI",
        items: [
            { title: "Data Analytics", icon: BarChart3, desc: "Excel, SQL, PowerBI, Python", duration: "10 Weeks", image: "/Service Images/Data Analytics.jpeg" },
            { title: "Data Science", icon: Database, desc: "Python, Pandas, ML Basics", duration: "16 Weeks", image: "/Service Images/Data Analytics.jpeg" },
            { title: "AI Engineering", icon: Bot, desc: "LLMs, Prompt Engineering", duration: "12 Weeks", image: "/Service Images/AI.jpeg" },
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            { title: "Cloud Computing", icon: Cloud, desc: "AWS, Azure Fundamentals", duration: "12 Weeks", image: "/Service Images/Digitalization.jpeg" },
            { title: "DevOps Engineering", icon: Terminal, desc: "Docker, Kubernetes, CI/CD", duration: "16 Weeks", image: "/Service Images/DevOps.jpeg" },
            { title: "Cybersecurity", icon: Shield, desc: "Network Security, Eth Hacking", duration: "16 Weeks", image: "/Service Images/Cyber Security1.jpeg" },
        ]
    },
    {
        category: "Design & Product",
        items: [
            { title: "UI/UX Design", icon: PenTool, desc: "Figma, Prototyping, Research", duration: "10 Weeks", image: "/Service Images/UI_UX.jpeg" },
            { title: "Product Management", icon: Briefcase, desc: "Agile, Scrum, Strategy", duration: "8 Weeks", image: "/Service Images/Education.jpeg" },
        ]
    }
];

type Course = (typeof courses)[number]["items"][number];

function CourseCard({ course, className = "" }: { course: Course; className?: string }) {
    return (
        <div className={`group bg-zinc-900 border border-white/10 hover:border-zgreen-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zgreen-500/10 ${className}`}>
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent" />
                <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <course.icon className="h-5 w-5 text-zgreen-400" />
                </div>
            </div>

            <div className="p-6">
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
            </div>
        </div>
    );
}

function CourseSlider({ items }: { items: Course[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        const container = scrollRef.current;
        const card = container?.children[index] as HTMLElement | undefined;
        if (!container || !card) return;
        container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
        setActiveIndex(index);
    };

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;
        const center = container.scrollLeft + container.clientWidth / 2;
        let closest = 0;
        let minDistance = Infinity;
        Array.from(container.children).forEach((child, i) => {
            const card = child as HTMLElement;
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenter - center);
            if (distance < minDistance) {
                minDistance = distance;
                closest = i;
            }
        });
        setActiveIndex(closest);
    };

    return (
        <div className="md:hidden">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {items.map((course, cIdx) => (
                    <CourseCard
                        key={cIdx}
                        course={course}
                        className="w-[80vw] max-w-[300px] flex-shrink-0 snap-center"
                    />
                ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
                <button
                    onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous course"
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zgreen-500/10 hover:border-zgreen-500/40 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            aria-label={`Go to course ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-6 bg-zgreen-500" : "w-2 bg-white/20"}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scrollToIndex(Math.min(items.length - 1, activeIndex + 1))}
                    disabled={activeIndex === items.length - 1}
                    aria-label="Next course"
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zgreen-500/10 hover:border-zgreen-500/40 transition-colors"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

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
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
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

                            <CourseSlider items={category.items} />

                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.items.map((course, cIdx) => (
                                    <CourseCard key={cIdx} course={course} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
