import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSolutionBySlug, solutions } from "@/lib/solutions-data";
import SolutionDetailPage from "@/components/sections/solutions/SolutionDetailPage";

// Map slug → primary keyword for richer, targeted metadata
const slugKeywordMap: Record<string, { primary: string; serviceType: string; keywords: string[] }> = {
  "web-engineering": {
    primary: "Web Engineering & Application Development Nigeria",
    serviceType: "Web Development",
    keywords: ["web development Nigeria", "custom web application Nigeria", "Next.js development Nigeria", "React development Nigeria", "web engineering Kaduna"],
  },
  "ai-automation": {
    primary: "AI Automation & Intelligent Systems Nigeria",
    serviceType: "AI Automation",
    keywords: ["AI automation Nigeria", "WhatsApp chatbot Nigeria", "business process automation Nigeria", "AI workflow Nigeria", "machine learning Nigeria"],
  },
  "mobile-apps": {
    primary: "Mobile App Development Nigeria",
    serviceType: "Mobile App Development",
    keywords: ["mobile app development Nigeria", "Android app Nigeria", "iOS app Nigeria", "React Native Nigeria", "mobile app Kaduna"],
  },
  "backend-api": {
    primary: "Backend & API Development Nigeria",
    serviceType: "Backend Development",
    keywords: ["backend development Nigeria", "API development Nigeria", "REST API Nigeria", "Node.js backend Nigeria", "database development Nigeria"],
  },
  "enterprise-digitization": {
    primary: "Enterprise Digitization & Systems Integration Nigeria",
    serviceType: "Enterprise Software",
    keywords: ["enterprise software Nigeria", "ERP Nigeria", "digital transformation Nigeria", "systems integration Nigeria", "enterprise digitization Kaduna"],
  },
  "cloud-devops": {
    primary: "Cloud Infrastructure & DevOps Nigeria",
    serviceType: "Cloud Services",
    keywords: ["cloud services Nigeria", "DevOps Nigeria", "AWS Nigeria", "cloud infrastructure Nigeria", "CI/CD pipeline Nigeria"],
  },
  "ui-ux-design": {
    primary: "UI/UX Design & Product Design Nigeria",
    serviceType: "UI/UX Design",
    keywords: ["UI UX design Nigeria", "product design Nigeria", "Figma design Nigeria", "user experience design Nigeria", "web design Kaduna"],
  },
  "data-bi": {
    primary: "Data Analytics & Business Intelligence Nigeria",
    serviceType: "Data Analytics",
    keywords: ["data analytics Nigeria", "business intelligence Nigeria", "data engineering Nigeria", "dashboard development Nigeria", "data visualization Nigeria"],
  },
  "cybersecurity": {
    primary: "Cybersecurity & Compliance Services Nigeria",
    serviceType: "Cybersecurity",
    keywords: ["cybersecurity Nigeria", "penetration testing Nigeria", "security audit Nigeria", "compliance Nigeria", "IT security Kaduna"],
  },
  "tech-education": {
    primary: "Tech Education & Developer Training Nigeria",
    serviceType: "Tech Education",
    keywords: ["coding bootcamp Nigeria", "tech training Nigeria", "software engineering course Nigeria", "coding bootcamp Kaduna", "developer training Nigeria"],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 6 solution slugs
export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

// Dynamic SEO metadata per solution
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  const slugMeta = slugKeywordMap[slug];
  const title = slugMeta
    ? slugMeta.primary
    : `${solution.title} Services Nigeria`;
  const description = `Zeplynk ${solution.title.toLowerCase()} services in Nigeria. ${solution.description.slice(0, 150)}. Based in Kaduna, serving Lagos, Abuja, Jos, and all of Nigeria.`;
  const keywords = slugMeta?.keywords ?? [];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://zeplynk.com/solutions/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://zeplynk.com/solutions/${slug}`,
      images: [{ url: "/solutions/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Software Development & AI Automation Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/solutions/opengraph-image"],
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const slugMeta = slugKeywordMap[slug];

  // Service JSON-LD schema for rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.description,
    serviceType: slugMeta?.serviceType ?? solution.title,
    provider: {
      "@type": "Organization",
      name: "Zeplynk",
      url: "https://zeplynk.com",
      logo: "https://zeplynk.com/theLogo-removebg-preview.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kaduna",
        addressRegion: "Kaduna State",
        addressCountry: "NG",
      },
      telephone: "+234-806-726-3891",
    },
    areaServed: ["Kaduna", "Lagos", "Abuja", "Jos", "Nigeria", "Africa"],
    url: `https://zeplynk.com/solutions/${slug}`,
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zeplynk.com" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://zeplynk.com/solutions" },
      { "@type": "ListItem", position: 3, name: solution.title, item: `https://zeplynk.com/solutions/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Only pass the slug (a plain string) — the client component
          imports its own data so non-serializable values (icons) never
          cross the server → client boundary. */}
      <SolutionDetailPage slug={slug} />
    </>
  );
}

