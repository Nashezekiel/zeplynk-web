import type { Metadata } from "next";
import IndustriesPageContent from "./IndustriesPageContent";

export const metadata: Metadata = {
    title: "Industries We Serve — Fintech, Healthcare, Education | Zeplynk",
    description:
        "Zeplynk builds industry-specific tech solutions for recruitment, startups, e-commerce, education, and SMEs across Nigeria. Custom software engineering from our Kaduna headquarters.",
    keywords: [
        "tech solutions for Nigerian businesses",
        "software development Nigeria industries",
        "fintech software Nigeria",
        "e-commerce development Nigeria",
        "EdTech software Nigeria",
        "SaaS development Nigeria",
        "enterprise software Kaduna",
        "startup software development Nigeria",
        "HR software Nigeria",
        "SME tech solutions Nigeria",
    ],
    alternates: {
        canonical: "https://zeplynk.com/industries",
    },
    openGraph: {
        title: "Industries We Serve — Fintech, Healthcare, Education | Zeplynk",
        description:
            "Zeplynk builds industry-specific tech solutions for Nigerian businesses — recruitment, startups, e-commerce, education, and SMEs. Custom software from Kaduna.",
        url: "https://zeplynk.com/industries",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Industries We Serve — Fintech, Healthcare, Education | Zeplynk",
        description:
            "Zeplynk delivers custom software for Nigerian industries — startups, e-commerce, fintech, education & SMEs.",
        images: ["/opengraph-image"],
    },
};

export default function IndustriesPage() {
    return <IndustriesPageContent />;
}
