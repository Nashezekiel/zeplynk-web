"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at Nexus AI",
        content: "ZEPLYNK transformed our legacy architecture into a high-performance, AI-driven engine. Their deep expertise in scalable systems is unmatched in the industry.",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Marcus Thorne",
        role: "Founder of FinStream",
        content: "The academy didn't just teach our engineers; it shifted their entire mindset towards premium product engineering. Best ROI we've seen on team development.",
        image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Innovation, GlobalRetail",
        content: "Efficient, professional, and forward-thinking. Zeplynk delivered our custom enterprise ERP ahead of schedule with zero technical debt.",
        image: "https://i.pravatar.cc/150?u=elena"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-zgreen-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                            TRUSTED BY <span className="text-zgreen-500">INDUSTRY LEADERS</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
                            Don't just take our word for it. Here’s how we’ve helped organizations reach the next level of greatness.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative group h-full flex flex-col"
                            >
                                <Quote className="absolute top-6 right-8 h-12 w-12 text-zgreen-500/10 group-hover:text-zgreen-500/20 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-zgreen-500 text-zgreen-500" />
                                    ))}
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow font-medium italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zgreen-500/30">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-zgreen-500 text-xs font-black uppercase tracking-widest">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
