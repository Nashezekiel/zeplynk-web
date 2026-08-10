import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk — Software Development & AI Automation Services Nigeria";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Full-Stack Solutions",
            heading: "Software Development & AI Automation",
            tagline: "End-to-end tech solutions for businesses across Nigeria and Africa",
            accent: "green",
        }),
        { ...size }
    );
}
