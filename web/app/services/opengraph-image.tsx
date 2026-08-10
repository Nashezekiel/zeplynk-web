import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk — Tech Services Nigeria";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Complete Tech Services",
            heading: "Web Development & AI Solutions",
            tagline: "System architecture, digital transformation & custom software across Africa",
            accent: "cyan",
        }),
        { ...size }
    );
}
