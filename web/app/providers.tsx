"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";

import { LazyMotion, domMax } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <LazyMotion features={domMax}>
                <TooltipProvider>
                    {children}
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </LazyMotion>
        </QueryClientProvider>
    );
}
