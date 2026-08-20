"use client";

import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { FeedbackItem } from "@/lib/feedback-store";

export default function TestimonialsGrid({ testimonials }: { testimonials: FeedbackItem[] }) {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-zgreen-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-h2 font-black text-white mb-6 uppercase tracking-tighter">
                            TRUSTED BY <span className="text-zgreen-500">INDUSTRY LEADERS</span>
                        </h2>
                        <p className="text-gray-400 text-body font-medium max-w-2xl mx-auto">
                            Don't just take our word for it. Here's how we've helped organizations reach the next level of greatness.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative group h-full flex flex-col"
                            >
                                <Quote className="absolute top-6 right-8 h-12 w-12 text-zgreen-500/10 group-hover:text-zgreen-500/20 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${
                                                i < testimonial.rating ? "fill-zgreen-500 text-zgreen-500" : "text-gray-700"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-300 text-body leading-relaxed mb-8 flex-grow font-medium italic">
                                    "{testimonial.message}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zgreen-500/30 bg-zinc-800 flex items-center justify-center shrink-0">
                                        {testimonial.avatarUrl ? (
                                            <Image
                                                src={testimonial.avatarUrl}
                                                alt={testimonial.name}
                                                fill
                                                sizes="48px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <User className="h-5 w-5 text-gray-500" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        {testimonial.displayRole ? (
                                            <p className="text-zgreen-500 text-caption font-black uppercase tracking-widest">
                                                {testimonial.displayRole}
                                            </p>
                                        ) : (
                                            testimonial.service && (
                                                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-zgreen-500/10 border border-zgreen-500/30 text-zgreen-400 text-caption font-black uppercase tracking-widest">
                                                    {testimonial.service}
                                                </span>
                                            )
                                        )}
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
