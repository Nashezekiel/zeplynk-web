"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import dynamic from "next/dynamic";

const ZepBot = dynamic(() => import("@/components/ui/ZepBot"), { ssr: false });
const PerformanceMonitor = dynamic(() => import("@/components/ui/PerformanceMonitor").then(mod => mod.PerformanceMonitor), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/layout/CookieConsent").then(mod => mod.CookieConsent), { ssr: false });

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
            <ZepBot />
            <PerformanceMonitor />
            <CookieConsent />
        </TooltipProvider>
    );
}
