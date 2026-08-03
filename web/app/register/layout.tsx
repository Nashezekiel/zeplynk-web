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
    },
    twitter: {
        card: "summary",
        title: "Register for Zeplynk Academy",
        description: "Start your tech journey with Zeplynk Academy in Kaduna, Nigeria.",
    },
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
