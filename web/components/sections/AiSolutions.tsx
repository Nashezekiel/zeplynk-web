"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, MessageSquare, BarChart3, CheckSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AiSolutions() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Artificial Intelligence
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        AI Systems Designed for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Business Impact
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        We don’t just implement AI randomly. We align advanced machine learning and automation with measurable business outcomes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Pillar 1 */}
                    <Link href="/solutions#ai" className="block">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 h-full rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="h-12 w-12 rounded-xl bg-purple-900/20 flex items-center justify-center text-purple-400 mb-6">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Strategy & Consultation</h3>
                            <ul className="space-y-2 mb-6">
                                {['Process Audit', 'Automation Roadmap', 'ROI Mapping'].map(item => (
                                    <li key={item} className="flex items-center text-sm text-gray-200 font-medium">
                                        <CheckSquare className="h-4 w-4 text-purple-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-xs font-mono text-purple-300 bg-purple-500/5 p-3 rounded border border-purple-500/10">
                                "Align AI with goals."
                            </div>
                        </motion.div>
                    </Link>

                    {/* Pillar 2 */}
                    <Link href="/solutions#ai" className="block">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 h-full rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="h-12 w-12 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Intelligent Automation</h3>
                            <ul className="space-y-2 mb-6">
                                {['Workflow Bots', 'Lead Scoring', 'CRM Integration'].map(item => (
                                    <li key={item} className="flex items-center text-sm text-gray-200 font-medium">
                                        <CheckSquare className="h-4 w-4 text-blue-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-xs font-mono text-blue-300 bg-blue-500/5 p-3 rounded border border-blue-500/10">
                                "Reduce costs. Speed up."
                            </div>
                        </motion.div>
                    </Link>

                    {/* Pillar 3 */}
                    <Link href="/solutions#ai" className="block">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 h-full rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-zgreen-500/30 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="h-12 w-12 rounded-xl bg-zgreen-900/20 flex items-center justify-center text-zgreen-400 mb-6">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Conversational AI</h3>
                            <ul className="space-y-2 mb-6">
                                {['Support Chatbots', 'HR Screening', 'WhatsApp Automation'].map(item => (
                                    <li key={item} className="flex items-center text-sm text-gray-200 font-medium">
                                        <CheckSquare className="h-4 w-4 text-zgreen-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-xs font-mono text-zgreen-300 bg-zgreen-500/5 p-3 rounded border border-zgreen-500/10">
                                "24/7 Engagement."
                            </div>
                        </motion.div>
                    </Link>

                    {/* Pillar 4 */}
                    <Link href="/solutions#ai" className="block">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 h-full rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="h-12 w-12 rounded-xl bg-yellow-900/20 flex items-center justify-center text-yellow-400 mb-6">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Data & Insights</h3>
                            <ul className="space-y-2 mb-6">
                                {['Predictive Analytics', 'BI Dashboards', 'Trend Analysis'].map(item => (
                                    <li key={item} className="flex items-center text-sm text-gray-200 font-medium">
                                        <CheckSquare className="h-4 w-4 text-yellow-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-xs font-mono text-yellow-300 bg-yellow-500/5 p-3 rounded border border-yellow-500/10">
                                "No more guesswork."
                            </div>
                        </motion.div>
                    </Link>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link href="/solutions#ai">
                        <Button variant="outline" size="lg" className="h-14 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-2xl text-lg font-bold group">
                            See All AI Solutions <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>

    );
}
