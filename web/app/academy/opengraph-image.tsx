import { ImageResponse } from "next/og";
import { ogImageElement, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";

export const alt = "Zeplynk Academy — Tech Courses & Corporate Training";
export const size = ogImageSize;
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        ogImageElement({
            badge: "Zeplynk Academy",
            heading: "Launch Your Tech Career",
            tagline: "Coding bootcamps & corporate training programs in Kaduna, Nigeria",
            accent: "amber",
        }),
        { ...size }
    );
}
