import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk — Web Engineering Services Nigeria";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Web Engineering",
            heading: "Scalable Web Applications, Built Right",
            tagline: "Custom Next.js & React development for businesses across Nigeria and Africa",
            accent: "blue",
        }),
        { ...size }
    );
}
