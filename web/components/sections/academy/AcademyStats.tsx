"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Graduates", value: "500+" },
    { label: "Hiring Partners", value: "20+" },
    { label: "Job Placement", value: "90%" },
    { label: "Completion Rate", value: "95%" },
];

export default function AcademyStats() {
    return (
        <section className="py-12 border-y border-white/10 bg-zinc-900/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
