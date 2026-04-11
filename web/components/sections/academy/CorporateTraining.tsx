"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const workshops = [
    { title: "AI for Business Leaders", desc: "Understand how to leverage AI for strategic advantage.", target: "Executives & Managers" },
    { title: "Agile Transformation", desc: "Implementing Scrum and Kanban for efficient workflows.", target: "Product Teams" },
    { title: "Cybersecurity Awareness", desc: "Best practices for keeping corporate data secure.", target: "All Employees" },
    { title: "Modern Web Tech", desc: "Upskilling legacy teams to React and Next.js.", target: "Dev Teams" },
];

export default function CorporateTraining() {
    return (
        <section id="corporate" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <Building2 className="h-4 w-4 mr-2" />
                            For Organizations
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            Corporate Training & <br />
                            <span className="text-blue-500">Workforce Upskilling</span>
                        </h2>
                        <p className="text-gray-200 text-lg mb-8 leading-relaxed font-medium">
                            Empower your teams with the technical skills they need to stay competitive.
                            We offer tailored workshops and training programs delivered by industry experts.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Customized Curriculum', 'On-site or Remote Delivery', 'Project-Based Learning', 'Post-Training Assessment'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-center text-gray-300"
                                >
                                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Link href="/contact">
                            <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                                Request Training Consultation
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {workshops.map((workshop, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-black/60 border border-white/20 p-6 rounded-2xl hover:border-blue-500/50 transition-all backdrop-blur-md group hover:-translate-y-1 shadow-xl hover:shadow-blue-900/20"
                            >
                                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 group-hover:text-blue-200 transition-colors">{workshop.target}</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{workshop.title}</h4>
                                <p className="text-sm text-gray-200 font-medium leading-relaxed">{workshop.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
