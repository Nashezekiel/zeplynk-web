"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Twitter, Linkedin, Instagram, ArrowRight, Sparkles } from "lucide-react";

export default function HeaderBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="top-bar"
            suppressHydrationWarning
            className={`fixed top-0 left-0 right-0 z-[60] h-10 md:h-14 flex items-center overflow-hidden transition-transform duration-500 ease-in-out ${isScrolled ? "-translate-y-full" : "translate-y-0"
                }`}
            style={{
                background: "linear-gradient(90deg, #15803d 0%, #22c55e 45%, #16a34a 100%)",
            }}
        >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />

            {/* Subtle noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='white'/%3E%3C/svg%3E\")" }}
            />

            <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10 flex items-center justify-between gap-6 relative z-10">

                {/* Left — Contact Info */}
                <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
                    <a
                        href="tel:+2348067263891"
                        className="flex items-center gap-1.5 md:gap-2.5 text-white/75 hover:text-white transition-all duration-200 text-xs md:text-[13px] font-semibold tracking-wide group"
                    >
                        <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Phone className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        </span>
                        <span>08067263891</span>
                    </a>

                    <div className="hidden lg:block w-px h-4 bg-white/20 flex-shrink-0" />

                    <a
                        href="mailto:zeplynk001@gmail.com"
                        className="hidden lg:flex items-center gap-2.5 text-white/75 hover:text-white transition-all duration-200 text-[13px] font-semibold tracking-wide group"
                    >
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Mail className="h-3 w-3" />
                        </span>
                        <span>zeplynk001@gmail.com</span>
                    </a>
                </div>

                {/* Center — Announcement pill */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                    <button
                        onClick={() => window.location.href = '/work'}
                        className="flex items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-yellow-300 animate-pulse" />
                        <p className="text-[13px] font-bold text-white tracking-wide leading-none text-center">
                            <span className="opacity-80 font-bold">✨ We've shipped new client projects — </span>
                            <span className="text-yellow-200 group-hover:text-white transition-colors underline decoration-yellow-200/30 underline-offset-2">See our work</span>
                        </p>
                    </button>
                </div>

                {/* Right — Socials */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    {[
                        { icon: Twitter, href: "https://twitter.com/zeplynk", label: "Twitter" },
                        { icon: Linkedin, href: "https://www.linkedin.com/company/zeplynk", label: "LinkedIn" },
                        { icon: Instagram, href: "https://www.instagram.com/zeplynk", label: "Instagram" },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                        >
                            <s.icon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

// EOF
