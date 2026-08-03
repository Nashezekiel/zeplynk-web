import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Zeplynk — Tech Solutions in Kaduna & Jos Nigeria",
    description:
        "Contact Zeplynk to start your web development or AI automation project in Nigeria. Book a free strategy call or enquire about tech training in Kaduna and Jos.",
    keywords: [
        "contact Zeplynk",
        "hire web developer Kaduna",
        "hire web developer Nigeria",
        "AI consulting Nigeria",
        "tech company Kaduna contact",
        "web development Jos Nigeria",
        "tech strategy call Nigeria",
        "Zeplynk contact",
        "software project Nigeria",
        "tech solutions Kaduna contact",
    ],
    alternates: {
        canonical: "https://zeplynk.com/contact",
    },
    openGraph: {
        title: "Contact Zeplynk — Tech Solutions in Kaduna & Jos Nigeria",
        description:
            "Start your web development or AI project in Nigeria. Book a free strategy call with Zeplynk — based in Kaduna, serving all of Nigeria.",
        url: "https://zeplynk.com/contact",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Zeplynk — Tech Solutions in Kaduna & Jos Nigeria",
        description:
            "Start a web or AI project, book a strategy call, or enquire about tech training with Zeplynk in Kaduna, Nigeria.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zeplynk.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://zeplynk.com/contact",
        },
    ],
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ContactContent />
        </>
    );
}
