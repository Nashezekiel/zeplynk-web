import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HeaderBar from "@/components/layout/HeaderBar";


const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

const BASE_URL = "https://zeplynk.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Zeplynk",
    default: "Tech Solutions & Web Development Company Nigeria | Zeplynk",
  },
  description:
    "Zeplynk: Nigeria's premier tech solutions company in Kaduna. Web engineering, AI automation, software development & tech training across Nigeria and Africa.",
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
  authors: [{ name: "Zeplynk", url: BASE_URL }],
  creator: "Zeplynk",
  publisher: "Zeplynk",
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'en-NG': BASE_URL,
    },
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
      "Zeplynk provides comprehensive tech solutions and premier tech education. We deliver world-class web engineering and AI automation to transform businesses and careers.",
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
    alternateName: ["Zeplynk Tech", "Zeplynk Academy"],
    url: BASE_URL,
    logo: `${BASE_URL}/theLogo-removebg-preview.png`,
    description:
      "Zeplynk is a Nigerian tech solutions and education company based in Kaduna. It provides web development, AI automation, and software services, and operates Zeplynk Academy — a developer training program for Nigerian professionals.",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Nash Ezekiel Pam",
      jobTitle: "Founder & CEO",
      url: BASE_URL,
    },
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
      "https://github.com/zeplynk",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kaduna",
      addressRegion: "Kaduna State",
      addressCountry: "NG",
    },
    areaServed: ["Kaduna", "Jos", "Nigeria", "Africa"],
    knowsAbout: ["Tech Solutions", "Tech Education", "Technology Consulting", "Web Development", "AI Automation", "Software Engineering", "Coding Bootcamp"],
    serviceType: ["Tech Solutions", "Tech Education", "Web Engineering", "AI Solutions", "Tech Training", "Software Development"],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: "Zeplynk",
    description: "Premier tech solutions and education company in Kaduna, Nigeria. Offering web development, AI automation, software engineering, and developer training programs across Nigeria.",
    url: BASE_URL,
    telephone: "+234-806-726-3891",
    email: "hello@zeplynk.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kaduna",
      addressRegion: "Kaduna State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.5105,
      longitude: 7.4165,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "₦₦",
    areaServed: ["Kaduna", "Jos", "Abuja", "Lagos", "Nigeria", "Africa"],
    sameAs: [
      "https://www.linkedin.com/company/zeplynk",
      "https://twitter.com/zeplynk",
      "https://www.instagram.com/zeplynk",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zeplynk Tech Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Nigeria", description: "Custom web application development for Nigerian businesses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation Nigeria", description: "AI-powered workflow automation for Nigerian companies" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tech Training Kaduna", description: "Developer training and coding bootcamp programs in Kaduna" } },
      ],
    },
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

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zeplynk",
    alternateName: "Zeplynk Tech",
    url: BASE_URL,
    description:
      "Zeplynk is Nigeria's premier tech solutions and education company — web engineering, AI automation, and developer training from Kaduna.",
    publisher: {
      "@type": "Organization",
      name: "Zeplynk",
      url: BASE_URL,
      logo: `${BASE_URL}/theLogo-removebg-preview.png`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const allSchemas = [
    websiteJsonLd,
    organizationJsonLd,
    localBusinessJsonLd,
    webpageJsonLd,
    serviceJsonLd,
    educationalOrganizationJsonLd,
  ];

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
        </Providers>
      </body>
    </html>
  );
}
