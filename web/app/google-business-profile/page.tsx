import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Camera,
    Check,
    ChevronDown,
    ClipboardCheck,
    MessageCircle,
    ShieldCheck,
    Star,
    X,
} from "lucide-react";
import { HeroVisual, Reveal, ScrollProgress, Stagger, StaggerItem } from "./GbpMotion";

// The number on the GBP flyers — ads and outreach send people here, so the page must match it.
const WHATSAPP_NUMBER = "2347063695334";
const WHATSAPP_DISPLAY = "+234 706 369 5334";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Zeplynk, I'd like a free Google profile check. Here's my business's Google Maps link: "
)}`;

const PAGE_URL = "https://zeplynk.com/google-business-profile";

export const metadata: Metadata = {
    title: "Google Business Profile Management in Nigeria | Zeplynk",
    description:
        "Zeplynk manages your Google Business Profile so customers can find, trust and contact your business on Google Search and Maps. Get a free profile check on WhatsApp.",
    keywords: [
        "Google Business Profile management Nigeria",
        "Google My Business management Nigeria",
        "Google Maps listing Nigeria",
        "GBP optimization Nigeria",
        "local SEO Nigeria",
        "Google reviews management Nigeria",
        "Google Business Profile Kaduna",
        "Google Business Profile Abuja",
        "Google Business Profile Lagos",
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Is Your Business Visible on Google? | Zeplynk",
        description:
            "We manage your Google Business Profile: accurate information, fresh photos and posts, review responses and monthly reports. Get a free profile check.",
        url: PAGE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: "Is Your Business Visible on Google? | Zeplynk",
        description:
            "Google Business Profile management for Nigerian businesses. Get a free profile check on WhatsApp.",
    },
};

const services = [
    {
        icon: ClipboardCheck,
        title: "Profile Optimization",
        desc: "Accurate name, category, services, phone, address and opening hours, kept up to date and watched for unwanted edits.",
    },
    {
        icon: Camera,
        title: "Posts & Photos",
        desc: "We turn the photos and promotions you send us into regular Google Posts and photo updates.",
    },
    {
        icon: Star,
        title: "Review Management",
        desc: "Professional replies to every review, plus a simple way for your team to ask happy customers for reviews.",
    },
    {
        icon: BarChart3,
        title: "Monthly Reports",
        desc: "The calls, direction requests and website visits your profile brought in, what we did and what's next.",
    },
];

const problems = [
    "Wrong opening hours, so customers arrive when you're closed",
    "An outdated phone number, so callers can't reach you",
    "Few or old photos, so customers can't see what you offer",
    "Unanswered reviews, including the complaints",
    "A category that doesn't match what customers search for",
    "No updates in months, so the profile looks abandoned",
];

const steps = [
    {
        title: "Send your Maps link",
        desc: "Message us on WhatsApp with your Google Maps link. Not on Maps yet? Send your business name.",
    },
    {
        title: "Get your free check",
        desc: "We send a short summary of what's working, what's missing and what to fix first.",
    },
    {
        title: "Choose a plan",
        desc: "If you want us to handle it, we recommend a plan that fits your business. No pressure.",
    },
    {
        title: "We manage it monthly",
        desc: "We optimize, post, reply to reviews and send you a report every month.",
    },
];

const checkItems = [
    "Business information accuracy",
    "Primary and secondary categories",
    "Services and business description",
    "Photo quality and freshness",
    "Reviews, rating and response rate",
    "Recent activity and Google Posts",
];

const industries = [
    "Restaurants & cafés",
    "Hotels & shortlets",
    "Clinics & pharmacies",
    "Salons & barbershops",
    "Real estate",
    "Schools & training centres",
    "Event centres",
    "Auto dealers & mechanics",
    "Boutiques & retail",
    "Logistics",
    "Lawyers & accountants",
    "Home services",
];

const willDo = [
    "Keep your profile accurate and compliant with Google's guidelines",
    "Help you collect genuine reviews from real customers",
    "Report the customer actions Google shows us, honestly",
];

const wontDo = [
    "Promise a #1 spot on Google Maps. Nobody can pay Google for rankings",
    "Buy, fake or incentivize reviews",
    "Stuff keywords into your name or create fake locations",
];

const faqs = [
    {
        question: "What is a Google Business Profile?",
        answer: "It's the free listing that shows your business on Google Search and Google Maps, with your address, phone number, opening hours, photos and reviews. It used to be called Google My Business.",
    },
    {
        question: "Is the profile check really free?",
        answer: "Yes. Send us your Google Maps link on WhatsApp and we'll review your profile and tell you what to fix, at no cost and with no obligation to sign up.",
    },
    {
        question: "How much does monthly management cost?",
        answer: "It depends on your business and how much work your profile needs. After your free profile check, we'll recommend a plan and give you a clear monthly price before anything starts.",
    },
    {
        question: "Can you guarantee I'll rank #1 on Google Maps?",
        answer: "No, and be careful of anyone who does. Google ranks local results by relevance, distance and prominence, and no one can pay for a higher spot. We improve the parts you control: accurate information, photos, activity and reviews.",
    },
    {
        question: "My business isn't on Google yet. Can you help?",
        answer: "Yes. We can create and set up your profile and guide you through Google's verification. Verification itself is decided by Google, but we'll help you prepare everything it asks for.",
    },
    {
        question: "What do I need to provide?",
        answer: "Access to your profile (we'll show you how to add us as a manager) and, each month, a few photos and any promotions or updates. You can send everything on WhatsApp.",
    },
    {
        question: "My profile edit was rejected or my listing was suspended. Can you fix it?",
        answer: "We can review what happened, correct the profile and prepare a reinstatement request or appeal where it applies. The final decision is Google's, so we can't guarantee the outcome.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile Management",
    serviceType: "Google Business Profile management and local SEO",
    description:
        "Monthly Google Business Profile management for Nigerian businesses: profile optimization, Google Posts and photos, review management and performance reporting.",
    url: PAGE_URL,
    provider: {
        "@type": "Organization",
        name: "Zeplynk",
        url: "https://zeplynk.com",
        telephone: "+234-706-369-5334",
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://zeplynk.com" },
        { "@type": "ListItem", position: 2, name: "Google Business Profile Management", item: PAGE_URL },
    ],
};

// Shared layout tokens so every section keeps the same rhythm and outline weight.
const SECTION = "relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-white/10";
const CARD =
    "h-full rounded-3xl border border-white/15 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-zgreen-500/50 hover:bg-zinc-900/70 hover:shadow-[0_20px_50px_-20px_rgba(34,197,94,0.35)]";

function WhatsAppButton({ label = "Get Your Free Profile Check", className = "" }: { label?: string; className?: string }) {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 bg-zgreen-600 hover:bg-zgreen-500 text-black font-bold rounded-full text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-10px_rgba(34,197,94,0.7)] active:translate-y-0 ${className}`}
        >
            <MessageCircle className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover/btn:-rotate-12" />
            {label}
        </a>
    );
}

function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
    return (
        <Reveal className={`mb-10 sm:mb-12 max-w-2xl ${center ? "text-center mx-auto" : ""}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zgreen-400 mb-3">{eyebrow}</p>
            <h2 className="text-h2 font-bold text-white tracking-tight">{title}</h2>
            {intro && <p className="mt-4 text-gray-400 leading-relaxed">{intro}</p>}
        </Reveal>
    );
}

function CheckList({ items, tone = "good" }: { items: string[]; tone?: "good" | "bad" }) {
    const Icon = tone === "good" ? Check : X;
    return (
        <Stagger as="ul" className="space-y-3">
            {items.map((item) => (
                <StaggerItem as="li" key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                    <Icon className={`h-4 w-4 shrink-0 mt-1 ${tone === "good" ? "text-zgreen-400" : "text-red-400"}`} />
                    {item}
                </StaggerItem>
            ))}
        </Stagger>
    );
}

export default function GoogleBusinessProfilePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <ScrollProgress />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Hero */}
                <section className="relative px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20 lg:pb-24">
                    <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-zgreen-500/10 rounded-full blur-[140px] pointer-events-none" />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
                    />
                    <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
                        <Stagger className="text-center lg:text-left" gap={0.1}>
                            <StaggerItem>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/30 text-zgreen-400 text-[11px] sm:text-xs font-bold mb-6 tracking-widest uppercase">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-zgreen-400 opacity-75 animate-ping motion-reduce:animate-none" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zgreen-400" />
                                    </span>
                                    Google Business Profile Management
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <h1 className="text-h1 font-black tracking-tight leading-[1.05] mb-6">
                                    Is your business{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                        visible on Google?
                                    </span>
                                </h1>
                            </StaggerItem>
                            <StaggerItem>
                                <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                                    Customers search Google before they call, visit or buy. We manage your Google
                                    Business Profile so they can find you, trust you and contact you.
                                </p>
                            </StaggerItem>
                            <StaggerItem className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <WhatsAppButton />
                                <a
                                    href="#services"
                                    className="group/link inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 border border-white/20 text-white font-semibold rounded-full text-base transition-all duration-300 hover:bg-white/5 hover:border-white/40"
                                >
                                    See what&apos;s included
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </a>
                            </StaggerItem>
                            <StaggerItem>
                                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-gray-400">
                                    {["Free profile check", "No obligation", "All on WhatsApp"].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-zgreen-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </StaggerItem>
                        </Stagger>

                        <HeroVisual className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get your free Google profile check on WhatsApp"
                                className="group relative block"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-zgreen-500/30 to-emerald-400/10 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="/images/gbp/gbp-flyer-dark.png"
                                    alt="Zeplynk Google Business Profile management: profile setup, performance tracking, content updates and local SEO"
                                    width={1254}
                                    height={1254}
                                    priority
                                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 90vw"
                                    className="relative w-full h-auto rounded-3xl border border-white/20 shadow-2xl transition-transform duration-500 lg:rotate-2 group-hover:rotate-0 group-hover:scale-[1.02]"
                                />
                            </a>
                        </HeroVisual>
                    </div>
                </section>

                {/* Problems */}
                <section className={SECTION}>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
                        <div className="lg:sticky lg:top-32">
                            <SectionHeading
                                eyebrow="The problem"
                                title="Having a profile isn't enough."
                                intro="Many businesses set up a Google profile once and never touch it again. These are the problems we see most often, and each one can cost you customers."
                            />
                        </div>
                        <Stagger as="ul" gap={0.06} className="rounded-3xl border border-white/15 bg-zinc-900/40 divide-y divide-white/10 overflow-hidden">
                            {problems.map((problem) => (
                                <StaggerItem
                                    as="li"
                                    key={problem}
                                    className="flex items-start gap-4 px-5 sm:px-6 py-4 sm:py-5 transition-colors duration-300 hover:bg-white/[0.03]"
                                >
                                    <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        <X className="h-3.5 w-3.5 text-red-400" />
                                    </span>
                                    <span className="text-gray-300 text-sm sm:text-base">{problem}</span>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className={`${SECTION} bg-zinc-950/60 scroll-mt-24`}>
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading
                            eyebrow="What we handle"
                            title="Your Google presence, managed every month."
                            intro="You focus on running your business. We keep your profile accurate, active and trustworthy."
                        />
                        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {services.map((service) => (
                                <StaggerItem key={service.title}>
                                    <div className={`group p-6 ${CARD}`}>
                                        <div className="h-11 w-11 rounded-2xl bg-zgreen-500/10 border border-zgreen-500/25 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-zgreen-500/20 group-hover:scale-110">
                                            <service.icon className="h-5 w-5 text-zgreen-400" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* How it works */}
                <section className={SECTION}>
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading eyebrow="How it works" title="Four simple steps." />
                        <Stagger as="ol" gap={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {steps.map((step, i) => (
                                <StaggerItem as="li" key={step.title}>
                                    <div className={`group p-6 ${CARD}`}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zgreen-600 text-black font-black text-sm shadow-[0_0_24px_-6px_rgba(34,197,94,0.7)] transition-transform duration-300 group-hover:scale-110">
                                                {i + 1}
                                            </span>
                                            {i < steps.length - 1 && (
                                                <span aria-hidden="true" className="hidden lg:block h-px flex-1 bg-gradient-to-r from-zgreen-500/50 to-transparent" />
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* Free profile check */}
                <section className={`${SECTION} bg-zinc-950/60`}>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <Reveal className="order-2 lg:order-1 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                            <div className="group relative">
                                <div className="absolute -inset-3 bg-zgreen-500/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src="/images/gbp/gbp-flyer-light.jpg"
                                    alt="Get your business listed and verified on Google with Zeplynk"
                                    width={2048}
                                    height={2048}
                                    sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, 90vw"
                                    className="relative w-full h-auto rounded-3xl border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                        </Reveal>
                        <div className="order-1 lg:order-2">
                            <SectionHeading
                                eyebrow="Free profile check"
                                title="Find out what your profile needs."
                                intro="Send us your Google Maps link and we'll review it for free. You get a short, plain-English summary of what to fix first, whether or not you work with us."
                            />
                            <Stagger as="ul" gap={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {checkItems.map((item) => (
                                    <StaggerItem
                                        as="li"
                                        key={item}
                                        className="flex items-start gap-3 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-gray-300"
                                    >
                                        <Check className="h-4 w-4 text-zgreen-400 shrink-0 mt-0.5" />
                                        {item}
                                    </StaggerItem>
                                ))}
                            </Stagger>
                            <Reveal>
                                <WhatsAppButton label="Send Us Your Maps Link" className="w-full sm:w-auto" />
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Who it's for */}
                <section className={SECTION}>
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            center
                            eyebrow="Who it's for"
                            title="Built for businesses customers search for."
                            intro="If people search “near me” to find a business like yours, your Google profile is your most important shop window."
                        />
                        <Stagger gap={0.04} className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {industries.map((industry) => (
                                <StaggerItem key={industry}>
                                    <span className="block px-4 py-2 rounded-full bg-zinc-900/40 border border-white/15 text-gray-300 text-sm transition-colors duration-300 hover:border-zgreen-500/50 hover:text-white">
                                        {industry}
                                    </span>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* Honest promise */}
                <section className={`${SECTION} bg-zinc-950/60`}>
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading
                            eyebrow="Our promise"
                            title="We do it the right way."
                            intro="Shortcuts on Google can get your profile suspended. Here's exactly what you can expect from us."
                        />
                        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                            <StaggerItem>
                                <div className="h-full p-6 sm:p-8 rounded-3xl border border-zgreen-500/30 bg-zgreen-500/[0.04]">
                                    <p className="flex items-center gap-2 font-bold text-white mb-5">
                                        <ShieldCheck className="h-5 w-5 text-zgreen-400" /> We will
                                    </p>
                                    <CheckList items={willDo} />
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="h-full p-6 sm:p-8 rounded-3xl border border-white/15 bg-zinc-900/40">
                                    <p className="flex items-center gap-2 font-bold text-white mb-5">
                                        <X className="h-5 w-5 text-red-400" /> We won&apos;t
                                    </p>
                                    <CheckList items={wontDo} tone="bad" />
                                </div>
                            </StaggerItem>
                        </Stagger>
                    </div>
                </section>

                {/* FAQ */}
                <section className={SECTION}>
                    <div className="max-w-3xl mx-auto">
                        <SectionHeading center eyebrow="FAQ" title="Questions business owners ask." />
                        <Stagger gap={0.05} className="space-y-3">
                            {faqs.map((faq) => (
                                <StaggerItem key={faq.question}>
                                    <details className="group rounded-2xl border border-white/15 bg-zinc-900/40 transition-colors duration-300 hover:border-white/25 open:border-zgreen-500/40 open:bg-zinc-900/70">
                                        <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 font-semibold text-white text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                                            {faq.question}
                                            <ChevronDown className="h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-zgreen-400" />
                                        </summary>
                                        <p className="px-5 sm:px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                                            {faq.answer}
                                        </p>
                                    </details>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* Final CTA */}
                <section className={SECTION}>
                    <Reveal className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-zgreen-500/30 bg-gradient-to-br from-zgreen-950 via-black to-black px-6 py-12 sm:px-12 sm:py-16 text-center shadow-[0_0_80px_-30px_rgba(34,197,94,0.5)]">
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[240px] bg-zgreen-500/20 rounded-full blur-[100px] pointer-events-none" />
                        <h2 className="relative text-h2 font-bold text-white tracking-tight mb-4">
                            Your customers are searching.
                            <br className="hidden sm:block" /> Make sure they find you.
                        </h2>
                        <p className="relative text-gray-400 mb-8 max-w-xl mx-auto">
                            Send us your Google Maps link on WhatsApp and get your free profile check.
                        </p>
                        <WhatsAppButton className="relative w-full sm:w-auto" />
                        <p className="relative mt-5 text-sm text-gray-500">
                            Or call{" "}
                            <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-white hover:text-zgreen-400 transition-colors">
                                {WHATSAPP_DISPLAY}
                            </a>
                        </p>
                    </Reveal>
                    <nav aria-label="Related pages" className="max-w-5xl mx-auto mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
                        <Link href="/solutions" className="hover:text-zgreen-400 transition-colors">Our Solutions</Link>
                        <Link href="/solutions/web-engineering" className="hover:text-zgreen-400 transition-colors">Website Development</Link>
                        <Link href="/work" className="hover:text-zgreen-400 transition-colors">Our Work</Link>
                        <Link href="/reviews" className="hover:text-zgreen-400 transition-colors">Client Reviews</Link>
                        <Link href="/contact" className="hover:text-zgreen-400 transition-colors">Contact</Link>
                    </nav>
                </section>
            </main>
        </>
    );
}
