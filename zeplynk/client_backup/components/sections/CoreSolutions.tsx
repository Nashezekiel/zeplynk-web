import { motion } from "framer-motion";
import { Code, Bot, Laptop, GraduationCap, ArrowUpRight } from "lucide-react";

const solutions = [
    {
        icon: Code,
        title: "Web Engineering & Platform Development",
        desc: "High-performance websites, SaaS platforms, and custom dashboards engineered for scale and growth.",
        line: "We build digital platforms engineered for performance.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/30"
    },
    {
        icon: Bot,
        title: "AI & Intelligent Automation",
        desc: "AI-powered chatbots, CRM automation, and business intelligence systems that drive efficiency.",
        line: "We transform manual processes into intelligent systems.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/30"
    },
    {
        icon: Laptop,
        title: "Business Process Digitization",
        desc: "Internal portals, HR systems, and operational dashboards to centralize and streamline your data.",
        line: "Digitize operations. Eliminate inefficiencies.",
        color: "text-zgreen-500",
        bg: "bg-zgreen-500/10",
        border: "group-hover:border-zgreen-500/30"
    },
    {
        icon: GraduationCap,
        title: "ZEPLYNK Tech Academy",
        desc: "Developing Africa's next generation of engineers through industry-focused software training.",
        line: "Building the future workforce.",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "group-hover:border-yellow-500/30"
    }
];

export default function CoreSolutions() {
    return (
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Digital Solutions <span className="text-gray-500">Built for Scale</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive engineering services designed to modernize your infrastructure and accelerate business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 md:p-10 rounded-3xl bg-zinc-900/30 border border-white/10 ${item.border} transition-all duration-500 hover:bg-zinc-900/50 backdrop-blur-sm overflow-hidden`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl ${item.bg} ${item.color} mb-4`}>
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <ArrowUpRight className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {item.desc}
                                </p>

                                <div className="pt-6 border-t border-white/5">
                                    <span className={`text-sm font-medium ${item.color} uppercase tracking-wider`}>
                                        {item.line}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
