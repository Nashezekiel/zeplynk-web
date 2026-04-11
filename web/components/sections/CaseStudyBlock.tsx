import { ArrowRight, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function CaseStudyBlock() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zgreen-900/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Real Business Impact</h2>
                    <p className="text-gray-400">See how we engineer growth for our partners.</p>
                </div>

                <div className="bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left: Context */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                                <span>E-commerce Automation</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Scaling a Retail Startup to 10k+ Monthly Users
                            </h3>

                            <div className="space-y-6 text-gray-200 font-medium">
                                <div>
                                    <h4 className="text-white font-bold mb-2">The Problem</h4>
                                    <p className="text-sm">Manual inventory management and slow site performance were causing a 40% cart abandonment rate.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">The Solution</h4>
                                    <p className="text-sm">We engineered a custom Next.js storefront with an automated inventory syncing bot and AI-powered product recommendations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="p-8 md:p-12 bg-white/2 flex flex-col justify-center">
                            <h4 className="text-white font-bold mb-8">Measurable Results</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                                    <TrendingUp className="h-6 w-6 text-zgreen-500 mb-4" />
                                    <div className="text-3xl font-bold text-white mb-1">145%</div>
                                    <div className="text-sm text-gray-400 font-bold">Revenue Increase</div>
                                </div>
                                <div className="bg-black/40 p-6 rounded-2xl border border-white/10">
                                    <Clock className="h-6 w-6 text-blue-500 mb-4" />
                                    <div className="text-3xl font-bold text-white mb-1">20hrs</div>
                                    <div className="text-sm text-gray-400 font-bold">Saved Weekly</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
