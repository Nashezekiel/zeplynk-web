import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Us — Our Mission & Story",
    description:
        "Learn about Zeplynk — Nigeria's technology engineering and education company on a mission to democratise access to tech skills and world-class digital solutions across Africa.",
    keywords: [
        "about Zeplynk",
        "tech company Nigeria",
        "software company Africa",
        "tech education Nigeria",
        "Zeplynk story",
        "web engineering company Africa",
    ],
    alternates: {
        canonical: "https://zeplynk.com/about",
    },
    openGraph: {
        title: "About Zeplynk — Our Mission & Story",
        description:
            "Nigeria's technology engineering and education company, democratising access to world-class digital solutions across Africa.",
        url: "https://zeplynk.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Zeplynk — Our Mission & Story",
        description:
            "Nigeria's technology engineering and education company democratising digital solutions across Africa.",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
