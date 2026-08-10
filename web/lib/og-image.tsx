export const ogImageSize = {
  width: 1200,
  height: 630,
};

type OgAccent = "green" | "purple" | "blue" | "amber" | "cyan" | "rose";

const ACCENTS: Record<OgAccent, { glow1: string; glow2: string; badgeBg: string; badgeBorder: string; badgeText: string }> = {
  green: {
    glow1: "rgba(34, 197, 94, 0.18)",
    glow2: "rgba(168, 85, 247, 0.12)",
    badgeBg: "rgba(34, 197, 94, 0.1)",
    badgeBorder: "rgba(34, 197, 94, 0.25)",
    badgeText: "#4ade80",
  },
  purple: {
    glow1: "rgba(168, 85, 247, 0.2)",
    glow2: "rgba(99, 102, 241, 0.14)",
    badgeBg: "rgba(168, 85, 247, 0.1)",
    badgeBorder: "rgba(168, 85, 247, 0.25)",
    badgeText: "#c084fc",
  },
  blue: {
    glow1: "rgba(59, 130, 246, 0.2)",
    glow2: "rgba(34, 197, 94, 0.1)",
    badgeBg: "rgba(59, 130, 246, 0.1)",
    badgeBorder: "rgba(59, 130, 246, 0.25)",
    badgeText: "#60a5fa",
  },
  amber: {
    glow1: "rgba(255, 193, 7, 0.2)",
    glow2: "rgba(34, 197, 94, 0.1)",
    badgeBg: "rgba(255, 193, 7, 0.12)",
    badgeBorder: "rgba(255, 193, 7, 0.3)",
    badgeText: "#facc15",
  },
  cyan: {
    glow1: "rgba(34, 211, 238, 0.2)",
    glow2: "rgba(34, 197, 94, 0.12)",
    badgeBg: "rgba(34, 211, 238, 0.1)",
    badgeBorder: "rgba(34, 211, 238, 0.25)",
    badgeText: "#22d3ee",
  },
  rose: {
    glow1: "rgba(244, 63, 94, 0.18)",
    glow2: "rgba(59, 130, 246, 0.12)",
    badgeBg: "rgba(244, 63, 94, 0.1)",
    badgeBorder: "rgba(244, 63, 94, 0.25)",
    badgeText: "#fb7185",
  },
};

export function ogImageElement({
  badge,
  heading,
  tagline,
  accent = "green",
}: {
  badge: string;
  heading: string;
  tagline: string;
  accent?: OgAccent;
}) {
  const c = ACCENTS[accent];

  return (
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
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          background: c.glow1,
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
          background: c.glow2,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10, padding: "0 80px" }}>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            marginBottom: 28,
          }}
        >
          ZEPLYNK
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            background: "linear-gradient(to right, #ffffff, #a1a1aa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          {heading}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            background: c.badgeBg,
            border: `1px solid ${c.badgeBorder}`,
            borderRadius: "999px",
            fontSize: 22,
            color: c.badgeText,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          {badge}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: 820,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>
      </div>
    </div>
  );
}
