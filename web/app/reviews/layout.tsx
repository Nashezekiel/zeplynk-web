import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reviews | Zeplynk",
    description:
        "Loved working with Zeplynk? Leave us a review on Google, follow us on social media, or share your experience directly with our team.",
    keywords: [
        "Zeplynk reviews",
        "Zeplynk testimonials",
        "review Zeplynk",
        "Zeplynk Google reviews",
        "Zeplynk feedback",
    ],
    alternates: {
        canonical: "https://zeplynk.com/reviews",
    },
    openGraph: {
        title: "Reviews | Zeplynk",
        description:
            "Loved working with Zeplynk? Leave us a review on Google, follow us on social media, or share your experience directly with our team.",
        url: "https://zeplynk.com/reviews",
        images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Reviews | Zeplynk",
        description: "Share your experience working with Zeplynk.",
        images: ["/opengraph-image"],
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
