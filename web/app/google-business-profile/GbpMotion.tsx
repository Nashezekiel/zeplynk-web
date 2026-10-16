"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const tags = {
    div: motion.div,
    ul: motion.ul,
    ol: motion.ol,
    li: motion.li,
};

type Tag = keyof typeof tags;

/** Fades and lifts its content into view once, the first time it scrolls on screen. */
export function Reveal({
    children,
    className,
    delay = 0,
    as = "div",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: Tag;
}) {
    const reduce = useReducedMotion();
    const Component = tags[as];
    return (
        <Component
            className={className}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            variants={itemVariants}
            transition={{ delay }}
        >
            {children}
        </Component>
    );
}

/** Reveals its StaggerItem children one after another. */
export function Stagger({
    children,
    className,
    as = "div",
    gap = 0.08,
}: {
    children: React.ReactNode;
    className?: string;
    as?: Tag;
    gap?: number;
}) {
    const reduce = useReducedMotion();
    const Component = tags[as];
    return (
        <Component
            className={className}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: gap } } }}
        >
            {children}
        </Component>
    );
}

export function StaggerItem({
    children,
    className,
    as = "div",
}: {
    children: React.ReactNode;
    className?: string;
    as?: Tag;
}) {
    const Component = tags[as];
    return (
        <Component className={className} variants={itemVariants}>
            {children}
        </Component>
    );
}

/** Hero visual: scales in on load, floats gently, and drifts with scroll. */
export function HeroVisual({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            >
                <motion.div
                    animate={reduce ? undefined : { y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

/** Thin green bar at the top of the viewport showing how far down the page the reader is. */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-zgreen-400 to-emerald-500"
        />
    );
}
