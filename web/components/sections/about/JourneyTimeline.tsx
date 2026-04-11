"use client";

import { motion } from "framer-motion";

const events = [
    {
        year: "2021",
        title: "The Genesis",
        desc: "ZEPLYNK was founded with a mission to bridge the digital divide in Africa.",
        side: "left"
    },
    {
        year: "2022",
        title: "Academy Launch",
        desc: "Successfully launched our first cohort of tech training, empowering 500+ students.",
        side: "right"
    },
    {
        year: "2023",
        title: "Service Expansion",
        desc: "Started offering dedicated AI and high-end software engineering services globally.",
        side: "left"
    },
    {
        year: "2024",
        title: "Strategic Partnerships",
        desc: "Partnered with leading tech firms and NGOs to scale our community impact.",
        side: "right"
    }
];

export default function JourneyTimeline() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl font-bold text-white mb-6"
                    >
                        Our Journey
                    </motion.h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium">
                        A retrospective look at how we've grown from an idea to a leading catalyst for tech innovation.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-zgreen-500/50 via-zgreen-500/20 to-transparent hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: event.side === "left" ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row items-center ${event.side === "right" ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="md:w-1/2 w-full flex justify-center px-4">
                                    <div className="bg-zinc-900/60 border border-white/20 p-8 rounded-[2rem] hover:border-zgreen-500/50 transition-all group relative backdrop-blur-md">
                                        <div className="absolute -top-4 -left-4 bg-zgreen-600/20 border border-zgreen-500/30 px-3 py-1 rounded-full text-zgreen-400 text-sm font-bold backdrop-blur-md">
                                            {event.year}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zgreen-400 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-200 leading-relaxed text-sm font-medium">
                                            {event.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Orb */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zgreen-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20 border-4 border-black" />

                                <div className="md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
