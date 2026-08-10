import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk — AI Services & Automation Nigeria";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "AI & Automation Solutions",
            heading: "Intelligent Systems That Think & Execute",
            tagline: "Machine learning, chatbot development & LLM integration for African businesses",
            accent: "purple",
        }),
        { ...size }
    );
}
