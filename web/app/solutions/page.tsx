import type { Metadata } from "next";
import SolutionsPageContent from "./SolutionsPageContent";

export const metadata: Metadata = {
    title: "Software Development & AI Automation Services Nigeria | Zeplynk",
    description:
        "Zeplynk delivers world-class software development, AI automation, cloud infrastructure, and cybersecurity services to businesses in Nigeria and Africa. Zeplynk is based in Kaduna, serving clients nationwide.",
    keywords: [
        "Zeplynk software development",
        "software development Nigeria",
        "Zeplynk AI automation",
        "AI automation Nigeria",
        "web development company Nigeria",
        "cloud infrastructure Nigeria",
        "cybersecurity Nigeria",
        "Zeplynk Next.js development",
        "SaaS development Nigeria",
        "API development Nigeria",
        "software company Kaduna",
        "enterprise software Nigeria",
        "AI chatbot Nigeria",
        "Zeplynk tech solutions",
    ],
    alternates: {
        canonical: "https://zeplynk.com/solutions",
    },
    openGraph: {
        title: "Software Development & AI Automation Services Nigeria | Zeplynk",
        description:
            "Zeplynk delivers world-class software development, AI automation, cloud infrastructure, and cybersecurity services for Nigerian businesses from Kaduna.",
        url: "https://zeplynk.com/solutions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development & AI Automation Services Nigeria | Zeplynk",
        description:
            "Software development, AI automation, cloud & cybersecurity services for Nigerian businesses — Zeplynk, Kaduna.",
    },
};

const solutionsFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does web development cost in Nigeria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Web development costs in Nigeria vary depending on complexity. A basic business website starts from ₦150,000. A custom web application or e-commerce platform typically ranges from ₦500,000 to ₦2,000,000+. Zeplynk provides a free consultation and tailored quote for every project.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to build a website in Nigeria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A simple website takes 1–2 weeks. A custom web application or SaaS product typically takes 4–12 weeks depending on features. Zeplynk provides a detailed project timeline during the initial strategy call.",
            },
        },
        {
            "@type": "Question",
            name: "What AI automation services does Zeplynk offer in Nigeria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Zeplynk offers AI chatbot development, workflow automation, generative AI integration, computer vision systems, and AI consulting for Nigerian businesses. We help companies reduce manual processes and scale operations using intelligent automation.",
            },
        },
        {
            "@type": "Question",
            name: "Does Zeplynk work with small businesses in Nigeria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Zeplynk works with businesses of all sizes in Nigeria — from startups and SMEs to large enterprises. We offer scalable solutions designed to grow with your business, with packages suited to different budgets.",
            },
        },
        {
            "@type": "Question",
            name: "Where is Zeplynk based in Nigeria?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Zeplynk is headquartered in Kaduna, Nigeria, and also serves clients in Jos, Abuja, Lagos, and across Nigeria. We work with clients remotely across Africa and globally.",
            },
        },
    ],
};

export default function SolutionsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsFaqSchema) }}
            />
            <SolutionsPageContent />
        </>
    );
}
