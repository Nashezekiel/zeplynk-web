import { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news-store";
import { courses } from "@/lib/courses-data";
import { aiPages } from "@/lib/ai-pages-data";
import { industries } from "@/lib/industries-data";
import { solutions } from "@/lib/solutions-data";
import { absoluteUrl } from "@/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

// Update by hand when page content actually changes. A build timestamp on every
// URL tells Google nothing, so it ignores the field.
const STATIC_UPDATED = new Date("2026-10-21");

const staticPages: [path: string, priority: number, freq: Freq][] = [
    ["", 1.0, "monthly"],
    ["/solutions", 1.0, "monthly"],
    ["/academy", 1.0, "weekly"],
    ["/ai", 0.8, "monthly"],
    ["/google-business-profile", 0.9, "monthly"],
    ["/work", 0.8, "monthly"],
    ["/industries", 0.7, "monthly"],
    ["/insights", 0.8, "weekly"],
    ["/news", 0.7, "weekly"],
    ["/about", 0.7, "yearly"],
    ["/contact", 0.6, "yearly"],
    ["/reviews", 0.6, "monthly"],
    // Press page helps AI/LLM entity recognition
    ["/press", 0.6, "monthly"],
    // Location landing pages, critical for local SEO
    ["/kaduna", 0.9, "monthly"],
    ["/jos", 0.8, "monthly"],
    ["/abuja", 0.8, "monthly"],
    ["/lagos", 0.8, "monthly"],
    ["/privacy", 0.3, "yearly"],
    ["/terms", 0.3, "yearly"],
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const newsItems = await getAllNews();

    const page = (path: string, priority: number, changeFrequency: Freq, lastModified = STATIC_UPDATED) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency,
        priority,
    });

    return [
        ...staticPages.map(([path, priority, freq]) => page(path, priority, freq)),
        ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.9, "monthly")),
        ...industries.map((i) => page(`/industries/${i.slug}`, 0.85, "monthly")),
        ...courses.map((c) => page(`/academy/${c.slug}`, 0.85, "monthly")),
        ...aiPages.map((p) => page(`/ai/${p.slug}`, 0.85, "monthly")),
        ...newsItems.map((n) => page(`/news/${n.slug}`, 0.6, "monthly", new Date(n.date))),
    ];
}
