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

function WhatsAppButton({ label = "Get Your Free Profile Check", className = "" }: { label?: string; className?: string }) {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 bg-zgreen-600 hover:bg-zgreen-500 text-black font-bold rounded-full text-base transition-all hover:shadow-[0_0_40px_-8px_rgba(34,197,94,0.6)] ${className}`}
        >
            <MessageCircle className="h-5 w-5 shrink-0" />
            {label}
        </a>
    );
}

function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
    return (
        <div className={`mb-10 sm:mb-14 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zgreen-400 mb-4">{eyebrow}</p>
            <h2 className="text-h2 font-bold text-white tracking-tight">{title}</h2>
            {intro && <p className="mt-4 text-gray-400 leading-relaxed">{intro}</p>}
        </div>
    );
}

export default function GoogleBusinessProfilePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Hero */}
                <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-zgreen-500/10 rounded-full blur-[140px] pointer-events-none" />
                    <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-[11px] sm:text-xs font-bold mb-6 tracking-widest uppercase">
                                <span className="h-1.5 w-1.5 rounded-full bg-zgreen-400" />
                                Google Business Profile Management
                            </div>
                            <h1 className="text-h1 font-black tracking-tight leading-[1.05] mb-6">
                                Is your business{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                    visible on Google?
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                                Customers search Google before they call, visit or buy. We manage your Google
                                Business Profile so they can find you, trust you and contact you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <WhatsAppButton />
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 border border-white/15 text-white font-semibold rounded-full text-base transition-all hover:bg-white/5"
                                >
                                    See what&apos;s included
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-gray-500">
                                {["Free profile check", "No obligation", "All on WhatsApp"].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-zgreen-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Get your free Google profile check on WhatsApp"
                            className="group relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-zgreen-500/30 to-emerald-400/10 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
                            <Image
                                src="/images/gbp/gbp-flyer-dark.png"
                                alt="Zeplynk Google Business Profile management: profile setup, performance tracking, content updates and local SEO"
                                width={1254}
                                height={1254}
                                priority
                                sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 90vw"
                                className="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 lg:rotate-2 group-hover:rotate-0"
                            />
                        </a>
                    </div>
                </section>

                {/* Problems */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
                        <SectionHeading
                            eyebrow="The problem"
                            title="Having a profile isn't enough."
                            intro="Many businesses set up a Google profile once and never touch it again. These are the problems we see most often, and each one can cost you customers."
                        />
                        <ul className="rounded-3xl border border-white/10 bg-zinc-950 divide-y divide-white/5 overflow-hidden">
                            {problems.map((problem) => (
                                <li key={problem} className="flex items-start gap-4 px-5 sm:px-6 py-4 sm:py-5">
                                    <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center">
                                        <X className="h-3.5 w-3.5 text-red-400" />
                                    </span>
                                    <span className="text-gray-300 text-sm sm:text-base">{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/50 scroll-mt-24">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading
                            eyebrow="What we handle"
                            title="Your Google presence, managed every month."
                            intro="You focus on running your business. We keep your profile accurate, active and trustworthy."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="p-6 rounded-3xl bg-black border border-white/10 hover:border-zgreen-500/40 transition-colors"
                                >
                                    <div className="h-11 w-11 rounded-2xl bg-zgreen-500/10 flex items-center justify-center mb-5">
                                        <service.icon className="h-5 w-5 text-zgreen-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading eyebrow="How it works" title="Four simple steps." />
                        <div className="relative">
                        <div aria-hidden="true" className="hidden lg:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-zgreen-500/40 via-white/10 to-transparent" />
                        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                            {steps.map((step, i) => (
                                <li key={step.title} className="relative">
                                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zgreen-600 text-black font-black text-sm mb-5">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </li>
                            ))}
                        </ol>
                        </div>
                    </div>
                </section>

                {/* Free profile check */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/50">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                            <Image
                                src="/images/gbp/gbp-flyer-light.jpg"
                                alt="Get your business listed and verified on Google with Zeplynk"
                                width={2048}
                                height={2048}
                                sizes="(min-width: 1024px) 520px, (min-width: 640px) 448px, 90vw"
                                className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeading
                                eyebrow="Free profile check"
                                title="Find out what your profile needs."
                                intro="Send us your Google Maps link and we'll review it for free. You get a short, plain-English summary of what to fix first, whether or not you work with us."
                            />
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 -mt-4">
                                {checkItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="h-4 w-4 text-zgreen-400 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <WhatsAppButton label="Send Us Your Maps Link" className="w-full sm:w-auto" />
                        </div>
                    </div>
                </section>

                {/* Who it's for */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            center
                            eyebrow="Who it's for"
                            title="Built for businesses customers search for."
                            intro="If people search “near me” to find a business like yours, your Google profile is your most important shop window."
                        />
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {industries.map((industry) => (
                                <span
                                    key={industry}
                                    className="px-4 py-2 rounded-full bg-zinc-950 border border-white/10 text-gray-300 text-sm"
                                >
                                    {industry}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Honest promise */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/50">
                    <div className="max-w-6xl mx-auto">
                        <SectionHeading
                            eyebrow="Our promise"
                            title="We do it the right way."
                            intro="Shortcuts on Google can get your profile suspended. Here's exactly what you can expect from us."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                            <div className="p-6 sm:p-8 rounded-3xl bg-black border border-zgreen-500/20">
                                <p className="flex items-center gap-2 font-bold text-white mb-5">
                                    <ShieldCheck className="h-5 w-5 text-zgreen-400" /> We will
                                </p>
                                <ul className="space-y-3">
                                    {willDo.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                                            <Check className="h-4 w-4 text-zgreen-400 shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 sm:p-8 rounded-3xl bg-black border border-white/10">
                                <p className="flex items-center gap-2 font-bold text-white mb-5">
                                    <X className="h-5 w-5 text-red-400" /> We won&apos;t
                                </p>
                                <ul className="space-y-3">
                                    {wontDo.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                                            <X className="h-4 w-4 text-red-400 shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <SectionHeading center eyebrow="FAQ" title="Questions business owners ask." />
                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <details
                                    key={faq.question}
                                    className="group rounded-2xl bg-zinc-950 border border-white/10 open:border-zgreen-500/30 transition-colors"
                                >
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 font-semibold text-white text-sm sm:text-base [&::-webkit-details-marker]:hidden">
                                        {faq.question}
                                        <ChevronDown className="h-5 w-5 text-gray-500 shrink-0 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className="px-5 sm:px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-zgreen-500/20 bg-gradient-to-br from-zgreen-950 via-black to-black px-6 py-14 sm:px-12 sm:py-16 text-center">
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
                    </div>
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
