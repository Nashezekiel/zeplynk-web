import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zeplynk News & Insights | Engineering Blog Nigeria",
    description:
        "Latest news and insights from Zeplynk — deep-dives into web development, AI automation, and digital infrastructure for Nigerian businesses.",
    keywords: [
        "Zeplynk news",
        "Zeplynk blog",
        "tech insights Nigeria",
        "Zeplynk engineering blog",
    ],
    alternates: {
        canonical: "https://zeplynk.com/news",
    },
    openGraph: {
        title: "Zeplynk News & Insights | Engineering Blog Nigeria",
        description:
            "Engineering insights from Zeplynk — web development, AI automation, and digital infrastructure for Nigerian businesses.",
        url: "https://zeplynk.com/news",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Zeplynk News & Insights",
        description: "Latest engineering insights from Zeplynk in Kaduna, Nigeria.",
        images: ["/opengraph-image"],
    },
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
