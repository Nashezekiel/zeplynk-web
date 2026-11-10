"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { CARD, CONTAINER } from "./shared";

const facts = [
    { label: "Founded", value: SITE.foundingDate },
    { label: "Founder & CEO", value: SITE.founder.name },
    { label: "Headquarters", value: SITE.address.display },
    { label: "Operations", value: "Kaduna and Jos" },
    { label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phoneE164}` },
];

export default function AboutHero() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
            <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-zgreen-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className={`${CONTAINER} relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center`}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="text-gray-300">About</span>
                    </nav>

                    <h1 className="text-h1 font-bold text-white tracking-tight mb-6">
                        We build, we teach,{" "}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-300">we empower.</span>
                    </h1>

                    <p className="text-body text-gray-300 leading-relaxed max-w-xl">
                        Zeplynk is a technology company founded in {SITE.foundingDate} by {SITE.founder.name}, based in
                        Kaduna, Nigeria, with operations in Jos. We build custom software and AI automation for
                        businesses, and train developers through Zeplynk Academy.
                    </p>
                </motion.div>

                <motion.dl
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className={`${CARD} divide-y divide-white/10 backdrop-blur-sm`}
                >
                    {facts.map((fact) => (
                        <div key={fact.label} className="flex items-baseline justify-between gap-6 px-6 py-4">
                            <dt className="text-sm text-gray-500 shrink-0">{fact.label}</dt>
                            <dd className="text-sm font-semibold text-white text-right">
                                {fact.href ? (
                                    <a href={fact.href} className="hover:text-zgreen-400 transition-colors">{fact.value}</a>
                                ) : (
                                    fact.value
                                )}
                            </dd>
                        </div>
                    ))}
                </motion.dl>
            </div>
        </section>
    );
}
