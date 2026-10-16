import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk Google Business Profile Management";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Google Business Profile",
            heading: "Is Your Business Visible on Google?",
            tagline: "We manage your profile so customers can find, trust and contact you. Free profile check on WhatsApp.",
            accent: "green",
        }),
        { ...size }
    );
}
