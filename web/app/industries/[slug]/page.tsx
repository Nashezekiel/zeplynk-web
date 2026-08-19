import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustryBySlug, industries } from "@/lib/industries-data";
import IndustryDetailPage from "@/components/sections/industries/IndustryDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `https://zeplynk.com/industries/${slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://zeplynk.com/industries/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zeplynk — Link to Greatness in Tech" }],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: industry.title,
    name: `${industry.title} — Zeplynk`,
    description: industry.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Zeplynk",
      url: "https://zeplynk.com",
    },
    areaServed: ["Nigeria", "Kaduna", "Lagos", "Abuja", "Jos"],
    url: `https://zeplynk.com/industries/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zeplynk.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://zeplynk.com/industries" },
      { "@type": "ListItem", position: 3, name: industry.name, item: `https://zeplynk.com/industries/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryDetailPage slug={slug} />
    </>
  );
}
