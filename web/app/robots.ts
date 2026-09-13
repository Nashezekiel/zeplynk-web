import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://zeplynk.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/api", "/register"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
