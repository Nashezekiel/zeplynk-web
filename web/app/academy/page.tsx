import type { Metadata } from "next";
import AcademyContent from "./AcademyContent";

export const metadata: Metadata = {
    title: "Zeplynk Academy — Premier Tech Education & Training",
    description:
        "Join Zeplynk Academy to master in-demand tech skills. We offer premier tech education, software engineering, AI, data science, and corporate tech solutions across Nigeria.",
    keywords: [
        "tech education programs",
        "learn tech skills",
        "technology academy",
        "tech training Nigeria",
        "coding bootcamp Nigeria",
        "software engineering courses Africa",
        "Zeplynk Academy",
        "corporate tech solutions Nigeria",
        "AI training Nigeria",
        "data science course Nigeria",
    ],
    alternates: {
        canonical: "https://zeplynk.com/academy",
    },
    openGraph: {
        title: "Zeplynk Academy — Premier Tech Education & Training",
        description:
            "Master in-demand tech skills with Zeplynk Academy. Premier tech education in software engineering, AI, and data science plus corporate training across Nigeria.",
        url: "https://zeplynk.com/academy",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zeplynk Academy — Premier Tech Education & Training",
        description:
            "Master tech skills with Zeplynk Academy — premier tech education in software engineering, AI, data science and corporate tech solutions.",
    },
};

export default function AcademyPage() {
    return <AcademyContent />;
}
