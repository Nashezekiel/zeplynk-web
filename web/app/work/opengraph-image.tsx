import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk Client Projects — Portfolio & Case Studies";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Client Portfolio",
            heading: "Work We're Proud Of",
            tagline: "Real platforms built for real businesses, from satellite internet to enterprise AI",
            accent: "rose",
        }),
        { ...size }
    );
}
