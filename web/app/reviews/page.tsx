import type { Metadata } from "next";
import ReviewsPageContent from "./ReviewsPageContent";

export const metadata: Metadata = {
    title: "Client Reviews — Zeplynk Tech Solutions Nigeria",
    description:
        "Read what Zeplynk clients say about our web development, AI automation, and tech education services in Nigeria. Leave a Google review or send us your feedback directly.",
    keywords: [
        "Zeplynk reviews",
        "Zeplynk client testimonials",
        "web development Nigeria reviews",
        "AI automation Nigeria reviews",
        "tech company Kaduna reviews",
        "Zeplynk Google reviews",
        "software company Nigeria testimonials",
    ],
    alternates: {
        canonical: "https://zeplynk.com/reviews",
    },
    openGraph: {
        title: "Client Reviews — Zeplynk Tech Solutions Nigeria",
        description:
            "See what Nigerian businesses and startups say about working with Zeplynk — web development, AI automation, and tech education in Kaduna.",
        url: "https://zeplynk.com/reviews",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk Client Reviews" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Client Reviews — Zeplynk Tech Solutions Nigeria",
        description:
            "Read reviews from Nigerian businesses who've worked with Zeplynk on web, AI, and software projects.",
        images: ["/opengraph-image"],
    },
};

const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zeplynk",
    url: "https://zeplynk.com",
    telephone: "+234-806-726-3891",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kaduna",
        addressRegion: "Kaduna State",
        addressCountry: "NG",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "50",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://zeplynk.com" },
        { "@type": "ListItem", position: 2, name: "Reviews", item: "https://zeplynk.com/reviews" },
    ],
};

export default function ReviewsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ReviewsPageContent />
        </>
    );
}
