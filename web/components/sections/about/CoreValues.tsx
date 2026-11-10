"use client";

import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { CARD, CONTAINER, Reveal, SECTION, SectionHeader } from "./shared";

const values = [
    {
        icon: Award,
        title: "Excellence",
        desc: "We maintain world-class standards in every line of code and every training session.",
    },
    {
        icon: Users,
        title: "Accessibility",
        desc: "Democratizing tech education for everyone, regardless of their background or location.",
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        desc: "Constantly evolving our pedagogy and tech stack to stay ahead of industry demands.",
    },
    {
        icon: Heart,
        title: "Impact",
        desc: "Measuring our success by the tangible growth of our students and business partners.",
    },
];

export default function CoreValues() {
    return (
        <section className={SECTION}>
            <div className={CONTAINER}>
                <SectionHeader
                    eyebrow="Core values"
                    title="What guides our work"
                    lead="The principles behind Zeplynk's culture and how we serve clients and students."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {values.map((value, i) => (
                        <Reveal key={value.title} delay={i * 0.06} className="h-full">
                            <div className={`${CARD} h-full p-6 hover:border-zgreen-500/30 transition-colors`}>
                                <div className="h-10 w-10 rounded-xl bg-zgreen-500/10 flex items-center justify-center mb-5">
                                    <value.icon className="h-5 w-5 text-zgreen-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
