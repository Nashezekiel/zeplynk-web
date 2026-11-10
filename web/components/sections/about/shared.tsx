"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Shared building blocks so every About section uses the same rhythm:
// same width, same vertical spacing, same header, same card.

export const SECTION = "px-4 sm:px-6 lg:px-8 py-16 md:py-24";
export const CONTAINER = "max-w-6xl mx-auto";
export const CARD = "rounded-2xl border border-white/10 bg-white/[0.03]";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeader({ eyebrow, title, lead, center = false }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
    return (
        <Reveal className={`mb-10 md:mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zgreen-400 mb-3">{eyebrow}</p>
            <h2 className="text-h2 font-bold text-white tracking-tight">{title}</h2>
            {lead && <p className="mt-4 text-body text-gray-400">{lead}</p>}
        </Reveal>
    );
}
