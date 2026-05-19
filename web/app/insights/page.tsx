import type { Metadata } from "next";
import InsightsPageContent from "./InsightsPageContent";

export const metadata: Metadata = {
    title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses | Zeplynk",
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
        canonical: "https://zeplynk.com/insights",
    },
    openGraph: {
        title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses | Zeplynk",
        description:
            "Practical web development and AI insights for Nigerian businesses from the Zeplynk engineering team in Kaduna.",
        url: "https://zeplynk.com/insights",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Blog — Web Dev & AI Insights for Nigerian Businesses | Zeplynk",
        description:
            "Web dev, AI automation & software engineering insights for Nigerian businesses — from Zeplynk, Kaduna.",
    },
};

export default function InsightsPage() {
    return <InsightsPageContent />;
}
