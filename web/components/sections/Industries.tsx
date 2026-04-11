"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, GraduationCap, Users, Briefcase } from "lucide-react";

const industries = [
    { id: "hr-recruitment", icon: Users, name: "Recruitment & HR", color: "text-blue-400" },
    { id: "startups-saas", icon: Briefcase, name: "Startups & SaaS", color: "text-purple-400" },
    { id: "ecommerce", icon: ShoppingBag, name: "E-commerce", color: "text-pink-400" },
    { id: "education", icon: GraduationCap, name: "Education", color: "text-yellow-400" },
    { id: "sme-corporate", icon: Building2, name: "SMEs & Corporate", color: "text-zgreen-400" }
];

export default function Industries() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Solutions Across High-Growth Industries
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((item, index) => (
                        <Link key={item.name} href={`/industries#${item.id}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-zinc-900/70 border border-white/20 px-6 py-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-md"
                            >
                                <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                                <span className="text-white font-bold">{item.name}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
