import type { Metadata } from "next";
import AcademyContent from "./AcademyContent";

export const metadata: Metadata = {
    title: "Zeplynk Academy — Tech Education & Corporate Training",
    description:
        "Join Zeplynk Academy to master in-demand tech skills — software engineering, AI, data science, and more. Corporate training programmes also available for teams across Nigeria.",
    keywords: [
        "tech training Nigeria",
        "coding bootcamp Nigeria",
        "software engineering courses Africa",
        "Zeplynk Academy",
        "corporate tech training Nigeria",
        "AI training Nigeria",
        "data science course Nigeria",
    ],
    alternates: {
        canonical: "https://zeplynk.com/academy",
    },
    openGraph: {
        title: "Zeplynk Academy — Tech Education & Corporate Training",
        description:
            "Master in-demand tech skills with Zeplynk Academy. Software engineering, AI, and data science courses plus corporate training across Nigeria.",
        url: "https://zeplynk.com/academy",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zeplynk Academy — Tech Education & Corporate Training",
        description:
            "Master tech skills with Zeplynk Academy — courses in software engineering, AI, data science and corporate training across Nigeria.",
    },
};

export default function AcademyPage() {
    return <AcademyContent />;
}
