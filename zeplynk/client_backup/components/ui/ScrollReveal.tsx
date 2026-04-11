import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    staggerChildren?: number;
    animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
    threshold?: number;
}

export default function ScrollReveal({
    children,
    width = "100%",
    className = "",
    delay = 0,
    duration = 0.5,
    yOffset = 50,
    staggerChildren = 0,
    animation = "fade-up",
    threshold = 0.2
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: `0px 0px -${threshold * 100}px 0px` });

    const getVariants = () => {
        switch (animation) {
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
            case "scale-up":
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                };
            case "slide-left":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "fade-up":
            default:
                return {
                    hidden: { opacity: 0, y: yOffset },
                    visible: { opacity: 1, y: 0 }
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}
