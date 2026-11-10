"use client";

import { CONTAINER, Reveal, SECTION, SectionHeader } from "./shared";

const events = [
    {
        year: "2024",
        title: "The genesis",
        desc: "Zeplynk was founded with a mission to bridge the digital divide in Africa.",
    },
    {
        year: "2024",
        title: "Academy launch",
        desc: "Launched Zeplynk Academy and welcomed our first cohort of tech students.",
    },
    {
        year: "2025",
        title: "Service expansion",
        desc: "Started offering dedicated AI and high-end software engineering services globally.",
    },
    {
        year: "2025",
        title: "Strategic partnerships",
        desc: "Partnered with leading tech firms and NGOs to scale our community impact.",
    },
];

export default function JourneyTimeline() {
    return (
        <section className={`${SECTION} bg-white/[0.015] border-y border-white/5`}>
            <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16`}>
                <SectionHeader
                    eyebrow="Our journey"
                    title="From an idea to a growing tech company"
                    lead="How Zeplynk has grown since it started in Kaduna."
                />

                <ol className="relative border-l border-white/10 ml-2">
                    {events.map((event, i) => (
                        <li key={event.title} className="relative pl-8 pb-10 last:pb-0">
                            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zgreen-500 ring-4 ring-black" />
                            <Reveal delay={i * 0.06}>
                                <p className="text-xs font-bold tracking-widest text-zgreen-400 mb-1">{event.year}</p>
                                <h3 className="text-lg font-bold text-white mb-1.5">{event.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{event.desc}</p>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
