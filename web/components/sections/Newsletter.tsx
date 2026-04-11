"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zgreen-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-zinc-900/60 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 overflow-hidden group shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zgreen-500/20 to-transparent" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-500 text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Sparkles className="h-3 w-3" />
                                Engineering Weekly
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
                            >
                                Deciphering the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">Modern Stack.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-200 text-lg leading-relaxed font-medium"
                            >
                                Get technical deep-dives on scalable systems and AI automation delivered to your inbox. No fluff, just the blueprint.
                            </motion.p>
                        </div>

                        <div className="w-full max-w-md">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center text-center p-8 bg-zgreen-500/5 border border-zgreen-500/20 rounded-3xl"
                                    >
                                        <div className="w-16 h-16 bg-zgreen-500/20 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="h-8 w-8 text-zgreen-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                        <p className="text-gray-300 text-sm font-medium">Check your inbox for the the first deep-dive.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        onSubmit={handleSubmit}
                                        className="relative"
                                    >
                                        <div className="relative group/input">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-zgreen-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within/input:opacity-100 transition duration-500" />
                                            <div className="relative flex flex-col sm:flex-row gap-3">
                                                <div className="relative flex-1">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within/input:text-zgreen-500 transition-colors" />
                                                    <input
                                                        type="email"
                                                        required
                                                        placeholder="email@company.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        disabled={status === "loading"}
                                                        className="w-full bg-black/40 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-zgreen-500/50 transition-all text-lg"
                                                    />
                                                </div>
                                                <Button
                                                    type="submit"
                                                    disabled={status === "loading"}
                                                    className="h-auto py-4 px-8 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-zgreen-500/10 active:scale-95 disabled:opacity-50"
                                                >
                                                    {status === "loading" ? "Joining..." : "Join Now"}
                                                    <Send className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest text-center lg:text-left font-bold">
                                            Join 2,500+ Engineers & Tech Leaders
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
