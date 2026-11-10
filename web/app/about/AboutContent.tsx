"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, CheckCircle, Code2, Compass, GraduationCap, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutHero from "@/components/sections/about/AboutHero";
import JourneyTimeline from "@/components/sections/about/JourneyTimeline";
import CoreValues from "@/components/sections/about/CoreValues";
import TeamSection from "@/components/sections/about/TeamSection";
import { CARD, CONTAINER, Reveal, SECTION, SectionHeader } from "@/components/sections/about/shared";

const services = [
    { icon: Code2, title: "Custom software", desc: "Web apps and platforms built to fit how your business works.", href: "/solutions/web-engineering" },
    { icon: Bot, title: "AI automation", desc: "Chatbots and workflows that take repetitive work off your team.", href: "/ai" },
    { icon: MapPin, title: "Google Business Profile", desc: "Get found on Google Search and Maps by local customers.", href: "/google-business-profile" },
    { icon: GraduationCap, title: "Zeplynk Academy", desc: "Hands-on training that turns beginners into developers.", href: "/academy" },
];

const purpose = [
    {
        icon: Target,
        title: "Our mission",
        body: "To democratize access to technology education and services across Africa, creating pathways for digital transformation in underserved communities while delivering world-class solutions to businesses globally.",
        points: ["Accessible tech education for all", "Bridging the digital divide", "Empowering local communities"],
    },
    {
        icon: Compass,
        title: "Our vision",
        body: "To be Africa's leading catalyst for technological innovation and education, creating a generation of skilled developers and innovators who will shape the future of the digital economy.",
        points: ["1 million+ trained developers by 2030", "Presence in all 36 Nigerian states", "Leading African tech education platform"],
    },
];

// Page flow: who we are -> proof -> why -> story -> how -> who -> next step.
export default function AboutContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">
            <AboutHero />

            {/* What we do */}
            <section aria-label="What we do" className="px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-white/[0.015]">
                <div className={`${CONTAINER} py-10 md:py-12`}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-zgreen-400 mb-6">What we do</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, i) => (
                            <li key={service.title}>
                                <Reveal delay={i * 0.06} className="h-full">
                                    <Link
                                        href={service.href}
                                        className={`${CARD} group h-full flex flex-col p-5 hover:border-zgreen-500/40 hover:bg-white/[0.05] transition-colors`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="h-10 w-10 rounded-xl bg-zgreen-500/10 flex items-center justify-center">
                                                <service.icon className="h-5 w-5 text-zgreen-400" />
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-zgreen-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{service.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                                    </Link>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={SECTION}>
                <div className={CONTAINER}>
                    <SectionHeader
                        eyebrow="Our purpose"
                        title="Mission and vision"
                        lead="What drives us today, and where we're headed next."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {purpose.map((item, i) => (
                            <Reveal key={item.title} delay={i * 0.08} className="h-full">
                                <article className={`${CARD} h-full p-6 md:p-8`}>
                                    <div className="h-10 w-10 rounded-xl bg-zgreen-500/10 flex items-center justify-center mb-6">
                                        <item.icon className="h-5 w-5 text-zgreen-400" />
                                    </div>
                                    <h3 className="text-h3 font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{item.body}</p>
                                    <ul className="mt-6 pt-6 border-t border-white/10 space-y-3">
                                        {item.points.map((point) => (
                                            <li key={point} className="flex items-start gap-3 text-sm font-semibold text-white">
                                                <CheckCircle className="h-4 w-4 text-zgreen-500 mt-0.5 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <JourneyTimeline />

            <CoreValues />

            <TeamSection />

            {/* CTA */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
                <Reveal className={CONTAINER}>
                    <div className="rounded-2xl border border-zgreen-500/20 bg-gradient-to-br from-zgreen-500/10 via-white/[0.02] to-transparent p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-h2 font-bold text-white tracking-tight mb-3">Join the movement</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Whether you're starting your tech journey, need development services, or want to
                                partner with us for social impact, we're here to help you succeed.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link href="/academy">
                                <Button className="h-12 px-7 w-full sm:w-auto rounded-full bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold">
                                    Start learning
                                </Button>
                            </Link>
                            <Link href="/solutions">
                                <Button variant="outline" className="h-12 px-7 w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white/10 font-bold">
                                    Our services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
