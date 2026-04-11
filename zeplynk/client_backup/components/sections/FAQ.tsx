import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Timeline varies by scope. A standard landing page might take 2 weeks, while a complex web application can take 8-12 weeks. We provide a detailed roadmap during our discovery phase."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We offer tailored maintenance packages to ensure your system remains secure, updated, and performant after deployment."
    },
    {
        question: "What is your pricing structure?",
        answer: "We work on a project-based pricing model. This ensures transparency and no hidden costs. For long-term partnerships, we also offer retainer models."
    },
    {
        question: "Can you upgrade our existing legacy software?",
        answer: "Yes. We specialize in digital transformation, which often involves refactoring or rebuilding legacy systems with modern, scalable technologies."
    },
    {
        question: "How does the Academy internship work?",
        answer: "Top graduates from our 3-month intensive program are offered internship placements where they work on real client projects under senior mentorship."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
            {/* Ambient Background */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zgreen-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400">Everything you need to know about working with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? "bg-zinc-900/60 border-zgreen-500/30"
                                    : "bg-zinc-900/20 border-white/5 hover:bg-zinc-900/40"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? "text-white" : "text-gray-300"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-zgreen-500/20 text-zgreen-500" : "bg-white/5 text-gray-500"
                                    }`}>
                                    {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
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
