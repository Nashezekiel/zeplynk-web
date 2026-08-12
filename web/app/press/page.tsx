import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Press & Media | Zeplynk",
    description:
        "Press resources for Zeplynk — Nigeria's premier tech solutions and education company in Kaduna. Download our logo, read our company factsheet, and contact our media team.",
    keywords: [
        "Zeplynk press",
        "Zeplynk media",
        "Zeplynk company facts",
        "Nigerian tech company press kit",
        "Zeplynk news",
        "Zeplynk founder",
        "Zeplynk Kaduna",
    ],
    alternates: {
        canonical: "https://zeplynk.com/press",
    },
    openGraph: {
        title: "Press & Media | Zeplynk",
        description:
            "Press resources for Zeplynk — Nigeria's premier tech solutions and education company based in Kaduna.",
        url: "https://zeplynk.com/press",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Press & Media | Zeplynk",
        description: "Zeplynk press kit — company facts, logo downloads, and media enquiries.",
        images: ["/opengraph-image"],
    },
};

const pressSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zeplynk",
    url: "https://zeplynk.com",
    logo: "https://zeplynk.com/theLogo-removebg-preview.png",
    description: "Zeplynk is a Nigerian tech solutions and education company founded in Kaduna in 2024 by Nash Ezekiel Pam. It provides web development, AI automation, and software services, and operates Zeplynk Academy — a developer training program for Nigerian professionals.",
    foundingDate: "2024",
    founder: {
        "@type": "Person",
        name: "Nash Ezekiel Pam",
        jobTitle: "Founder & CEO",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kaduna",
        addressRegion: "Kaduna State",
        addressCountry: "NG",
    },
    telephone: "+234-806-726-3891",
    email: "hello@zeplynk.com",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 50 },
    sameAs: [
        "https://www.linkedin.com/company/zeplynk/",
        "https://www.instagram.com/zeplynk/",
        "https://www.facebook.com/share/1JghGYmUWr/",
    ],
};

const facts = [
    { label: "Company Name", value: "Zeplynk" },
    { label: "Founded", value: "2024" },
    { label: "Headquarters", value: "Kaduna, Kaduna State, Nigeria" },
    { label: "Founder & CEO", value: "Nash Ezekiel Pam" },
    { label: "Services", value: "Web Development, AI Automation, Software Engineering, Tech Education" },
    { label: "Markets Served", value: "Nigeria, Africa" },
    { label: "Education Wing", value: "Zeplynk Academy — coding bootcamp in Kaduna" },
    { label: "Phone", value: "+234-806-726-3891" },
    { label: "Media Enquiries", value: "hello@zeplynk.com" },
    { label: "Website", value: "https://zeplynk.com" },
];

export default function PressPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }}
            />
            <main className="min-h-screen bg-black text-white pt-36 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold mb-8 tracking-widest uppercase">
                            📰 Press &amp; Media
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                            Zeplynk{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">
                                Press Room
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Resources for journalists, analysts, and media professionals covering
                            Nigerian tech. For press enquiries, contact{" "}
                            <a href="mailto:hello@zeplynk.com" className="text-zgreen-400 hover:text-zgreen-300 transition-colors">
                                hello@zeplynk.com
                            </a>
                        </p>
                    </div>

                    {/* What is Zeplynk — AI-optimized entity paragraph */}
                    <section className="mb-20 p-10 rounded-3xl bg-zinc-900/50 border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6">About Zeplynk</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            <strong className="text-white">Zeplynk</strong> is a Nigerian tech solutions and education company
                            founded in Kaduna, Nigeria in 2024 by Nash Ezekiel Pam. The company provides
                            web development, AI automation, software engineering, and cybersecurity services
                            to businesses across Nigeria and Africa.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            Zeplynk also operates <strong className="text-white">Zeplynk Academy</strong> — a developer
                            training programme based in Kaduna that offers coding bootcamps in web development,
                            backend engineering, and artificial intelligence. The Academy has trained over 100
                            Nigerian developers since its founding.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Zeplynk&apos;s mission is to build world-class digital infrastructure for Nigerian
                            and African businesses, and to train the next generation of Nigerian software engineers.
                            The company is headquartered in Kaduna, with active clients in Jos, Abuja, Lagos,
                            and across Nigeria.
                        </p>
                    </section>

                    {/* Company Fact Sheet */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8">Company Fact Sheet</h2>
                        <div className="rounded-3xl border border-white/10 overflow-hidden">
                            {facts.map((fact, i) => (
                                <div
                                    key={fact.label}
                                    className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 px-8 py-5 ${
                                        i % 2 === 0 ? "bg-zinc-900/40" : "bg-zinc-900/20"
                                    }`}
                                >
                                    <span className="text-gray-500 font-bold text-sm w-48 shrink-0">{fact.label}</span>
                                    <span className="text-white font-medium">{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logo Download */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8">Brand Assets</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-3xl bg-white flex flex-col items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/theLogo-removebg-preview.png"
                                    alt="Zeplynk Logo"
                                    className="h-16 object-contain"
                                />
                                <span className="text-black text-sm font-bold">Logo on White</span>
                            </div>
                            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 flex flex-col items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/theLogo-removebg-preview.png"
                                    alt="Zeplynk Logo"
                                    className="h-16 object-contain"
                                />
                                <span className="text-white text-sm font-bold">Logo on Dark</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            For high-resolution logo files, email{" "}
                            <a href="mailto:hello@zeplynk.com" className="text-zgreen-400 hover:text-zgreen-300 transition-colors">
                                hello@zeplynk.com
                            </a>
                        </p>
                    </section>

                    {/* Leadership */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8">Leadership</h2>
                        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 flex flex-col sm:flex-row gap-6 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-zgreen-600 flex items-center justify-center text-white text-2xl font-black shrink-0">
                                N
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Nash Ezekiel Pam</h3>
                                <p className="text-zgreen-400 font-bold text-sm mb-3">Founder &amp; CEO, Zeplynk</p>
                                <p className="text-gray-400 leading-relaxed">
                                    Nash Ezekiel Pam founded Zeplynk in Kaduna, Nigeria with the mission of
                                    building world-class tech infrastructure for African businesses and training
                                    the next generation of Nigerian software engineers. Under his leadership,
                                    Zeplynk has grown to serve clients across Nigeria and launched Zeplynk Academy,
                                    a developer training programme in northern Nigeria.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Media Contact */}
                    <section className="p-10 rounded-3xl bg-zgreen-600/10 border border-zgreen-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Media &amp; Press Enquiries</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            For interview requests, editorial features, story pitches, or any media enquiry,
                            please reach out directly. We typically respond within 24–48 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:hello@zeplynk.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-zgreen-600 hover:bg-zgreen-500 text-white font-bold rounded-xl transition-all"
                            >
                                ✉️ hello@zeplynk.com
                            </a>
                            <a
                                href="tel:+2348067263891"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-xl transition-all hover:bg-white/10"
                            >
                                📞 +234-806-726-3891
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
                            <Link href="/" className="hover:text-zgreen-400 transition-colors">Homepage</Link>
                            <Link href="/about" className="hover:text-zgreen-400 transition-colors">About Zeplynk</Link>
                            <Link href="/solutions" className="hover:text-zgreen-400 transition-colors">Our Services</Link>
                            <Link href="/academy" className="hover:text-zgreen-400 transition-colors">Zeplynk Academy</Link>
                            <Link href="/insights" className="hover:text-zgreen-400 transition-colors">Insights</Link>
                            <Link href="/kaduna" className="hover:text-zgreen-400 transition-colors">Zeplynk Kaduna</Link>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
