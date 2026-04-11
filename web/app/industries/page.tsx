"use client";

import { motion } from "framer-motion";
import {
    Users,
    Briefcase,
    ShoppingBag,
    GraduationCap,
    Building2,
    CheckCircle2,
    ArrowRight,
    Search,
    BarChart3,
    ShieldCheck,
    Cpu,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const industries = [
    {
        id: "hr-recruitment",
        name: "Recruitment & HR",
        icon: Users,
        color: "blue",
        description: "Modernizing talent acquisition and human resource management with automated workflows and data-driven insights.",
        features: [
            "Automated Candidate Screening",
            "Employee Self-Service Portals",
            "Performance Tracking Dashboards",
            "Seamless Payroll Integration"
        ],
        accent: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: "startups-saas",
        name: "Startups & SaaS",
        icon: Briefcase,
        color: "purple",
        description: "Scaling high-growth ventures from MVP to enterprise-ready platforms with lean, performance-optimized infrastructure.",
        features: [
            "Rapid Prototyping & MVP",
            "Scalable Cloud Architecture",
            "API First Development",
            "Growth Analytics & BI"
        ],
        accent: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: "ecommerce",
        name: "E-commerce",
        icon: ShoppingBag,
        color: "pink",
        description: "Driving conversions with high-performance storefronts, automated inventory management, and personalized buyer journeys.",
        features: [
            "Headless Commerce Solutions",
            "Custom Inventory Bots",
            "Personalized AI Recommendations",
            "Global Payment Gateways"
        ],
        accent: "from-pink-500/20 to-rose-500/20"
    },
    {
        id: "education",
        name: "Education & EdTech",
        icon: GraduationCap,
        color: "yellow",
        description: "Empowering learners and institutions with interactive platforms, automated grading, and community-driven portals.",
        features: [
            "Learning Management Systems",
            "Interactive Quiz Engines",
            "Student Progress Portals",
            "Virtual Workshop Spaces"
        ],
        accent: "from-yellow-500/20 to-orange-500/20"
    },
    {
        id: "sme-corporate",
        name: "SMEs & Corporate",
        icon: Building2,
        color: "zgreen",
        description: "Digital transformation for established businesses looking to modernize legacy systems and automate core operations.",
        features: [
            "Legacy System Migration",
            "Custom CRM & ERP Solutions",
            "Enterprise Security Audits",
            "Automated Compliance Tracking"
        ],
        accent: "from-zgreen-500/20 to-emerald-500/20"
    }
];

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-zgreen-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Engineering Solutions for the<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 via-emerald-500 to-blue-600">
                                Future of Every Sector.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            We don't just build software; we engineer industry-specific infrastructure
                            that solves unique challenges and creates measurable competitive advantages.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl px-10 py-7 text-lg font-bold shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all">
                                    Start Industry Consultation
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industry Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {industries.map((item, index) => (
                            <motion.div
                                key={item.id}
                                id={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all overflow-hidden scroll-mt-24`}
                            >
                                {/* Gradient Accent */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full bg-black/40">
                                        Sector 0{index + 1}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-zgreen-400 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
                                    {item.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {item.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-4 w-4 text-zgreen-500 flex-shrink-0" />
                                            <span className="text-sm text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold group/link">
                                    <span className="border-b-2 border-zgreen-500/50 group-hover/link:border-zgreen-500 transition-colors">Learn More</span>
                                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}

                        {/* Custom Solution Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="p-8 rounded-3xl bg-zgreen-600 flex flex-col justify-center items-center text-center group"
                        >
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Have a unique industry challenge?
                            </h3>
                            <p className="text-zgreen-100 mb-8 max-w-sm">
                                We specialize in custom engineering for sectors that defy conventional categories. Reach out for a tailored strategy.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 py-6 font-bold">
                                    Book a Strategy Call
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Zeplynk section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Built for Impact</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Our cross-industry expertise allows us to cross-pollinate ideas and technologies, bringing innovations from one sector to solve problems in another.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: BarChart3, title: "Data Oriented", desc: "Every solution is backed by measurable KPIs and business intelligence." },
                            { icon: ShieldCheck, title: "Enterprise Security", desc: "Security is baked into our core engineering process, not added later." },
                            { icon: Zap, title: "Rapid Execution", desc: "Our proprietary frameworks allow us to move from concept to deployment 3x faster." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-zgreen-500/30 transition-all group">
                                <item.icon className="h-10 w-10 text-zgreen-500 mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-zinc-900 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-zgreen-500/10 rounded-full blur-[100px] pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Let's Engineer Your Competitive Advantage.
                        </h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                            Start with a strategy call to explore how our industry-specific
                            solutions can transform your business operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl px-10 py-7 text-lg font-bold">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
