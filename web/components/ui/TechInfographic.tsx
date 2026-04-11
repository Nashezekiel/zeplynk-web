"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TechInfographic() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Data nodes for the animation
    const nodes = [
        { x: "20%", y: "30%", size: 40, delay: 0 },
        { x: "80%", y: "20%", size: 30, delay: 0.2 },
        { x: "50%", y: "50%", size: 60, delay: 0.4 },
        { x: "30%", y: "70%", size: 35, delay: 0.6 },
        { x: "70%", y: "80%", size: 45, delay: 0.8 },
    ];

    return (
        <div suppressHydrationWarning className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-zgreen-500/20 rounded-full blur-[100px] animate-pulse" />

            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 overflow-visible">
                {/* Connecting Lines */}
                <motion.path
                    d="M 80 120 L 200 200 L 320 80 M 200 200 L 120 280 L 280 320 L 200 200"
                    fill="transparent"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                        <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Animated Data Pulses along paths */}
                {[1, 2, 3].map((i) => (
                    <motion.circle
                        key={i}
                        r="3"
                        fill="#22c55e"
                        filter="url(#glow)"
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{
                            offsetDistance: "100%",
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "easeInOut"
                        }}
                        style={{
                            offsetPath: "path('M 80 120 L 200 200 L 320 80 M 200 200 L 120 280 L 280 320 L 200 200')",
                        }}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: node.delay, duration: 0.5 }}>
                        {/* Outer Ring */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.size / 2 + 5}
                            fill="transparent"
                            stroke="#22c55e"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Main Circle */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={node.size / 2}
                            fill="rgba(34, 197, 94, 0.1)"
                            stroke="#22c55e"
                            strokeWidth="2"
                            className="backdrop-blur-sm"
                        />
                        {/* Inner Core */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.size / 6}
                            fill="#22c55e"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        />
                    </motion.g>
                ))}

                {/* Floating Tech Icons / Geometric Shapes */}
                <motion.rect
                    x="300" y="150" width="20" height="20"
                    fill="none" stroke="#22c55e" strokeWidth="1"
                    animate={{
                        y: [150, 130, 150],
                        rotate: 45,
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.polygon
                    points="50,50 60,70 40,70"
                    fill="none" stroke="#10b981" strokeWidth="1"
                    animate={{
                        y: [0, -20, 0],
                        rotate: 180,
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
            </svg>

            {/* Floating Statistic Badges for Visual Interest */}
            <motion.div
                className="absolute top-10 right-0 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Efficiency</div>
                <div className="text-xl font-bold text-zgreen-500">+85%</div>
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-0 bg-zinc-900/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Scale</div>
                <div className="text-xl font-bold text-blue-500">Global</div>
            </motion.div>
        </div>
    );
}
