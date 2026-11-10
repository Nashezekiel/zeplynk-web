import type { Metadata } from "next";
import { SITE, ACADEMY_REF, ACADEMY_ID, ORG_REF } from "@/lib/site";
import AcademyContent from "./AcademyContent";

export const metadata: Metadata = {
    title: "Tech Education & Coding Bootcamp in Nigeria | Zeplynk Academy",
    description:
        "Zeplynk Academy in Kaduna, Nigeria: leading coding bootcamp. Learn web development, backend engineering & AI from industry professionals. Become job-ready.",
    keywords: [
        "coding bootcamp Nigeria",
        "tech training Kaduna",
        "learn web development Nigeria",
        "tech education Kaduna Nigeria",
        "learn programming Nigeria",
        "coding bootcamp Kaduna",
        "Zeplynk Academy",
        "software engineering course Nigeria",
        "AI training Nigeria",
        "data science course Nigeria",
        "developer training northern Nigeria",
        "tech academy Kaduna",
    ],
    alternates: {
        canonical: `${SITE.url}/academy`,
    },
    openGraph: {
        title: "Tech Education & Coding Bootcamp in Nigeria | Zeplynk Academy",
        description:
            "Nigeria's leading coding bootcamp in Kaduna. Learn web development, backend engineering, and AI. Become a job-ready developer with Zeplynk Academy.",
        url: `${SITE.url}/academy`,
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Education & Coding Bootcamp in Nigeria | Zeplynk Academy",
        description:
            "Nigeria's leading coding bootcamp in Kaduna — web development, backend engineering, and AI training for Nigerian professionals.",
    },
};

const academySchema = [
    {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": ACADEMY_ID,
        name: "Zeplynk Academy",
        description: "Nigeria's leading tech education program based in Kaduna. Offering coding bootcamps in web development, backend engineering, and AI for Nigerian professionals.",
        url: `${SITE.url}/academy`,
        parentOrganization: ORG_REF,
        areaServed: ["Kaduna", "Jos", "Nigeria"],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Zeplynk Academy Courses",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: "Web Development Bootcamp Nigeria",
                        description: "Learn HTML, CSS, JavaScript, React, and Next.js. Build production-ready web applications and become a job-ready frontend developer in Nigeria.",
                        provider: ACADEMY_REF,
                        url: `${SITE.url}/academy`,
                        courseMode: ["onsite", "online"],
                        inLanguage: "en",
                        offers: { "@type": "Offer", priceCurrency: "NGN", availability: "https://schema.org/InStock" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: "Backend Engineering Course Nigeria",
                        description: "Master Node.js, databases, APIs, and server-side architecture. Build scalable backend systems for Nigerian and global businesses.",
                        provider: ACADEMY_REF,
                        url: `${SITE.url}/academy`,
                        courseMode: ["onsite", "online"],
                        inLanguage: "en",
                        offers: { "@type": "Offer", priceCurrency: "NGN", availability: "https://schema.org/InStock" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: "AI & Machine Learning Training Nigeria",
                        description: "Learn artificial intelligence, machine learning, and data science. Apply AI solutions to real Nigerian business problems.",
                        provider: ACADEMY_REF,
                        url: `${SITE.url}/academy`,
                        courseMode: ["onsite", "online"],
                        inLanguage: "en",
                        offers: { "@type": "Offer", priceCurrency: "NGN", availability: "https://schema.org/InStock" },
                    },
                },
            ],
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What courses does Zeplynk Academy offer?",
                acceptedAnswer: { "@type": "Answer", text: "Zeplynk Academy offers coding bootcamps in web development, backend engineering, and AI & machine learning. All programmes are available in-person in Kaduna and online across Nigeria." },
            },
            {
                "@type": "Question",
                name: "How long is the Zeplynk Academy coding bootcamp?",
                acceptedAnswer: { "@type": "Answer", text: "Programmes at Zeplynk Academy range from 3 to 6 months depending on the course. The web development bootcamp is 3 months, while backend and AI programmes run for 4 to 6 months." },
            },
            {
                "@type": "Question",
                name: "Is Zeplynk Academy available online in Nigeria?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Zeplynk Academy offers both in-person training in Kaduna and online programmes accessible from anywhere in Nigeria. All courses are taught in English." },
            },
            {
                "@type": "Question",
                name: "Do I need experience to join Zeplynk Academy?",
                acceptedAnswer: { "@type": "Answer", text: "No prior experience is required for our beginner programmes. Zeplynk Academy accepts complete beginners and provides everything needed to go from zero to job-ready developer." },
            },
            {
                "@type": "Question",
                name: "Where is Zeplynk Academy located?",
                acceptedAnswer: { "@type": "Answer", text: "Zeplynk Academy is based in Kaduna, Nigeria. We also serve students in Jos, Abuja, and across Nigeria through our online programmes." },
            },
        ],
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE.url}`,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Academy",
            item: `${SITE.url}/academy`,
        },
    ],
};

export default function AcademyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {academySchema.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <AcademyContent />
        </>
    );
}
