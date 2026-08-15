"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "zeplynk-cookie-consent";

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = window.localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleChoice = (choice: "accepted" | "declined") => {
        window.localStorage.setItem(CONSENT_KEY, choice);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
        >
            <div className="max-w-3xl mx-auto bg-zinc-900/95 border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="bg-zgreen-500/10 rounded-xl p-3 shrink-0">
                    <Cookie className="h-6 w-6 text-zgreen-500" />
                </div>
                <p className="text-sm text-gray-200 font-medium leading-relaxed flex-1">
                    We use cookies to improve your experience and understand how our site is used. By continuing, you
                    agree to our{" "}
                    <Link href="/privacy" className="text-zgreen-400 hover:text-zgreen-300 underline underline-offset-2">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex gap-3 shrink-0 w-full sm:w-auto">
                    <button
                        onClick={() => handleChoice("declined")}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-sm font-bold text-gray-300 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
                    >
                        Decline
                    </button>
                    <Button
                        onClick={() => handleChoice("accepted")}
                        className="flex-1 sm:flex-none bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl text-sm font-bold px-5"
                    >
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
}
