"use client";

import Link from "next/link";
import { Zap, Shield, Eye, Lock, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Header */}
            <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-zgreen-500/5 blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="bg-zgreen-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-zgreen-500" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-200 mb-4 font-medium">
                        Your privacy and data security are fundamental to our mission.
                    </p>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                        Last updated: December 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Introduction */}
                        <div className="bg-zinc-900/60 border border-white/20 rounded-xl p-8 mb-8 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <Eye className="h-6 w-6 text-zgreen-500 mr-3" />
                                Introduction
                            </h2>
                            <p className="text-white leading-relaxed font-medium">
                                At ZEPLYNK, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, and safeguard your data when you use our services,
                                visit our website, or participate in our educational programs.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-black/60 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                                    <ul className="space-y-2 text-gray-200 font-medium">
                                        <li>• Name and contact details</li>
                                        <li>• Email address and phone number</li>
                                        <li>• Course enrollment information</li>
                                        <li>• Payment and billing information</li>
                                        <li>• Academic progress and achievements</li>
                                    </ul>
                                </div>

                                <div className="bg-black/60 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white mb-4">Technical Information</h3>
                                    <ul className="space-y-2 text-gray-200 font-medium">
                                        <li>• Website usage and analytics</li>
                                        <li>• Device and browser information</li>
                                        <li>• IP address and location data</li>
                                        <li>• Cookies and tracking technologies</li>
                                        <li>• Learning platform interactions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
                            <div className="bg-gradient-to-br from-zgreen-900/30 to-zyellow-900/30 border border-zgreen-500/50 rounded-xl p-8 backdrop-blur-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-white mb-3">Educational Services</h4>
                                        <ul className="space-y-2 text-gray-200 text-sm font-medium">
                                            <li>• Providing course content and instruction</li>
                                            <li>• Tracking academic progress</li>
                                            <li>• Issuing certificates and credentials</li>
                                            <li>• Personalized learning recommendations</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-3">Business Operations</h4>
                                        <ul className="space-y-2 text-gray-200 text-sm font-medium">
                                            <li>• Processing payments and transactions</li>
                                            <li>• Customer support and communication</li>
                                            <li>• Service improvement and development</li>
                                            <li>• Marketing and promotional activities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Data Security */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Lock className="h-6 w-6 text-zgreen-500 mr-3" />
                                Data Security & Protection
                            </h2>
                            <div className="bg-zinc-900/60 border border-white/20 text-white rounded-xl p-8 backdrop-blur-md">
                                <p className="text-gray-200 mb-6 leading-relaxed font-medium">
                                    We implement industry-standard security measures to protect your personal information:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-zyellow-400 font-bold mb-3">Technical Safeguards</h4>
                                        <ul className="space-y-2 text-white text-sm font-medium">
                                            <li>• SSL encryption for data transmission</li>
                                            <li>• Secure cloud storage solutions</li>
                                            <li>• Regular security audits and updates</li>
                                            <li>• Access controls and authentication</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-zyellow-400 font-bold mb-3">Operational Safeguards</h4>
                                        <ul className="space-y-2 text-white text-sm font-medium">
                                            <li>• Staff training on data protection</li>
                                            <li>• Limited access on need-to-know basis</li>
                                            <li>• Regular backup and recovery procedures</li>
                                            <li>• Incident response protocols</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Your Rights & Choices</h2>
                            <div className="space-y-4">
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Access & Correction</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You have the right to access, update, or correct your personal information at any time.
                                    </p>
                                </div>
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Data Portability</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You can request a copy of your data in a portable format for transfer to other services.
                                    </p>
                                </div>
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Deletion Rights</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You may request deletion of your personal data, subject to legal and operational requirements.
                                    </p>
                                </div>
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Marketing Preferences</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You can opt out of marketing communications while still receiving essential service updates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact for Privacy */}
                        <div className="bg-zinc-900/60 border border-zgreen-500/50 rounded-xl p-8 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white mb-4">Privacy Questions?</h2>
                            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
                                If you have any questions about this Privacy Policy or how we handle your data,
                                please don't hesitate to contact us. We're committed to transparency and addressing
                                your privacy concerns promptly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:zeplynk001@gmail.com?subject=Privacy%20Policy%20Inquiry"
                                    className="inline-flex items-center bg-zgreen-600 text-white px-6 py-3 rounded-lg hover:bg-zgreen-500 transition-colors duration-200 font-medium"
                                >
                                    <Mail className="h-4 w-4 mr-2" />
                                    Email Privacy Team
                                </a>
                                <a
                                    href="https://wa.me/2348067263891?text=Hello%20ZEPLYNK!%20I%20have%20questions%20about%20your%20Privacy%20Policy."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center border border-zgreen-500 text-zgreen-500 px-6 py-3 rounded-lg hover:bg-zgreen-500/10 transition-colors duration-200 font-medium"
                                >
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
