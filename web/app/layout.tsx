import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeaderBar from "@/components/layout/HeaderBar";
import { SiteSchema } from "@/components/SiteSchema";
import { SITE } from "@/lib/site";


const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Zeplynk",
    default: "Zeplynk | AI Automation & Custom Software Development, Kaduna Nigeria",
  },
  description: SITE.description,
  keywords: [
    "tech solutions Nigeria",
    "tech education Nigeria",
    "technology company Nigeria",
    "tech consulting Nigeria",
    "web development company Nigeria",
    "AI automation Nigeria",
    "tech training Nigeria",
    "software engineering Nigeria",
    "Zeplynk",
    "Next.js agency Nigeria",
    "AI chatbot development Nigeria",
    "coding bootcamp Nigeria",
    "tech company Kaduna",
    "web development Kaduna",
    "tech training Kaduna",
    "software company Jos Nigeria",
    "digital transformation Nigeria",
    "tech solutions Kaduna Nigeria",
    "northern Nigeria tech company",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: "Zeplynk",
  publisher: "Zeplynk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Zeplynk",
    title: "Zeplynk — Web Engineering, AI Automation & Tech Academy",
    description:
      "Zeplynk provides comprehensive tech solutions and premier tech education. We deliver world-class web engineering and AI automation to transform businesses and careers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeplynk — Web Engineering, AI Automation & Tech Academy",
    description:
      "World-class web engineering, AI automation & tech education across Nigeria and Africa.",
    creator: "@zeplynk",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  verification: {
    google: "D0pO1p7_Xcq_k1a8CajDzEjvQDgo2L4dJff7SfkAGt4", // Add your Google Search Console verification token here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SiteSchema />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans`} suppressHydrationWarning>
        <Providers>
          <HeaderBar />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
