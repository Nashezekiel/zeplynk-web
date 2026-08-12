"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LogoLoopProps {
    logos: {
        node: React.ReactNode;
        title: string;
        href?: string;
        color?: string;
    }[];
    speed?: number; // Seconds for one full set of logos to scroll past
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    iconSize?: string; // e.g. "text-4xl", "text-6xl"
}

export default function LogoLoop({
    logos,
    speed = 14,
    direction = "left",
    pauseOnHover = true,
    iconSize = "text-5xl",
}: LogoLoopProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const [setWidth, setSetWidth] = useState(0);
    const x = useMotionValue(0);

    useEffect(() => {
        if (!trackRef.current) return;
        const width = trackRef.current.scrollWidth / 2;
        setSetWidth(width);
        x.set(direction === "left" ? 0 : -width);
    }, [logos, direction, x]);

    // Drives the scroll by directly incrementing a transform each frame —
    // never touches the CSS `animation` property, so it can't be zeroed out
    // by the site's prefers-reduced-motion override, and since it only ever
    // moves one way (wrapping via modulo) it can never visibly reverse.
    useAnimationFrame((_, delta) => {
        if (isPaused.current || setWidth === 0) return;
        const pixelsPerSecond = setWidth / speed;
        const step = (pixelsPerSecond * delta) / 1000;

        if (direction === "left") {
            let next = x.get() - step;
            if (next <= -setWidth) next += setWidth;
            x.set(next);
        } else {
            let next = x.get() + step;
            if (next >= 0) next -= setWidth;
            x.set(next);
        }
    });

    return (
        <div
            suppressHydrationWarning
            className="w-full overflow-hidden relative group py-8"
            onMouseEnter={() => {
                if (pauseOnHover) isPaused.current = true;
            }}
            onMouseLeave={() => {
                isPaused.current = false;
            }}
        >
            {/* Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

            <motion.div ref={trackRef} className="flex gap-12 w-max items-center" style={{ x }}>
                {/* Render logos twice to create seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center min-w-[140px] transition-all duration-300 hover:scale-110"
                    >
                        {logo.href ? (
                            <a
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-4 group/logo"
                                title={logo.title}
                            >
                                <div className={`${iconSize} ${logo.color || 'text-white'} [&_svg]:w-[1em] [&_svg]:h-[1em] group-hover/logo:text-zgreen-500 transition-colors`}>
                                    {logo.node}
                                </div>
                            </a>
                        ) : (
                            <div className="flex flex-col items-center gap-4 group/logo" title={logo.title}>
                                <div className={`${iconSize} ${logo.color || 'text-white'} [&_svg]:w-[1em] [&_svg]:h-[1em] group-hover/logo:text-zgreen-500 transition-colors`}>
                                    {logo.node}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
