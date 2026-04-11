"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceItem {
    title: string;
    target: string;
    features: string[];
    impact: string;
    icon: string;
    color: string;
    delay?: number;
}

interface ServiceCardsProps {
    title: string;
    subtitle?: string;
    description: string;
    services: ServiceItem[];
    ctaText?: string;
    ctaLink?: string;
}


import {
    Globe,
    Layers,
    Server,
    Bot,
    Zap,
    Cpu
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    Globe,
    Layers,
    Server,
    Bot,
    Zap,
    Cpu
};

export default function ServiceCards({
    title,
    subtitle,
    description,
    services,
    ctaText = "Get Started",
    ctaLink = "/contact"
}: ServiceCardsProps) {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    {subtitle && (
                        <span className="block text-sm font-semibold tracking-wider uppercase text-zgreen-500 mb-2">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/60 border border-white/20 rounded-3xl p-8 hover:border-white/30 transition-colors flex flex-col h-full group hover:bg-zinc-900/80 backdrop-blur-md"
                        >
                            {/* Icon Header */}
                            <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {(() => {
                                    const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Globe;
                                    return <IconComponent className={`h-7 w-7 ${service.color.replace('bg-', 'text-').replace('/10', '')}`} />;
                                })()}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm font-bold text-white mb-6 italic border-b border-white/10 pb-4">
                                {service.target}
                            </p>

                            {/* Features List */}
                            <div className="flex-grow mb-8">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">What's Included</h4>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-200 group-hover:text-white transition-colors">
                                            <CheckCircle2 className={`h-4 w-4 mr-3 mt-0.5 flex-shrink-0 ${service.color.replace('bg-', 'text-').replace('/10', '')}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Business Impact - Sticky Bottom */}
                            <div className="mt-auto pt-6 border-t border-white/10 bg-black/40 -mx-8 -mb-8 p-8 rounded-b-3xl">
                                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Business Impact</h4>
                                <p className="text-sm text-gray-100 leading-relaxed font-medium">
                                    {service.impact}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link href={ctaLink}>
                        <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-bold transition-all hover:scale-105">
                            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
