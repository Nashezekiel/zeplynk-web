import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe, Satellite, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Our Work — Client Projects",
    description:
        "Explore Zeplynk's portfolio of client projects — from satellite internet platforms to enterprise AI systems. Real engineering for real businesses.",
    keywords: [
        "Zeplynk portfolio",
        "web development projects Nigeria",
        "Datagram NG",
        "Artech Systems",
        "client work Nigeria",
        "software development portfolio",
    ],
    alternates: {
        canonical: "https://zeplynk.com/work",
    },
    openGraph: {
        title: "Our Work — Zeplynk Client Projects",
        description:
            "Real platforms built for real businesses. From Starlink installation services to enterprise AI intelligence systems.",
        url: "https://zeplynk.com/work",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Zeplynk Client Work",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Work — Zeplynk Client Projects",
        description:
            "Real platforms built for real businesses — from satellite internet to enterprise AI.",
        images: ["/opengraph-image.png"],
    },
};

const projects = [
    {
        id: "datagram",
        number: "01",
        label: "Connectivity Platform",
        title: "Datagram NG",
        subtitle: "Starlink Installation & Services — Nigeria",
        description:
            "Full-stack web platform built for Nigeria's leading Starlink installation and distribution company. The platform serves customers across all 36 states, providing detailed service information, coverage maps, and a seamless way for customers to get connected to high-speed satellite internet.",
        challenge:
            "The client needed an authoritative, high-performance web presence that ranked well for Starlink-related searches across Nigeria and handled high organic traffic.",
        solution:
            "We engineered a fast, SEO-optimised Next.js platform with schema markup, structured data, and a modern UI that effectively communicates the brand's coverage and service reliability.",
        results: [
            "Nationwide coverage across all 36 states",
            "High-performance Lighthouse scores",
            "Strong organic search presence for Starlink Nigeria keywords",
            "Clear service inquiry and consultation flow",
        ],
        tags: ["Web Engineering", "Next.js", "SEO Optimisation", "Performance", "Satellite Internet"],
        href: "https://datagram.ng/",
        icon: Satellite,
        accentColor: "text-blue-400",
        borderColor: "border-blue-500/30",
        hoverBorderColor: "hover:border-blue-400/50",
        bgGlow: "bg-blue-900/10",
        badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        numberColor: "text-blue-500/20",
        gradientFrom: "from-blue-600/15",
    },
    {
        id: "artech",
        number: "02",
        label: "AI & Data Intelligence",
        title: "Artech Systems",
        subtitle: "Data Intelligence & AI Solutions",
        description:
            "Designed and developed a modern, high-performance web presence for Artech Systems — an enterprise data intelligence and AI company. The platform confidently positions the brand as a leader in AI-driven business solutions, showcasing their expertise, case studies, and service offerings.",
        challenge:
            "Artech Systems needed a digital presence that matched the sophistication of their technology offering and effectively communicated complex AI capabilities to business decision-makers.",
        solution:
            "We crafted a clean, professional platform with a focus on storytelling and conversion — clearly articulating the company's AI capabilities through structured content, intuitive navigation, and compelling UI design.",
        results: [
            "Polished brand identity established online",
            "Clear AI service offering communication",
            "Optimised for enterprise B2B audience",
            "Modern, credibility-building design",
        ],
        tags: ["AI Platform", "React", "UI/UX Design", "Branding", "Data Intelligence"],
        href: "https://artechsystems.org/",
        icon: BrainCircuit,
        accentColor: "text-purple-400",
        borderColor: "border-purple-500/30",
        hoverBorderColor: "hover:border-purple-400/50",
        bgGlow: "bg-purple-900/10",
        badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-300",
        numberColor: "text-purple-500/20",
        gradientFrom: "from-purple-600/15",
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 font-friendly overflow-x-hidden">

            {/* Hero */}
            <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zgreen-900/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 mb-8 backdrop-blur-sm">
                        <Globe className="h-4 w-4 text-zgreen-400" />
                        <span className="text-sm font-bold text-white tracking-wide uppercase">
                            Client Portfolio
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
                        Work We're{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 via-emerald-400 to-cyan-500">
                            Proud Of
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Real platforms built for real businesses. From satellite internet services
                        across Nigeria to enterprise AI intelligence systems — here's a look at work
                        we've shipped for clients who trusted us with their digital presence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/contact">
                            <Button className="h-14 px-8 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl text-base font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)]">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/solutions">
                            <Button variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/5 rounded-xl text-base font-bold transition-all hover:border-white/40">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className={`group relative bg-zinc-900/40 border ${project.borderColor} ${project.hoverBorderColor} rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:shadow-2xl`}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.gradientFrom} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`} />

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Left panel */}
                                <div className={`lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden`}>
                                    <div className={`absolute top-4 right-4 text-7xl font-black ${project.numberColor} select-none pointer-events-none`}>
                                        {project.number}
                                    </div>

                                    {/* Badge */}
                                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${project.badgeBg} mb-6`}>
                                        {project.label}
                                    </div>

                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${project.bgGlow} border ${project.borderColor} flex items-center justify-center flex-shrink-0`}>
                                            <project.icon className={`h-6 w-6 ${project.accentColor}`} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                            <p className={`text-sm font-semibold ${project.accentColor}`}>{project.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 ${project.accentColor} font-bold hover:opacity-80 transition-opacity text-sm group/link`}
                                    >
                                        Visit Live Site
                                        <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>

                                {/* Right panel */}
                                <div className="lg:col-span-3 p-8 md:p-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">

                                        {/* Challenge */}
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                                                The Challenge
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {project.challenge}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                                                Our Solution
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </div>

                                        {/* Results */}
                                        <div className="sm:col-span-2">
                                            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                                                Key Outcomes
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {project.results.map((result) => (
                                                    <li key={result} className="flex items-start gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${project.bgGlow.replace("bg-", "bg-").replace("/10", "")} mt-2 flex-shrink-0`} style={{ background: project.accentColor.includes("blue") ? "#3b82f6" : "#a855f7" }} />
                                                        <span className="text-gray-300 text-sm">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* More Coming Soon */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-10 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zgreen-500/5 rounded-full blur-[80px] pointer-events-none" />
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-3">More Work</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            More projects on the way
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            We're continuously shipping impactful products. More case studies — including AI automation work and academy projects — coming soon.
                        </p>
                        <Link href="/contact">
                            <Button className="h-12 px-8 bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-xl font-bold transition-all hover:scale-[1.02]">
                                Start Your Project
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
