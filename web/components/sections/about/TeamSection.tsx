"use client";

import Image from "next/image";
import { Linkedin, UserRound } from "lucide-react";
import { SITE } from "@/lib/site";
import { TEAM } from "@/lib/team";
import { CARD, CONTAINER, Reveal, SECTION, SectionHeader } from "./shared";

function Avatar({ name, photo, className }: { name: string; photo?: string; className: string }) {
    return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-zgreen-500/20 to-emerald-500/5 border border-white/10 flex items-center justify-center ${className}`}>
            {photo ? (
                <Image src={photo} alt={name} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
            ) : (
                <UserRound aria-hidden strokeWidth={1.5} className="h-1/2 w-1/2 text-zgreen-300/70" />
            )}
        </div>
    );
}

function LinkedInLink({ href, name }: { href: string; name: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 hover:border-zgreen-500/50 hover:text-zgreen-300 transition-colors"
        >
            <Linkedin className="h-4 w-4" />
        </a>
    );
}

export default function TeamSection() {
    return (
        <section className={`${SECTION} bg-white/[0.015] border-y border-white/5 mb-16 md:mb-24`}>
            <div className={CONTAINER}>
                <SectionHeader
                    eyebrow="Our team"
                    title="The people behind Zeplynk"
                    lead="A small team of engineers and educators building software and training developers from Kaduna."
                />

                {/* Founder */}
                <Reveal>
                    <article className={`${CARD} p-6 md:p-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 md:gap-8 items-center`}>
                        <Avatar name={SITE.founder.name} photo={SITE.founder.photo} className="h-40 w-40 md:h-48 md:w-48 rounded-2xl text-4xl" />
                        <div>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-h3 font-bold text-white">{SITE.founder.name}</h3>
                                    <p className="mt-1 text-sm font-semibold text-zgreen-400">{SITE.founder.jobTitle}</p>
                                </div>
                                <LinkedInLink href={SITE.founder.linkedin} name={SITE.founder.name} />
                            </div>
                            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
                                {SITE.founder.name} founded {SITE.name} in {SITE.foundingDate} in Kaduna, Nigeria, to
                                help businesses grow with custom software and AI automation, and to train the next
                                generation of Nigerian developers through Zeplynk Academy.
                            </p>
                        </div>
                    </article>
                </Reveal>

                {/* Team */}
                <ul className="mt-4 md:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {TEAM.map((member, i) => (
                        <li key={`${member.name}-${i}`}>
                            <Reveal delay={i * 0.06} className="h-full">
                                <article className={`${CARD} h-full p-3 md:p-4`}>
                                    <Avatar name={member.name} photo={member.photo} className="aspect-square w-full rounded-xl text-2xl md:text-3xl" />
                                    <div className="px-1 pt-4 pb-1 flex items-start justify-between gap-2">
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-white truncate">{member.name}</h3>
                                            <p className="mt-0.5 text-sm text-gray-400 truncate">{member.role}</p>
                                        </div>
                                        {member.linkedin && <LinkedInLink href={member.linkedin} name={member.name} />}
                                    </div>
                                    {member.bio && <p className="px-1 pt-2 text-sm text-gray-400 leading-relaxed">{member.bio}</p>}
                                </article>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
