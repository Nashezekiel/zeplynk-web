import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Discovery", desc: "Business analysis & requirements gathering." },
    { num: "02", title: "Strategy", desc: "System architecture & solution design." },
    { num: "03", title: "Blueprint", desc: "UI/UX design & technical prototyping." },
    { num: "04", title: "Engineering", desc: "Agile development & rigorous testing." },
    { num: "05", title: "Scale", desc: "Deployment, optimization & growth." },
];

export default function ProcessMap() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Our Engineering Framework
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl">We don't just build websites. We engineer systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl bg-zinc-900 border border-white/5 group hover:bg-white/5 transition-colors"
                        >
                            <div className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors mb-4 font-mono">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-400">{step.desc}</p>

                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-white/10 z-10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
