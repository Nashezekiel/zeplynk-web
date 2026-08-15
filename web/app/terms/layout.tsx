import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Zeplynk",
    description:
        "Zeplynk terms of service — the terms and conditions that govern use of our website, tech solutions, and Zeplynk Academy programs.",
    alternates: {
        canonical: "https://zeplynk.com/terms",
    },
    openGraph: {
        title: "Terms of Service | Zeplynk",
        description:
            "The terms and conditions that govern use of Zeplynk's website, tech solutions, and Zeplynk Academy programs.",
        url: "https://zeplynk.com/terms",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary",
        title: "Terms of Service | Zeplynk",
        description: "Zeplynk terms of service — terms and conditions for our website and services.",
        images: ["/opengraph-image"],
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
