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
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy | Zeplynk",
        description: "Zeplynk privacy policy — your data security and privacy rights.",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
