"use client";

import { FileText, ShieldCheck, CreditCard, Scale, Mail, MessageCircle } from "lucide-react";

export default function Terms() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Header */}
            <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-zgreen-500/5 blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="bg-zgreen-500/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-zgreen-500" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-lg text-gray-200 mb-4 font-medium">
                        The terms and conditions that govern your use of Zeplynk's website, services, and Academy programs.
                    </p>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                        Last updated: August 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Acceptance */}
                        <div className="bg-zinc-900/60 border border-white/20 rounded-xl p-8 mb-8 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                            <p className="text-white leading-relaxed font-medium">
                                By accessing this website or engaging Zeplynk for web engineering, AI automation, or
                                Zeplynk Academy programs, you agree to be bound by these Terms of Service. If you do
                                not agree with any part of these terms, please do not use our website or services.
                            </p>
                        </div>

                        {/* Our Services */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
                            <div className="bg-black/60 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                                <p className="text-gray-200 leading-relaxed font-medium mb-4">
                                    Zeplynk provides web engineering, AI automation, and software consulting services,
                                    and operates Zeplynk Academy, a developer training program. The specific scope,
                                    deliverables, timeline, and cost of any project or course are agreed separately
                                    with each client or student before work begins, typically via a proposal, invoice,
                                    or enrollment confirmation.
                                </p>
                                <p className="text-gray-200 leading-relaxed font-medium">
                                    We reserve the right to modify, suspend, or discontinue any part of our services
                                    at any time, and to update these terms as our services evolve.
                                </p>
                            </div>
                        </div>

                        {/* Payments */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <CreditCard className="h-6 w-6 text-zgreen-500 mr-3" />
                                Payments
                            </h2>
                            <div className="bg-gradient-to-br from-zgreen-900/30 to-zyellow-900/30 border border-zgreen-500/50 rounded-xl p-8 backdrop-blur-sm">
                                <ul className="space-y-3 text-gray-200 font-medium">
                                    <li>• Zeplynk accepts payment by direct bank transfer to a Nigerian bank account. Account details are shared as part of your invoice or, for Academy enrollment, on the registration page.</li>
                                    <li>• Project fees and Academy course fees are due according to the schedule agreed at the time of proposal or enrollment.</li>
                                    <li>• Please retain your payment confirmation or receipt, as it may be requested to verify a transaction.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Satisfaction Guarantee */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <ShieldCheck className="h-6 w-6 text-zgreen-500 mr-3" />
                                Our Guarantee
                            </h2>
                            <div className="bg-zinc-900/60 border border-white/20 text-white rounded-xl p-8 backdrop-blur-md">
                                <p className="text-gray-200 leading-relaxed font-medium">
                                    We stand behind the quality of our work. For every engagement, we work with you
                                    through revisions until the agreed deliverables meet the specification we signed
                                    off on together — our goal is your genuine satisfaction with what we build or
                                    teach, not just a completed contract.
                                </p>
                            </div>
                        </div>

                        {/* User Responsibilities */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Client & User Responsibilities</h2>
                            <div className="space-y-4">
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Accurate Information</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You agree to provide accurate, current information when contacting us, registering
                                        for the Academy, or engaging our services.
                                    </p>
                                </div>
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Lawful Use</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        You agree not to use our website or services for any unlawful purpose or in a
                                        way that infringes the rights of Zeplynk or any third party.
                                    </p>
                                </div>
                                <div className="bg-black/60 border border-white/20 rounded-lg p-6">
                                    <h4 className="font-bold text-white mb-2">Intellectual Property</h4>
                                    <p className="text-gray-200 text-sm font-medium">
                                        Unless otherwise agreed in writing, deliverables transfer to the client upon
                                        full payment. Zeplynk retains ownership of pre-existing tools, frameworks, and
                                        course materials.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Liability */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Scale className="h-6 w-6 text-zgreen-500 mr-3" />
                                Limitation of Liability & Governing Law
                            </h2>
                            <div className="bg-zinc-900/60 border border-white/20 text-white rounded-xl p-8 backdrop-blur-md">
                                <p className="text-gray-200 leading-relaxed font-medium">
                                    Zeplynk's services are provided on a professional-effort basis. To the extent
                                    permitted by law, Zeplynk is not liable for indirect or consequential losses
                                    arising from use of our website, services, or Academy programs. These terms are
                                    governed by the laws of the Federal Republic of Nigeria.
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-zinc-900/60 border border-zgreen-500/50 rounded-xl p-8 backdrop-blur-md">
                            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
                                If you have questions about these Terms of Service, please reach out — we're happy to
                                clarify anything before you engage our services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:zeplynk001@gmail.com?subject=Terms%20of%20Service%20Inquiry"
                                    className="inline-flex items-center bg-zgreen-600 text-white px-6 py-3 rounded-lg hover:bg-zgreen-500 transition-colors duration-200 font-medium"
                                >
                                    <Mail className="h-4 w-4 mr-2" />
                                    Email Us
                                </a>
                                <a
                                    href="https://wa.me/2348067263891?text=Hello%20Zeplynk!%20I%20have%20questions%20about%20your%20Terms%20of%20Service."
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
