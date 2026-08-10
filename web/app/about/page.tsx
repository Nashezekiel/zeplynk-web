import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
    description:
        "About Zeplynk: Tech solutions & education company founded in Kaduna, Nigeria by Nash Ezekiel Pam. Building world-class software & training Nigerian developers.",
    keywords: [
        "about Zeplynk",
        "tech company Kaduna Nigeria",
        "software company Nigeria",
        "tech education Nigeria",
        "Zeplynk story",
        "web development company Kaduna",
        "Nigerian tech founder",
        "Nash Ezekiel Pam",
        "tech startup Kaduna Nigeria",
        "northern Nigeria tech company",
    ],
    alternates: {
        canonical: "https://zeplynk.com/about",
    },
    openGraph: {
        title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
        description:
            "Zeplynk is a tech solutions and education company founded in Kaduna, Nigeria. Building world-class software and training Nigerian developers.",
        url: "https://zeplynk.com/about",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
        description:
            "Zeplynk is a tech solutions and education company founded in Kaduna, Nigeria. Building software and training developers across Nigeria.",
        images: ["/opengraph-image"],
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
            name: "About",
            item: "https://zeplynk.com/about",
        },
    ],
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <AboutContent />
        </>
    );
}
