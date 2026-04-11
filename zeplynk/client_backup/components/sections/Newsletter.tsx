import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-y border-white/10 py-16">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                            Join the Engineering Newsletter
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Get weekly insights on scalable systems and AI automation. No spam, just code.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        {status === "success" ? (
                            <div className="flex items-center text-zgreen-500 gap-2 bg-zgreen-500/10 px-4 py-3 rounded-full w-fit">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-medium">Subscribed successfully</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative group">
                                <div className="flex items-center border-b border-white/20 hover:border-white/40 focus-within:border-white transition-colors pb-2">
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === "loading"}
                                        className="flex-1 bg-transparent text-white placeholder:text-gray-600 focus:outline-none text-lg py-2"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="text-white hover:text-zgreen-500 disabled:opacity-50 transition-colors p-2"
                                    >
                                        <Send className="h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
