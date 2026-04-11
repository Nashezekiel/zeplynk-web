import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us — Get in Touch",
    description:
        "Reach out to Zeplynk to start your web engineering or AI project, book a free strategy call, or enquire about our tech training programmes.",
    keywords: [
        "contact Zeplynk",
        "hire web developer Nigeria",
        "AI consulting Nigeria",
        "tech strategy call",
        "Zeplynk contact",
        "software project Nigeria",
    ],
    alternates: {
        canonical: "https://zeplynk.com/contact",
    },
    openGraph: {
        title: "Contact Zeplynk — Get in Touch",
        description:
            "Start your web engineering or AI project, book a free strategy call, or enquire about our tech training programmes.",
        url: "https://zeplynk.com/contact",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Zeplynk — Get in Touch",
        description:
            "Start a web or AI project, book a strategy call, or enquire about tech training with Zeplynk.",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
