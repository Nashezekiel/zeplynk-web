"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Excellence",
        desc: "We maintain world-class standards in every line of code and every training session.",
        color: "text-zgreen-500",
        glow: "from-zgreen-500/20"
    },
    {
        icon: Users,
        title: "Accessibility",
        desc: "Democratizing tech education for everyone, regardless of their background or location.",
        color: "text-blue-500",
        glow: "from-blue-500/20"
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        desc: "Constantly evolving our pedagogy and tech stack to stay ahead of industry demands.",
        color: "text-purple-500",
        glow: "from-purple-500/20"
    },
    {
        icon: Heart,
        title: "Impact",
        desc: "Measuring our success by the tangible growth of our students and business partners.",
        color: "text-red-500",
        glow: "from-red-500/20"
    },
];

export default function CoreValues() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zgreen-900/10 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl font-bold text-white mb-6"
                    >
                        Our Core Values
                    </motion.h2>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        The bedrock of Zeplynk's culture and the driving force behind our mission.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl`} />

                            <div className="relative h-full bg-zinc-900/40 border border-white/10 p-8 rounded-[2rem] hover:border-white/20 transition-all flex flex-col items-center text-center group-hover:bg-zinc-900/60 overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-700">
                                    <value.icon className={`h-24 w-24 ${value.color}`} />
                                </div>

                                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className={`h-10 w-10 ${value.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                                    {value.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
