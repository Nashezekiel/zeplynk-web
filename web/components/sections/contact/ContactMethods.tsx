"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactMethods() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/60 border border-white/20 rounded-[2rem] p-8 hover:border-zgreen-500/50 transition-all group backdrop-blur-md"
                        >
                            <div className="bg-zgreen-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mail className="h-8 w-8 text-zgreen-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                            <p className="text-gray-200 mb-6 text-sm font-medium">
                                Send us a detailed message and we'll get back to you within 24 hours.
                            </p>
                            <a href="mailto:zeplynk001@gmail.com" className="text-zgreen-500 font-bold hover:text-zgreen-400 text-lg">
                                zeplynk001@gmail.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-zinc-900/60 border border-white/20 rounded-[2rem] p-8 hover:border-blue-500/50 transition-all group backdrop-blur-md"
                        >
                            <div className="bg-blue-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Phone className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                            <p className="text-gray-200 mb-6 text-sm font-medium">
                                Speak directly with our team for immediate assistance and consultation.
                            </p>
                            <div className="space-y-2">
                                <a href="tel:+2348067263891" className="block text-blue-500 font-bold hover:text-blue-400 text-lg">08067263891</a>
                                <a href="tel:+2347063695334" className="block text-blue-500 font-bold hover:text-blue-400 text-lg">07063695334</a>
                            </div>
                        </motion.div>

                        {/* WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900/60 border border-white/20 rounded-[2rem] p-8 hover:border-green-500/50 transition-all group backdrop-blur-md md:col-span-2"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div>
                                    <div className="bg-green-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <MessageCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">WhatsApp Support</h3>
                                    <p className="text-gray-200 text-sm max-w-md font-medium">
                                        Chat with us instantly for quick questions and real-time support. Available 24/7.
                                    </p>
                                </div>
                                <a
                                    href="https://wa.me/2348067263891"
                                    target="_blank"
                                    className="inline-flex items-center justify-center h-16 px-8 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)]"
                                >
                                    Chat with Experts <MessageCircle className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Business Hours Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/60 border border-white/20 rounded-[2.5rem] p-8 backdrop-blur-xl"
                    >
                        <div className="flex items-center mb-8">
                            <Clock className="h-8 w-8 text-zgreen-500 mr-4" />
                            <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
                                { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                                { day: "Sunday", time: "24/7 WhatsApp Only", focus: true },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                                    <span className="text-white font-bold">{row.day}</span>
                                    <span className={`font-bold ${row.focus ? "text-zgreen-400" : "text-white text-lg"}`}>{row.time}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="flex items-center text-sm text-zgreen-500 font-bold mb-4">
                                <Send className="h-4 w-4 mr-2" />
                                Average Response Time
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-200">
                                    <CheckCircle className="h-4 w-4 mr-3 text-zgreen-500" />
                                    Email: Within 24 hours
                                </div>
                                <div className="flex items-center text-sm text-gray-200">
                                    <CheckCircle className="h-4 w-4 mr-3 text-zgreen-500" />
                                    WhatsApp: Within 2 hours
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
