"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, Cloud, Shield, Bot, Database, Settings,
    Phone, ShoppingCart, BarChart, Users,
    Link as LinkIcon, Leaf, HeartPulse, Cpu,
    CreditCard, Fingerprint, Package,
    ArrowRight
} from "lucide-react";

const catalog = [
    {
        id: "core-it",
        category: "Core IT & Business Solutions",
        description: "The backbone of modern enterprise infrastructure and automation.",
        icon: Settings,
        items: [
            {
                title: "Cloud Computing",
                desc: "Scalable, on-demand resources using AWS and Google Cloud Engine for maximum uptime and performance.",
                icon: Cloud
            },
            {
                title: "Cybersecurity",
                desc: "Advanced protection against data threats, including network security, digital forensics, and proactive monitoring.",
                icon: Shield
            },
            {
                title: "Artificial Intelligence (AI)",
                desc: "Customer service bots, automated CRM workflows, and predictive analytics to drive intelligent decision-making.",
                icon: Bot
            },
            {
                title: "CRM & ERP Systems",
                desc: "Strategic implementation of Salesforce, HubSpot, SAP, and Oracle to integrate and streamline business processes.",
                icon: Database
            },
            {
                title: "Managed IT Services",
                desc: "Comprehensive 24/7 IT support, system maintenance, and infrastructure management for worry-free operations.",
                icon: Settings
            }
        ]
    },
    {
        id: "digital-tools",
        category: "Digital & Communication Tools",
        description: "Connecting your business to customers and teams with efficiency.",
        icon: Phone,
        items: [
            {
                title: "VoIP Systems",
                desc: "Cost-effective Voice over Internet Protocol solutions for seamless global communication and conferencing.",
                icon: Phone
            },
            {
                title: "E-commerce Platforms",
                desc: "High-conversion Shopify, Magento, and custom web solutions tailored for high-growth online retail.",
                icon: ShoppingCart
            },
            {
                title: "Digital Marketing Tools",
                desc: "Precision email automation (Mailchimp) and social media management tools to scale your brand presence.",
                icon: BarChart
            },
            {
                title: "Collaboration Software",
                desc: "Deployment and optimization of project management tools like Asana, Trello, and Jira for peak team productivity.",
                icon: Users
            }
        ]
    },
    {
        id: "emerging-tech",
        category: "High-Growth & Emerging Tech",
        description: "Innovation-led solutions for the next generation of industry leaders.",
        icon: LinkIcon,
        items: [
            {
                title: "Blockchain & Web3",
                desc: "Decentralized ledger technologies for secure, transparent, and immutable data architecture.",
                icon: LinkIcon
            },
            {
                title: "Green Tech",
                desc: "Sustainable energy solutions and eco-friendly technology designed for environmental impact and compliance.",
                icon: Leaf
            },
            {
                title: "Health Tech",
                desc: "Telehealth platforms and secure digital health records (EHR) built for privacy and patient care.",
                icon: HeartPulse
            },
            {
                title: "Advanced Analytics",
                desc: "Big data processing and business intelligence (BI) tools to turn raw data into strategic insights.",
                icon: BarChart
            },
            {
                title: "IoT & Digital Twins",
                desc: "Simulating physical systems for real-time optimization and predictive maintenance in industrial environments.",
                icon: Cpu
            }
        ]
    },
    {
        id: "fintech-tools",
        category: "Fintech & Operational Tools",
        description: "Secure, reliable technologies for the modern financial landscape.",
        icon: CreditCard,
        items: [
            {
                title: "Digital Payment Solutions",
                desc: "Mobile payment systems and secure transaction gateways designed for global commerce.",
                icon: CreditCard
            },
            {
                title: "Identity Verification",
                desc: "State-of-the-art digital ID verification solutions (e.g. iiDENTIFii) to ensure trust and compliance.",
                icon: Fingerprint
            },
            {
                title: "Inventory Management",
                desc: "Automated supply chain systems and smart inventory tracking for operational excellence.",
                icon: Package
            }
        ]
    }
];

export default function SolutionsCatalog() {
    const [openCategory, setOpenCategory] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="service-catalog">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Enterprise <span className="text-zgreen-500">Service Catalog</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Exhaustive IT and business solutions engineered for performance, security, and global impact.
                    </p>
                </div>

                <div className="space-y-6">
                    {catalog.map((cat, idx) => (
                        <div
                            key={idx}
                            id={cat.id}
                            className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${openCategory === idx
                                ? "bg-zinc-900/60 border-zgreen-500/30 shadow-[0_0_50px_-12px_rgba(34,197,94,0.15)]"
                                : "bg-zinc-900/20 border-white/5 hover:border-white/20"
                                }`}
                        >
                            <button
                                onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                                className="w-full p-8 flex items-center justify-between text-left group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border ${openCategory === idx
                                        ? "bg-zgreen-500 text-black border-zgreen-500"
                                        : "bg-white/5 text-zgreen-400 border-white/10 group-hover:scale-110"
                                        }`}>
                                        <cat.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{cat.category}</h3>
                                        <p className="text-gray-500 text-sm font-medium">{cat.description}</p>
                                    </div>
                                </div>
                                <div className={`p-3 rounded-full border border-white/10 transition-transform duration-500 ${openCategory === idx ? "rotate-180 bg-white/5 text-white" : "text-gray-500"}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openCategory === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {cat.items.map((item, iIdx) => (
                                                <motion.div
                                                    key={iIdx}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: iIdx * 0.1 }}
                                                    className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-zgreen-500/20 transition-all group/item flex flex-col h-full"
                                                >
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zgreen-500 transition-colors group-hover/item:bg-zgreen-500 group-hover/item:text-black">
                                                            <item.icon className="w-5 h-5" />
                                                        </div>
                                                        <h4 className="font-bold text-lg text-white group-hover/item:text-zgreen-400 transition-colors uppercase tracking-wide text-sm">{item.title}</h4>
                                                    </div>
                                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                                                        {item.desc}
                                                    </p>
                                                    <div className="mt-auto flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest group-hover/item:text-white transition-colors">
                                                        Service Detail <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover/item:translate-x-1" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
