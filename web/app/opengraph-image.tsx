import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk — Web Engineering, AI Automation & Tech Academy";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Link to Greatness",
            heading: "Zeplynk",
            tagline: "Web Engineering • AI Automation • Tech Academy",
            accent: "green",
        }),
        { ...size }
    );
}
