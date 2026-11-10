import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import InsightsPageContent from "./InsightsPageContent";
import { getAllNews } from "@/lib/news-store";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses",
    description:
        "The Zeplynk blog covers web development, AI automation, software engineering, and digital transformation for Nigerian businesses. Practical insights from our Kaduna engineering team.",
    keywords: [
        "tech blog Nigeria",
        "web development blog Nigeria",
        "AI insights Nigeria",
        "software engineering Nigeria blog",
        "digital transformation Nigeria",
        "tech news Kaduna",
        "Nigerian tech insights",
        "web development tips Nigeria",
        "AI automation blog Africa",
        "Zeplynk insights",
    ],
    alternates: {
        canonical: `${SITE.url}/insights`,
    },
    openGraph: {
        title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses | Zeplynk",
        description:
            "Practical web development and AI insights for Nigerian businesses from the Zeplynk engineering team in Kaduna.",
        url: `${SITE.url}/insights`,
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses | Zeplynk",
        description:
            "Web dev, AI automation & software engineering insights for Nigerian businesses — from Zeplynk, Kaduna.",
        images: ["/opengraph-image"],
    },
};

export default async function InsightsPage() {
    const items = await getAllNews();
    return <InsightsPageContent items={items} />;
}
