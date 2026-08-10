import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Tech Services Nigeria | Zeplynk Web Development & AI Solutions",
    description:
        "Zeplynk tech services in Nigeria: web development, AI automation, system architecture & digital transformation. Expert partner for custom software across Africa.",
    keywords: [
        "Zeplynk services",
        "tech services Nigeria",
        "Zeplynk web development",
        "AI consulting Africa",
        "Zeplynk custom software",
        "tech consulting Nigeria",
        "digital transformation services Africa",
        "system architecture Nigeria",
        "mobile app development Nigeria",
        "API development Nigeria",
        "cloud solutions Nigeria",
        "enterprise software Nigeria",
        "tech solutions Lagos",
        "software integration Nigeria",
        "business automation Africa"
    ],
    alternates: {
        canonical: "https://zeplynk.com/services",
    },
    openGraph: {
        title: "Complete Tech Services Nigeria | Web Development & AI Solutions | Zeplynk",
        description:
            "Zeplynk tech services in Nigeria: custom web development, AI automation, system architecture, and digital transformation for businesses across Africa.",
        url: "https://zeplynk.com/services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete Tech Services Nigeria | Zeplynk",
        description:
            "Zeplynk web development, AI automation, system architecture & tech consulting for businesses across Nigeria and Africa.",
    },
};

const breadcrumbSchema = {
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
            name: "Services",
            item: "https://zeplynk.com/services",
        },
    ],
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServicesContent />
        </>
    );
}
