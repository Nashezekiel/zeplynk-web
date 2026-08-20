"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, CheckCircle, Brain, Workflow, ShieldCheck, Code2, Users, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const workshops = [
    { title: "AI for Business Leaders", desc: "Understand how to leverage AI for strategic advantage.", target: "Executives & Managers", icon: Brain },
    { title: "Agile Transformation", desc: "Implementing Scrum and Kanban for efficient workflows.", target: "Product Teams", icon: Workflow },
    { title: "Cybersecurity Awareness", desc: "Best practices for keeping corporate data secure.", target: "All Employees", icon: ShieldCheck },
    { title: "Modern Web Tech", desc: "Upskilling legacy teams to React and Next.js.", target: "Dev Teams", icon: Code2 },
];

const features = ['Customized Curriculum', 'On-site or Remote Delivery', 'Project-Based Learning', 'Post-Training Assessment'];

export default function CorporateTraining() {
    return (
        <section id="corporate" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

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
                        <h2 className="text-h2 font-bold text-white mb-6 leading-tight">
                            Corporate Training & <br />
                            <span className="text-blue-500">Workforce Upskilling</span>
                        </h2>
                        <p className="text-gray-200 text-body mb-8 leading-relaxed font-medium">
                            Empower your teams with the technical skills they need to stay competitive.
                            We offer tailored workshops and training programs delivered by industry experts.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 text-sm font-medium hover:border-blue-500/30 hover:bg-white/[0.07] transition-colors"
                                >
                                    <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                                    Request Training Consultation
                                    <ArrowRight className="h-5 w-5 ml-1" />
                                </Button>
                            </Link>
                            <a href="tel:08067263891" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-blue-400 transition-colors">
                                <Phone className="h-4 w-4" />
                                Or call 0806 726 3891
                            </a>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

                        <div className="relative flex items-center gap-2 mb-5">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Popular Workshop Tracks</span>
                        </div>

                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {workshops.map((workshop, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative bg-black/60 border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1 shadow-xl hover:shadow-blue-900/30"
                                >
                                    <span className="absolute top-5 right-5 text-[11px] font-mono font-bold text-white/15 group-hover:text-blue-500/40 transition-colors">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>

                                    <div className="h-11 w-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                                        <workshop.icon className="h-5 w-5 text-blue-400" />
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{workshop.title}</h4>
                                    <p className="text-caption text-gray-400 font-medium leading-relaxed mb-5">{workshop.desc}</p>

                                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-300/80 bg-blue-500/10 rounded-full px-3 py-1">
                                        <Users className="h-3 w-3" />
                                        {workshop.target}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
