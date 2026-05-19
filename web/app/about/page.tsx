import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
    title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
    description:
        "Learn about Zeplynk — a tech solutions and education company founded in Kaduna, Nigeria by Nash Ezekiel Pam. On a mission to build world-class software and train the next generation of Nigerian developers.",
    keywords: [
        "about Zeplynk",
        "tech company Kaduna Nigeria",
        "software company Nigeria",
        "tech education Nigeria",
        "Zeplynk story",
        "web development company Kaduna",
        "Nigerian tech founder",
        "Nash Ezekiel Pam",
        "tech startup Kaduna Nigeria",
        "northern Nigeria tech company",
    ],
    alternates: {
        canonical: "https://zeplynk.com/about",
    },
    openGraph: {
        title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
        description:
            "Zeplynk is a tech solutions and education company founded in Kaduna, Nigeria. Building world-class software and training Nigerian developers.",
        url: "https://zeplynk.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Zeplynk — Tech Company Founded in Kaduna, Nigeria",
        description:
            "Tech solutions and education company founded in Kaduna, Nigeria. Building software and training developers across Nigeria.",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
