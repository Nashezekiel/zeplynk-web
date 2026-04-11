import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Complete Tech Services Nigeria | Web Development & AI Solutions | Zeplynk",
    description:
        "Comprehensive tech services in Nigeria: custom web development, AI automation, system architecture, and digital transformation. Expert solutions for businesses across Africa.",
    keywords: [
        "tech services Nigeria",
        "web development services Nigeria",
        "AI consulting Africa",
        "custom software development Nigeria",
        "tech consulting Nigeria",
        "Zeplynk services",
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
            "Comprehensive tech services in Nigeria: custom web development, AI automation, system architecture, and digital transformation for businesses across Africa.",
        url: "https://zeplynk.com/services",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Zeplynk Tech Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete Tech Services Nigeria | Zeplynk",
        description:
            "Web development, AI automation, system architecture & tech consulting for businesses across Nigeria and Africa.",
        images: ["/opengraph-image.png"],
    },
};

export default function ServicesPage() {
    return <ServicesContent />;
}
