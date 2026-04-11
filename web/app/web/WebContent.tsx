"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
    Code,
    Globe,
    Server,
    Database,
    CheckCircle,
    Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCards from "@/components/sections/ServiceCards";

const Orb = dynamic(() => import("@/components/ui/Orb"), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black z-[1]" />
});

export default function WebContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly relative overflow-hidden">

            {/* Ambient Background Orb */}
            <div className="fixed inset-0 pointer-events-none z-[1]">
                <Orb
                    hue={140} // More green-tinted for Web Engineering
                    hoverIntensity={0.8}
                    rotateOnHover={true}
                    forceHoverState={false}
                    backgroundColor="#000000"
                />
            </div>

            <div className="relative z-[2] bg-transparent">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-zgreen-900/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-8 backdrop-blur-sm">
                            <Code className="h-4 w-4 text-zgreen-400 mr-2" />
                            <span className="text-sm font-bold text-white tracking-wide uppercase">Digital Engineering</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                            High-Performance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-600">Web & Mobile Applications</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            We build scalable, secure, and user-centric digital products using the latest technologies.
                            From MVPs to enterprise-grade platforms.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <Button className="h-14 px-8 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-full text-lg font-semibold">
                                    Start a Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Engineering Section - Updated with ServiceCards */}
                <ServiceCards
                    title="Web Engineering Services"
                    subtitle="Digital Infrastructure"
                    description="Scalable, high-performance web systems engineered for growth and reliability."
                    services={[
                        {
                            title: "Web Foundations",
                            target: "For businesses building or modernizing digital presence",
                            features: [
                                "Website or web app development",
                                "CMS implementation",
                                "Responsive UI/UX implementation",
                                "Basic performance optimization",
                                "Cloud hosting setup",
                                "CI/CD pipeline (standard)",
                                "Technical SEO implementation"
                            ],
                            impact: "Establishes scalable digital infrastructure with strong performance baseline.",
                            icon: "Globe",
                            color: "bg-zgreen-500/10 text-zgreen-500",
                        },
                        {
                            title: "Scalable Systems",
                            target: "For growing platforms requiring flexibility & performance",
                            features: [
                                "Custom web applications",
                                "API architecture & integrations",
                                "Microservices setup",
                                "Advanced caching strategies",
                                "Security hardening",
                                "DevOps automation",
                                "Database optimization",
                                "Role-based access systems"
                            ],
                            impact: "Supports growth, traffic spikes, and operational complexity.",
                            icon: "Layers",
                            color: "bg-blue-500/10 text-blue-500",
                        },
                        {
                            title: "Enterprise Engineering",
                            target: "For high-traffic, mission-critical platforms",
                            features: [
                                "Distributed systems architecture",
                                "Kubernetes orchestration",
                                "Multi-region cloud deployment",
                                "High-availability infrastructure",
                                "DevSecOps integration",
                                "Advanced monitoring & observability",
                                "Disaster recovery planning",
                                "Infrastructure cost optimization"
                            ],
                            impact: "Ensures performance, resilience, and enterprise-grade reliability.",
                            icon: "Server",
                            color: "bg-orange-500/10 text-orange-500",
                        }
                    ]}
                />

                {/* Product Development Section */}
                <section id="product" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <span className="text-zgreen-500 font-bold tracking-wider uppercase text-sm">From Idea to Scale</span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">Product Development</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">Guidance through every stage of the product lifecycle.</p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "MVP Development", desc: "Launch fast with core features to validate your market." },
                            { title: "SaaS Platforms", desc: "Multi-tenant, subscription-based cloud software." },
                            { title: "UI/UX Design", desc: "World-class interfaces that users love." }
                        ].map((card, i) => (
                            <div key={i} className="bg-zinc-800/20 border border-white/20 p-8 rounded-2xl hover:border-zgreen-500/30 transition-all backdrop-blur-md">
                                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                                <p className="text-gray-300">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Systems Architecture Section */}
                <section id="systems" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Backend & Cloud Systems</h2>
                            <p className="text-gray-300 mb-6 text-lg">
                                The backbone of any successful digital product. We engineer resilient backends
                                capable of handling millions of requests.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Server className="h-6 w-6 text-zgreen-500 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Cloud Infrastructure</h4>
                                        <p className="text-gray-300">AWS, Google Cloud, and Azure serverless deployments.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Database className="h-6 w-6 text-zgreen-500 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Database Design</h4>
                                        <p className="text-gray-300">Optimized schema design for SQL and NoSQL databases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur-md rounded-xl border border-white/10 p-6 font-mono text-xs text-green-400 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                            <p>POST /api/v1/orders HTTP/1.1</p>
                            <p>Host: api.zeplynk.com</p>
                            <p>Content-Type: application/json</p>
                            <br />
                            <p>{"{"}</p>
                            <p className="pl-4">"status": "scaling_auto",</p>
                            <p className="pl-4">"replicas": 12,</p>
                            <p className="pl-4">"latency": "12ms"</p>
                            <p>{"}"}</p>
                            <br />
                            <p className="text-gray-500"># System healthy. Load balanced across 3 regions.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 text-center">
                    <div className="max-w-4xl mx-auto bg-zgreen-900/10 border border-zgreen-500/20 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zgreen-500/5 rounded-full blur-[80px] group-hover:bg-zgreen-500/10 transition-all duration-500" />
                        <h2 className="text-3xl text-white font-bold mb-6">Let's Build Something Great</h2>
                        <Link href="/contact">
                            <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-full h-12 px-8">Talk to an Engineer</Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
