import { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news-store";
import { courses } from "@/lib/courses-data";
import { aiPages } from "@/lib/ai-pages-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://zeplynk.com";
    const newsItems = await getAllNews();

    const newsRoutes: MetadataRoute.Sitemap = newsItems.map((item) => ({
        url: `${baseUrl}/news/${item.slug}`,
        lastModified: new Date(item.date),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
        url: `${baseUrl}/academy/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
    }));

    const aiRoutes: MetadataRoute.Sitemap = aiPages.map((page) => ({
        url: `${baseUrl}/ai/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/ai`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/academy`,
            lastModified: new Date(),
            changeFrequency: "weekly", // Academy might change more often
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/register`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/industries/hr-recruitment`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/industries/startups-saas`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/industries/ecommerce`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/industries/education`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/industries/sme-corporate`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/news`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/solutions/web-engineering`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/ai-automation`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/mobile-apps`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/backend-api`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/enterprise-digitization`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/cloud-devops`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/ui-ux-design`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/data-bi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/cybersecurity`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/tech-education`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reviews`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        // Location landing pages — critical for local SEO
        {
            url: `${baseUrl}/kaduna`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/jos`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/abuja`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/lagos`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // Press page — helps AI/LLM entity recognition
        {
            url: `${baseUrl}/press`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        ...newsRoutes,
        ...courseRoutes,
        ...aiRoutes,
    ];
}
