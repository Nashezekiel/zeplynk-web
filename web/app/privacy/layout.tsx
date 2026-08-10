import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Zeplynk",
    description:
        "Zeplynk privacy policy — how we protect your personal information, data security measures, and your rights regarding data usage at Zeplynk in Nigeria.",
    alternates: {
        canonical: "https://zeplynk.com/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Zeplynk",
        description:
            "How Zeplynk protects your personal information and data security. Read our privacy policy.",
        url: "https://zeplynk.com/privacy",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy | Zeplynk",
        description: "Zeplynk privacy policy — your data security and privacy rights.",
        images: ["/opengraph-image"],
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
