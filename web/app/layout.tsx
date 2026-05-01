import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeaderBar from "@/components/layout/HeaderBar";
import ZepBot from "@/components/ui/ZepBot";
import { PerformanceMonitor } from "@/components/ui/PerformanceMonitor";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const BASE_URL = "https://zeplynk.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Zeplynk",
    default: "Zeplynk — Web Engineering, AI Automation & Tech Academy",
  },
  description:
    "Zeplynk delivers world-class web engineering, AI automation solutions, and tech education to transform businesses and careers across Nigeria and Africa.",
  keywords: [
    "web development Nigeria",
    "AI automation Nigeria",
    "tech training Nigeria",
    "software engineering Africa",
    "Zeplynk",
    "Next.js development",
    "AI chatbot development",
    "tech academy Nigeria",
    "digital transformation Africa",
    "software company Nigeria",
  ],
  authors: [{ name: "Zeplynk", url: BASE_URL }],
  creator: "Zeplynk",
  publisher: "Zeplynk",
  alternates: {
    canonical: BASE_URL,
  },
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
    url: BASE_URL,
    siteName: "Zeplynk",
    title: "Zeplynk — Web Engineering, AI Automation & Tech Academy",
    description:
      "Zeplynk delivers world-class web engineering, AI automation solutions, and tech education to transform businesses and careers across Nigeria and Africa.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zeplynk — Link to Greatness in Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeplynk — Web Engineering, AI Automation & Tech Academy",
    description:
      "World-class web engineering, AI automation & tech education across Nigeria and Africa.",
    images: ["/opengraph-image.png"],
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zeplynk",
    url: BASE_URL,
    logo: `${BASE_URL}/theLogo-removebg-preview.png`,
    description:
      "Zeplynk is a Nigerian technology company specialising in web engineering, AI automation, and tech education.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-806-726-3891",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/zeplynk",
      "https://twitter.com/zeplynk",
      "https://www.instagram.com/zeplynk",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Nigeria",
    },
    areaServed: ["NG", "ZA", "KE", "GH", "EG"], // Major African markets
    knowsAbout: ["Web Development", "AI Automation", "Tech Education", "Software Engineering"],
    serviceType: ["Web Engineering", "AI Solutions", "Tech Training"],
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Zeplynk - Web Engineering, AI Automation & Tech Academy",
    description: "World-class web engineering, AI automation solutions, and tech education for businesses and careers across Nigeria and Africa.",
    url: BASE_URL,
    mainEntity: organizationJsonLd,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Engineering & AI Automation Services",
    description: "Comprehensive web development, AI automation, and tech consulting services for businesses across Africa",
    provider: organizationJsonLd,
    serviceType: ["Web Development", "AI Automation", "Software Engineering", "Tech Consulting"],
    areaServed: ["Nigeria", "South Africa", "Kenya", "Ghana", "Egypt"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zeplynk Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Engineering Services",
            description: "Custom web application development using modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation Solutions",
            description: "AI-powered workflow automation and intelligent systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tech Education & Training",
            description: "Professional tech training and corporate education programs",
          },
        },
      ],
    },
  };

  const educationalOrganizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Zeplynk Academy",
    description: "Leading tech academy in Nigeria offering software engineering, AI, and data science courses",
    url: `${BASE_URL}/academy`,
    parentOrganization: organizationJsonLd,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tech Courses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Software Engineering",
            description: "Comprehensive software development training",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "AI & Machine Learning",
            description: "Artificial intelligence and ML training programs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Data Science",
            description: "Data analysis and science training",
          },
        },
      ],
    },
  };

  const allSchemas = [organizationJsonLd, webpageJsonLd, serviceJsonLd, educationalOrganizationJsonLd];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {allSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${plusJakartaSans.variable} font-sans`} suppressHydrationWarning>
        <Providers>
          <HeaderBar />
          <Navbar />
          {children}
          <Footer />
          <ZepBot />
          <PerformanceMonitor />
        </Providers>
      </body>
    </html>
  );
}
