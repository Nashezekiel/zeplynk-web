import { motion } from "framer-motion";
import { Building2, ShoppingBag, GraduationCap, Users, Briefcase } from "lucide-react";

const industries = [
    { icon: Users, name: "Recruitment & HR", color: "text-blue-400" },
    { icon: Briefcase, name: "Startups & SaaS", color: "text-purple-400" },
    { icon: ShoppingBag, name: "E-commerce", color: "text-pink-400" },
    { icon: GraduationCap, name: "Education", color: "text-yellow-400" },
    { icon: Building2, name: "SMEs & Corporate", color: "text-zgreen-400" }
];

export default function Industries() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Solutions Across High-Growth Industries
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                        >
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                            <span className="text-gray-200 font-medium">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
