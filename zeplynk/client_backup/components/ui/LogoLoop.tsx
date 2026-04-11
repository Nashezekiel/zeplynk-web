import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface LogoLoopProps {
    logos: {
        node: React.ReactNode;
        title: string;
        href?: string;
        color?: string;
    }[];
    speed?: number; // Duration in seconds for a full loop
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    iconSize?: string; // e.g. "text-4xl", "text-6xl"
}

export default function LogoLoop({
    logos,
    speed = 30,
    direction = "left",
    pauseOnHover = true,
    iconSize = "text-5xl",
}: LogoLoopProps) {
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, [logos]);

    const xTranslation = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="w-full overflow-hidden relative group py-8">
            {/* Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-16 w-max items-center"
                ref={containerRef}
                animate={{
                    x: xTranslation,
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{
                    // @ts-ignore
                    "--play-state": pauseOnHover ? "paused" : "running"
                }}
            >
                {/* Render logos twice to create seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center min-w-[200px] transition-all duration-300 hover:scale-110"
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
