"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/60 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-200 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-zgreen-500/50 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-200 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-zgreen-500 transition-colors" />
                            <input
                                type="email"
                                placeholder="john@company.com"
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-zgreen-500/50 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-200 ml-1">Subject</label>
                    <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                        <select
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-zgreen-500/50 focus:ring-4 focus:ring-zgreen-500/10 transition-all appearance-none font-friendly"
                        >
                            <option className="bg-zinc-900">Project Inquiry</option>
                            <option className="bg-zinc-900">Academy Enrollment</option>
                            <option className="bg-zinc-900">AI & Automation</option>
                            <option className="bg-zinc-900">Partnership</option>
                            <option className="bg-zinc-900">Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-200 ml-1">Your Message</label>
                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-gray-400 group-focus-within:text-zgreen-500 transition-colors" />
                        <textarea
                            rows={5}
                            placeholder="Tell us about your goals..."
                            className="w-full bg-black/60 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-zgreen-500/50 focus:ring-4 focus:ring-zgreen-500/10 transition-all font-friendly resize-none"
                        ></textarea>
                    </div>
                </div>

                <Button className="w-full h-16 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-lg font-bold shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95">
                    Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
            </form>
        </motion.div>
    );
}
