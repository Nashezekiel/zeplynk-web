import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register for Zeplynk Academy | Start Your Tech Journey",
    description:
        "Register for Zeplynk Academy — Nigeria's coding bootcamp in Kaduna. Enrol in web development, backend engineering, or AI courses with Zeplynk today.",
    keywords: [
        "register Zeplynk Academy",
        "Zeplynk Academy registration",
        "coding bootcamp enrolment Nigeria",
        "Zeplynk tech courses",
    ],
    alternates: {
        canonical: "https://zeplynk.com/register",
    },
    openGraph: {
        title: "Register for Zeplynk Academy | Start Your Tech Journey",
        description:
            "Enrol in Zeplynk Academy — web development, backend engineering, and AI courses in Kaduna, Nigeria.",
        url: "https://zeplynk.com/register",
        images: [{ url: "/academy/opengraph-image", width: 1200, height: 630, alt: "Zeplynk Academy — Launch Your Tech Career" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Register for Zeplynk Academy",
        description: "Start your tech journey with Zeplynk Academy in Kaduna, Nigeria.",
        images: ["/academy/opengraph-image"],
    },
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
