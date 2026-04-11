import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ZEPLYNK - Digital Engineering & AI Automation";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #000000, #111111)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    color: "white",
                    position: "relative",
                }}
            >
                {/* Abstract Background Element */}
                <div
                    style={{
                        position: "absolute",
                        top: "-200px",
                        left: "-200px",
                        width: "600px",
                        height: "600px",
                        background: "rgba(34, 197, 94, 0.15)", // zgreen ish
                        filter: "blur(120px)",
                        borderRadius: "50%",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-200px",
                        right: "-200px",
                        width: "600px",
                        height: "600px",
                        background: "rgba(168, 85, 247, 0.15)", // purple ish
                        filter: "blur(120px)",
                        borderRadius: "50%",
                    }}
                />

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 800,
                            letterSpacing: "-0.05em",
                            background: "linear-gradient(to right, #ffffff, #a1a1aa)",
                            backgroundClip: "text",
                            color: "transparent",
                            marginBottom: 20,
                        }}
                    >
                        ZEPLYNK
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                        }}
                    >
                        <div
                            style={{
                                padding: "8px 20px",
                                background: "rgba(34, 197, 94, 0.1)",
                                border: "1px solid rgba(34, 197, 94, 0.2)",
                                borderRadius: "999px",
                                fontSize: 24,
                                color: "#4ade80", // zgreen-400
                                fontWeight: 600,
                            }}
                        >
                            Link to Greatness
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: 40,
                            fontSize: 32,
                            color: "#71717a", // zinc-500
                            maxWidth: 800,
                            textAlign: "center",
                            lineHeight: 1.4,
                        }}
                    >
                        Web Engineering • AI Automation • Tech Academy
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
