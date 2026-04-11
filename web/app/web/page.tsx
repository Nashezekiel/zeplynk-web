import type { Metadata } from "next";
import WebContent from "./WebContent";

export const metadata: Metadata = {
    title: "Web Engineering Services Nigeria | Custom Web Development | Zeplynk",
    description: "Expert web engineering services in Nigeria. Build scalable, high-performance web applications with Next.js, React, and modern technologies. Custom solutions for businesses across Africa.",
    keywords: [
        "web engineering Nigeria",
        "custom web development Nigeria",
        "Next.js development Nigeria",
        "React development Africa",
        "web application development Lagos",
        "e-commerce development Nigeria",
        "progressive web apps Nigeria",
        "responsive web design Nigeria",
        "web performance optimization Nigeria",
        "Zeplynk web services",
        "software development company Nigeria",
        "web solutions Africa",
        "enterprise web development Nigeria"
    ],
    alternates: {
        canonical: "https://zeplynk.com/web",
    },
    openGraph: {
        title: "Web Engineering Services Nigeria | Custom Web Development | Zeplynk",
        description: "Expert web engineering services in Nigeria. Build scalable, high-performance web applications with Next.js, React, and modern technologies.",
        url: "https://zeplynk.com/web",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Zeplynk Web Engineering Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Engineering Services Nigeria | Zeplynk",
        description: "Expert web development services in Nigeria. Build scalable, high-performance web applications with modern technologies.",
        images: ["/opengraph-image.png"],
    },
};

export default function WebPage() {
    return <WebContent />;
}
