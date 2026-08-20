import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Services & Automation Nigeria | Machine Learning Solutions | Zeplynk",
    description:
        "Zeplynk delivers leading AI automation services in Nigeria. Custom machine learning, chatbot development, LLM integration, and workflow automation for businesses across Africa.",
    keywords: [
        "AI automation Nigeria",
        "artificial intelligence Africa",
        "AI consulting Nigeria",
        "machine learning services Nigeria",
        "chatbot development Nigeria",
        "workflow automation Africa",
        "LLM integration Nigeria",
        "Zeplynk AI",
        "AI solutions Lagos",
        "machine learning Nigeria",
        "AI development Africa",
        "intelligent automation Nigeria",
        "AI chatbot development",
        "predictive analytics Nigeria",
        "AI consulting services",
        "artificial intelligence solutions",
        "AI implementation Nigeria"
    ],
    alternates: {
        canonical: "https://zeplynk.com/ai",
    },
    openGraph: {
        title: "AI Services & Automation Nigeria | Machine Learning Solutions | Zeplynk",
        description:
            "Zeplynk delivers leading AI automation services in Nigeria. Custom machine learning, chatbot development, LLM integration, and workflow automation for businesses across Africa.",
        url: "https://zeplynk.com/ai",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Services & Automation Nigeria | Zeplynk",
        description:
            "Zeplynk AI automation in Nigeria — machine learning, chatbots, LLM integration & workflow automation for African businesses.",
    },
};

import Link from "next/link";
import {
    Bot,
    Laptop,
    MessageSquare,
    BarChart3,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCards from "@/components/sections/ServiceCards";
import { aiPages } from "@/lib/ai-pages-data";

export default function AiPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm">
                        <Bot className="h-4 w-4 text-purple-400 mr-2" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">AI & Automation Solutions</span>
                    </div>

                    <h1 className="text-h1 font-bold text-white mb-6 tracking-tight">
                        Intelligent Systems that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Think & Execute</span>
                    </h1>
                    <p className="text-body text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Harness the power of Artificial Intelligence to automate complex workflows,
                        predict market trends, and deliver personalized customer experiences at scale.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="h-14 px-8 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-lg font-semibold">
                            Consult an Expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* AI Strategy Section - Updated with ServiceCards */}
            <ServiceCards
                title="AI Services"
                subtitle="Intelligence Enablement"
                description="Positioning your organization for the AI era with strategic implementation and scalable infrastructure."
                services={[
                    {
                        title: "AI Foundations",
                        target: "For companies exploring AI adoption",
                        features: [
                            "AI readiness & use-case assessment",
                            "Business process automation (LLM-driven)",
                            "Chatbot & conversational AI implementation",
                            "AI API integrations (OpenAI, Anthropic)",
                            "Prompt engineering & structured outputs",
                            "Internal AI tooling prototypes",
                            "Data preparation & structuring"
                        ],
                        impact: "Introduces automation, reduces manual workload, and validates AI ROI.",
                        icon: "Bot",
                        color: "bg-purple-500/10 text-purple-500",
                    },
                    {
                        title: "AI Acceleration",
                        target: "For companies scaling AI into operations",
                        features: [
                            "Custom AI workflows integrated into core systems",
                            "Intelligent document processing",
                            "AI-powered analytics dashboards",
                            "Recommendation engines",
                            "CRM/ERP AI augmentation",
                            "Fine-tuned model deployment",
                            "Vector databases & semantic search",
                            "RAG system implementation"
                        ],
                        impact: "Improves decision-making, enhances customer experience, creates operational leverage.",
                        icon: "Zap",
                        color: "bg-indigo-500/10 text-indigo-500",
                    },
                    {
                        title: "AI Transformation",
                        target: "For organizations embedding AI at the core",
                        features: [
                            "End-to-end AI system architecture",
                            "Private LLM deployment",
                            "Custom model training",
                            "Predictive analytics pipelines",
                            "Real-time AI systems",
                            "MLOps infrastructure",
                            "AI governance & compliance frameworks",
                            "Enterprise-grade monitoring"
                        ],
                        impact: "Positions the organization as AI-native with scalable, secure, intelligent infrastructure.",
                        icon: "Cpu",
                        color: "bg-rose-500/10 text-rose-500",
                    }
                ]}
            />

            {/* Intelligent Automation Section */}
            <section id="automation" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm">Operational Efficiency</span>
                        <h2 className="text-h2 font-bold text-white mt-2 mb-4">Intelligent Automation</h2>
                        <p className="text-gray-200 max-w-2xl mx-auto text-body leading-relaxed font-medium">Replace repetitive manual tasks with self-learning agents that work 24/7.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Laptop, title: "Workflow Automation", desc: "connect disparate apps and automate data flow seamlessly." },
                            { icon: MessageSquare, title: "Customer Support Agents", desc: "AI chatbots that resolve 80% of queries instantly." },
                            { icon: BarChart3, title: "Document Processing", desc: "Extract data from invoices, contracts, and forms automatically." }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900/60 border border-white/20 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all group backdrop-blur-md">
                                <div className="bg-purple-900/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="h-7 w-7 text-purple-400" />
                                </div>
                                <h3 className="text-h3 font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-200 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Services Deep-Dive Links */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm">Explore Further</span>
                        <h2 className="text-h2 font-bold text-white mt-2 mb-4">AI Services in Detail</h2>
                        <p className="text-gray-200 max-w-2xl mx-auto text-body leading-relaxed font-medium">
                            Dedicated deep dives into each of our AI and automation offerings for Nigerian businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiPages.map((page) => {
                            const PageIcon = page.icon;
                            return (
                                <Link
                                    key={page.slug}
                                    href={`/ai/${page.slug}`}
                                    className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-purple-500/40 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${page.bgColor} ${page.borderColor} border flex items-center justify-center mb-6`}>
                                        <PageIcon className={`h-6 w-6 ${page.accentColor}`} />
                                    </div>
                                    <h3 className="text-h3 font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {page.title}
                                    </h3>
                                    <p className="text-gray-400 text-caption leading-relaxed mb-6">{page.tagline}</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-1 h-[400px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
                            <div className="text-center relative z-10">
                                <BarChart3 className="h-20 w-20 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-300 font-mono text-caption font-bold">Generating Predictive Insights...</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-purple-500/10 p-3 rounded-xl w-fit mb-6">
                            <BarChart3 className="h-8 w-8 text-purple-500" />
                        </div>
                        <h2 className="text-h2 font-bold text-white mb-6">Predictive Analytics</h2>
                        <p className="text-body text-gray-200 mb-6 leading-relaxed font-medium">
                            Stop looking at the rearview mirror. Use historical data to forecast future trends,
                            customer behaviors, and market shifts with high accuracy.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="h-10 w-1 bg-purple-500 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white">Demand Forecasting</h4>
                                    <p className="text-caption text-gray-300 font-medium">Optimize inventory and resource allocation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-1 bg-purple-500 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white">Churn Prediction</h4>
                                    <p className="text-caption text-gray-300 font-medium">Identify at-risk customers before they leave.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto bg-purple-900/10 border border-purple-500/20 rounded-3xl p-12 backdrop-blur-sm">
                    <h2 className="text-h2 text-white font-bold mb-6">Ready to deployments AI?</h2>
                    <Link href="/contact">
                        <Button className="bg-purple-600 hover:bg-purple-500 text-white rounded-full h-12 px-8">Start Your AI Journey</Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
