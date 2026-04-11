"use client";

import { motion } from "framer-motion";
import { 
    Zap, Bot, Laptop, Cloud, Database, 
    Shield, BarChart3, ArrowRight, Code2 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";
import SolutionSection from "@/components/sections/solutions/SolutionSection";

const solutionCategories = [
    {
        id: "ai",
        title: "AI & Intelligent Systems",
        description: "Transform your business with cutting-edge artificial intelligence. From strategy to deployment, we build systems that learn, adapt, and scale your operations autonomously.",
        icon: Bot,
        image: "/images/solutions/ai.png",
        accentColor: "text-purple-400",
        bgColor: "bg-purple-500/10",
        items: [
            { name: "AI Strategy & Consulting", href: "/solutions#ai" },
            { name: "Intelligent Automation", href: "/solutions#ai" },
            { name: "Conversational AI", href: "/solutions#ai" },
            { name: "Generative AI Solutions", href: "/solutions#ai" },
            { name: "Computer Vision", href: "/solutions#ai" }
        ]
    },
    {
        id: "engineering",
        title: "Digital Product Engineering",
        description: "We engineer high-performance web and mobile platforms designed for global hyper-growth. Our products are secure, scalable, and built with modern architectural precision.",
        icon: Laptop,
        image: "/images/solutions/engineering.png",
        accentColor: "text-blue-400",
        bgColor: "bg-blue-500/10",
        reversed: true,
        items: [
            { name: "Web Application Development", href: "/solutions#engineering" },
            { name: "Mobile App Development", href: "/solutions#engineering" },
            { name: "SaaS Product Development", href: "/solutions#engineering" },
            { name: "API Development & Integration", href: "/solutions#engineering" },
            { name: "UI/UX Engineering", href: "/solutions#engineering" }
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Modernize your infrastructure with cloud-native solutions. We automate your delivery pipelines and manage complex cloud environments for maximum reliability.",
        icon: Cloud,
        image: "/images/solutions/cloud.png",
        accentColor: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
        items: [
            { name: "Cloud Infrastructure", href: "/solutions#cloud" },
            { name: "DevOps & CI/CD", href: "/solutions#cloud" },
            { name: "Cloud Migration", href: "/solutions#cloud" },
            { name: "Serverless Architecture", href: "/solutions#cloud" },
            { name: "Monitoring & Observability", href: "/solutions#cloud" }
        ]
    },
    {
        id: "enterprise",
        title: "Enterprise Systems",
        description: "Streamline your core business processes with integrated enterprise solutions. We bridge the gap between legacy systems and modern workflow automation.",
        icon: Database,
        image: "/images/solutions/enterprise.png",
        accentColor: "text-zgreen-400",
        bgColor: "bg-zgreen-500/10",
        reversed: true,
        items: [
            { name: "CRM & ERP Solutions", href: "/solutions#enterprise" },
            { name: "Enterprise Integration", href: "/solutions#enterprise" },
            { name: "Workflow Automation", href: "/solutions#enterprise" },
            { name: "Data Warehousing", href: "/solutions#enterprise" }
        ]
    },
    {
        id: "security",
        title: "Cybersecurity",
        description: "Protect your digital assets with advanced security engineering. We provide proactive defense strategies and compliance governance to ensure complete business continuity.",
        icon: Shield,
        image: "/images/solutions/security.png",
        accentColor: "text-red-400",
        bgColor: "bg-red-500/10",
        items: [
            { name: "Application Security", href: "/solutions#security" },
            { name: "Penetration Testing", href: "/solutions#security" },
            { name: "Identity & Access Management", href: "/solutions#security" },
            { name: "Compliance & Governance", href: "/solutions#security" }
        ]
    },
    {
        id: "data",
        title: "Data & Analytics",
        description: "Turn raw data into strategic intelligence. We build high-speed data pipelines and real-time dashboard systems that provide actionable business insights.",
        icon: BarChart3,
        image: "/images/solutions/data.png",
        accentColor: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
        reversed: true,
        items: [
            { name: "Business Intelligence", href: "/solutions#data" },
            { name: "Real-Time Dashboards", href: "/solutions#data" },
            { name: "Big Data Engineering", href: "/solutions#data" },
            { name: "Customer Analytics", href: "/solutions#data" }
        ]
    }
];

export default function SolutionsPage() {
    return (
        <main className="bg-black text-white relative">
            {/* Global Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0">
                    <Particles
                        particleCount={100}
                        particleSpread={15}
                        speed={0.03}
                        particleColors={["#ffffff"]}
                        moveParticlesOnHover={false}
                        alphaParticles={true}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative min-h-screen pt-32 flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]"
                        >
                            Engineering The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">Enterprise Future.</span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12"
                        >
                            From AI strategy to global cloud infrastructure, we build the high-performance digital systems that drive measurable business impact.
                        </motion.p>

                        {/* Quick Jump Sub-Nav */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {solutionCategories.map((cat) => (
                                <Link 
                                    key={cat.id} 
                                    href={`#${cat.id}`}
                                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm font-bold text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all backdrop-blur-sm"
                                >
                                    {cat.title.split(' & ')[0]}
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Solution Sections Stack */}
            <div className="divide-y divide-white/5">
                {solutionCategories.map((solution, idx) => (
                    <SolutionSection
                        key={solution.id}
                        {...solution}
                    />
                ))}
            </div>

            {/* Final Conversion Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-zgreen-500/5 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 max-w-4xl mx-auto space-y-10"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                                Ready To Architect <br /> Your Next Advantage?
                            </h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed">
                                Join the global enterprises scaling with Zeplynk's engineering precision. Our consultants are ready to audit your current stack and design your growth roadmap.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="h-16 px-10 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-2xl text-xl font-bold shadow-2xl shadow-zgreen-500/20 transition-all hover:scale-105 active:scale-95">
                                        Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button variant="outline" size="lg" className="h-16 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-2xl text-xl font-bold backdrop-blur-md transition-all">
                                        Join Engineering Network
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
