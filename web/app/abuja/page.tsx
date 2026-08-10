import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Web Development & Tech Training in Abuja, FCT | Zeplynk",
    description:
        "Zeplynk delivers web development, software engineering, AI automation, and tech training to businesses in Abuja, Federal Capital Territory, Nigeria. Get a free consultation.",
    keywords: [
        "web development Abuja Nigeria",
        "tech solutions Abuja FCT",
        "software company Abuja Nigeria",
        "web developer Abuja",
        "AI automation Abuja Nigeria",
        "coding bootcamp Abuja Nigeria",
        "tech training Abuja",
        "IT company Abuja Nigeria",
        "digital transformation Abuja Nigeria",
        "software development FCT",
    ],
    alternates: {
        canonical: "https://zeplynk.com/abuja",
    },
    openGraph: {
        title: "Web Development & Tech Training in Abuja, FCT | Zeplynk",
        description:
            "Zeplynk brings world-class web development, AI automation, and developer training to Abuja, Federal Capital Territory. Serving businesses across Nigeria.",
        url: "https://zeplynk.com/abuja",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development & Tech Training in Abuja, FCT | Zeplynk",
        description:
            "Web development, AI automation & tech training in Abuja, FCT — Zeplynk.",
        images: ["/opengraph-image"],
    },
};

const abujaLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Zeplynk — Tech Solutions Abuja",
    description: "Tech solutions and developer training serving Abuja and Federal Capital Territory, Nigeria. Web development, AI automation, software engineering, and coding bootcamp programmes.",
    url: "https://zeplynk.com/abuja",
    telephone: "+234-806-726-3891",
    email: "hello@zeplynk.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressRegion: "Federal Capital Territory",
        addressCountry: "NG",
    },
    areaServed: ["Abuja", "Federal Capital Territory", "Nigeria"],
    sameAs: [
        "https://www.linkedin.com/company/zeplynk/",
        "https://www.instagram.com/zeplynk/",
        "https://www.facebook.com/share/1JghGYmUWr/",
    ],
};

const abujaBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zeplynk.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Abuja",
            item: "https://zeplynk.com/abuja",
        },
    ],
};

export default function AbujaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(abujaLocalBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(abujaBreadcrumbSchema) }}
            />
            <main className="min-h-screen bg-black text-white">
                {/* Hero */}
                <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-[140px] pointer-events-none" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-8 tracking-widest uppercase">
                            📍 Abuja, Federal Capital Territory, Nigeria
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
                            Web Development &amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                Tech Solutions
                            </span>{" "}
                            in Abuja, Nigeria
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
                            Zeplynk brings world-class web engineering, AI automation, and developer
                            training to businesses in Abuja, Federal Capital Territory, and across Nigeria.
                            We serve Abuja clients both in-person and remotely from our Kaduna headquarters.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all hover:scale-105"
                            >
                                Start a Project in Abuja
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

                {/* Services in Abuja */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            Tech Services for Abuja Businesses
                        </h2>
                        <p className="text-gray-400 text-lg mb-16 max-w-2xl leading-relaxed">
                            From a simple business website to a fully automated enterprise system —
                            Zeplynk delivers results for clients in Abuja and the Federal Capital Territory.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Website Development Abuja", desc: "Professional websites and web applications for Abuja businesses. Fast, mobile-friendly, and built to convert visitors into customers.", icon: "🌐", href: "/solutions" },
                                { title: "AI Solutions for Abuja Businesses", desc: "Automate your business processes with AI. Custom chatbots, workflow automation, and smart data tools built for Nigerian businesses.", icon: "🤖", href: "/solutions" },
                                { title: "Developer Training in Abuja", desc: "Zeplynk Academy offers online coding bootcamps accessible from Abuja. Learn web development, backend engineering, and AI.", icon: "🎓", href: "/academy" },
                                { title: "Custom Software Development", desc: "Business management systems, CRM tools, mobile apps, and SaaS products — built for Abuja and Nigerian businesses.", icon: "💻", href: "/solutions" },
                                { title: "E-commerce Development Abuja", desc: "Online stores for Abuja traders and businesses. Integrated with Nigerian payment gateways like Paystack and Flutterwave.", icon: "🛒", href: "/solutions" },
                                { title: "Tech Consulting Abuja", desc: "Not sure what tech you need? We offer free strategy consultations to help Abuja businesses find the right digital solution.", icon: "💡", href: "/contact" },
                            ].map((service) => (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-zgreen-500/40 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zgreen-400 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact & Location */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    Serving Clients in Abuja &amp; FCT
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Zeplynk regularly works with clients in Abuja, Federal Capital Territory. We deliver all
                                    projects remotely or through scheduled in-person visits. Getting started is
                                    as easy as a phone call or WhatsApp message.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <span className="text-zgreen-400 mt-1">📞</span>
                                        <div>
                                            <p className="font-bold text-white">Call / WhatsApp</p>
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
                                            <p className="font-bold text-white">Hours</p>
                                            <p className="text-gray-400">Monday – Friday, 9:00 AM – 5:00 PM WAT</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all">
                                    Get a Free Quote
                                </Link>
                            </div>
                            <div className="rounded-3xl overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126019.12!2d7.5244!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8d8c8b9b9b%3A0x8b23c6c25c7afc44!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2s!4v1716000000001!5m2!1sen!2s"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Zeplynk serving Abuja, Federal Capital Territory, Nigeria"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA + Internal links */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-black to-zinc-900">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            Let&apos;s Build Something Great in Abuja
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Ready to launch your digital project? Zeplynk is a WhatsApp message away.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="px-10 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl text-lg transition-all">
                                Contact Us
                            </Link>
                            <Link href="/academy" className="px-10 py-4 border border-white/20 text-white font-bold rounded-xl text-lg transition-all hover:bg-white/10">
                                Join Zeplynk Academy
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <Link href="/solutions" className="hover:text-zgreen-400 transition-colors">Our Solutions</Link>
                            <Link href="/about" className="hover:text-zgreen-400 transition-colors">About Zeplynk</Link>
                            <Link href="/kaduna" className="hover:text-zgreen-400 transition-colors">Zeplynk in Kaduna</Link>
                            <Link href="/jos" className="hover:text-zgreen-400 transition-colors">Zeplynk in Jos</Link>
                            <Link href="/insights" className="hover:text-zgreen-400 transition-colors">Tech Insights</Link>
                            <Link href="/work" className="hover:text-zgreen-400 transition-colors">Our Work</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
