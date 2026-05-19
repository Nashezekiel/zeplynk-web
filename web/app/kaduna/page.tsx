import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tech Solutions Company in Kaduna, Nigeria | Zeplynk",
    description:
        "Zeplynk is Kaduna's leading tech solutions company. We build websites, web applications, and AI automation tools for businesses in Kaduna, Kaduna State, and northern Nigeria. Get a free consultation today.",
    keywords: [
        "tech solutions Kaduna",
        "web development Kaduna",
        "software company Kaduna Nigeria",
        "tech company Kaduna",
        "web developer Kaduna",
        "AI automation Kaduna",
        "software development Kaduna",
        "tech startup Kaduna Nigeria",
        "digital transformation Kaduna",
        "coding bootcamp Kaduna",
        "tech training Kaduna",
        "IT company Kaduna Nigeria",
    ],
    alternates: {
        canonical: "https://zeplynk.com/kaduna",
    },
    openGraph: {
        title: "Tech Solutions Company in Kaduna, Nigeria | Zeplynk",
        description:
            "Kaduna's leading tech solutions company — web development, AI automation, and developer training for businesses in Kaduna and northern Nigeria.",
        url: "https://zeplynk.com/kaduna",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Solutions Company in Kaduna, Nigeria | Zeplynk",
        description:
            "Web development, AI automation & tech training in Kaduna, Nigeria — Zeplynk.",
    },
};

const kadunaLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Zeplynk — Tech Solutions Kaduna",
    description: "Kaduna's premier tech solutions and education company. Providing web development, AI automation, software engineering, and developer training across Kaduna State and northern Nigeria.",
    url: "https://zeplynk.com/kaduna",
    telephone: "+234-806-726-3891",
    email: "hello@zeplynk.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kaduna",
        addressRegion: "Kaduna State",
        addressCountry: "NG",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 10.5105,
        longitude: 7.4165,
    },
    areaServed: ["Kaduna", "Kaduna State", "Northern Nigeria", "Nigeria"],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
    ],
    sameAs: [
        "https://www.linkedin.com/company/zeplynk",
        "https://twitter.com/zeplynk",
    ],
};

export default function KadunaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(kadunaLocalBusinessSchema) }}
            />
            <main className="min-h-screen bg-black text-white">
                {/* Hero */}
                <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-zgreen-500/8 rounded-full blur-[140px] pointer-events-none" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold mb-8 tracking-widest uppercase">
                            📍 Kaduna, Nigeria
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
                            Kaduna&apos;s Premier{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                Tech Solutions
                            </span>{" "}
                            Company
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
                            Zeplynk is headquartered in Kaduna, Nigeria. We build world-class websites,
                            web applications, and AI automation systems for businesses across Kaduna,
                            northern Nigeria, and the entire country. From startups to established enterprises —
                            we are your trusted tech partner in Kaduna.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all hover:scale-105"
                            >
                                Get a Free Consultation
                            </Link>
                            <Link
                                href="/solutions"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-xl text-lg transition-all hover:bg-white/10"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services in Kaduna */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            What We Do in Kaduna
                        </h2>
                        <p className="text-gray-400 text-lg mb-16 max-w-2xl leading-relaxed">
                            Zeplynk provides a full spectrum of tech services to businesses in Kaduna and Kaduna State.
                            Our team of engineers and trainers are based locally — we understand the Kaduna market.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Web Development in Kaduna",
                                    desc: "We build fast, modern websites and web applications for Kaduna businesses. From e-commerce stores to corporate websites — built with Next.js for maximum performance.",
                                    icon: "🌐",
                                    href: "/solutions",
                                },
                                {
                                    title: "AI Automation for Kaduna Businesses",
                                    desc: "We help Kaduna businesses automate repetitive processes using AI. Chatbots, workflow automation, and intelligent data processing — all tailored to the Nigerian market.",
                                    icon: "🤖",
                                    href: "/solutions",
                                },
                                {
                                    title: "Coding Bootcamp in Kaduna",
                                    desc: "Zeplynk Academy is Kaduna's leading developer training program. We train web developers, backend engineers, and AI practitioners right here in Kaduna.",
                                    icon: "🎓",
                                    href: "/academy",
                                },
                                {
                                    title: "Software Development Kaduna",
                                    desc: "Custom software for Kaduna companies. CRM systems, ERPs, SaaS products, and mobile applications — engineered for reliability and scale.",
                                    icon: "💻",
                                    href: "/solutions",
                                },
                                {
                                    title: "Cloud & DevOps Kaduna",
                                    desc: "Cloud infrastructure, hosting, and DevOps automation for Kaduna businesses. We ensure your systems are fast, secure, and always available.",
                                    icon: "☁️",
                                    href: "/solutions",
                                },
                                {
                                    title: "Digital Transformation Kaduna",
                                    desc: "Helping established Kaduna businesses modernize their operations with tailored tech solutions — from digitizing records to building full digital products.",
                                    icon: "🚀",
                                    href: "/contact",
                                },
                            ].map((service) => (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-zgreen-500/40 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zgreen-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Zeplynk in Kaduna */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950/40">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            Why Kaduna Businesses Choose Zeplynk
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                { title: "Local Presence, Global Standards", desc: "We are based in Kaduna — so we understand local business needs. But we build to international standards, ensuring your product competes globally." },
                                { title: "Trained 100+ Nigerian Developers", desc: "Through Zeplynk Academy, we have trained over 100 developers across northern Nigeria. We understand the local talent pipeline." },
                                { title: "Fast Response & Support", desc: "As a Kaduna-based company, we offer fast turnaround, regular check-ins, and face-to-face meetings when needed." },
                                { title: "Fair, Transparent Pricing", desc: "We price our services fairly for the Nigerian market — no hidden costs. We'll always give you a clear, itemized quote before any work begins." },
                            ].map((item) => (
                                <div key={item.title} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-zgreen-500/20 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map + Contact */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    How to Find Us in Kaduna
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Zeplynk is based in Kaduna, Kaduna State, Nigeria. We serve clients
                                    across Kaduna, Jos, Abuja, Lagos, and all of Nigeria — both in-person
                                    and remotely.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <span className="text-zgreen-400 mt-1">📍</span>
                                        <div>
                                            <p className="font-bold text-white">Address</p>
                                            <p className="text-gray-400">Kaduna, Kaduna State, Nigeria</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-zgreen-400 mt-1">📞</span>
                                        <div>
                                            <p className="font-bold text-white">Phone</p>
                                            <a href="tel:+2348067263891" className="text-gray-400 hover:text-zgreen-400 transition-colors">+234-806-726-3891</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-zgreen-400 mt-1">✉️</span>
                                        <div>
                                            <p className="font-bold text-white">Email</p>
                                            <a href="mailto:hello@zeplynk.com" className="text-gray-400 hover:text-zgreen-400 transition-colors">hello@zeplynk.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-zgreen-400 mt-1">🕐</span>
                                        <div>
                                            <p className="font-bold text-white">Office Hours</p>
                                            <p className="text-gray-400">Monday – Friday, 9:00 AM – 5:00 PM WAT</p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all"
                                >
                                    Contact Us Today
                                </Link>
                            </div>
                            <div className="rounded-3xl overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126374.93887613547!2d7.360669!3d10.526456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d34e4f3d09b6b%3A0x8b7a63c1c8c5f99!2sKaduna%2C%20Kaduna%20State%2C%20Nigeria!5e0!3m2!1sen!2s!4v1716000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Zeplynk location in Kaduna, Nigeria"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal links + CTA */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-black to-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Work With Kaduna&apos;s Best Tech Team?
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Whether you need a website, a web application, AI tools, or developer training —
                            Zeplynk is Kaduna&apos;s trusted tech partner. Let&apos;s talk.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="px-10 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all">
                                Start a Project
                            </Link>
                            <Link href="/academy" className="px-10 py-4 border border-white/20 text-white font-bold rounded-xl text-lg transition-all hover:bg-white/10">
                                Explore Zeplynk Academy
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <Link href="/solutions" className="hover:text-zgreen-400 transition-colors">Our Solutions</Link>
                            <Link href="/about" className="hover:text-zgreen-400 transition-colors">About Zeplynk</Link>
                            <Link href="/work" className="hover:text-zgreen-400 transition-colors">Our Work</Link>
                            <Link href="/jos" className="hover:text-zgreen-400 transition-colors">Zeplynk in Jos</Link>
                            <Link href="/insights" className="hover:text-zgreen-400 transition-colors">Tech Insights</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
