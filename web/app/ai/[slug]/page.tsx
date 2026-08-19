import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAiPageBySlug, aiPages } from "@/lib/ai-pages-data";
import AiPageDetail from "@/components/sections/ai/AiPageDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aiPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAiPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `https://zeplynk.com/ai/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://zeplynk.com/ai/${slug}`,
      images: [{ url: "/ai/opengraph-image", width: 1200, height: 630, alt: "Zeplynk AI & Automation" }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/ai/opengraph-image"],
    },
  };
}

export default async function AiSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getAiPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.title,
    name: `${page.title} — Zeplynk`,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Zeplynk",
      url: "https://zeplynk.com",
    },
    areaServed: ["Nigeria", "Kaduna", "Lagos", "Abuja", "Jos"],
    url: `https://zeplynk.com/ai/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "AI & Automation", item: "https://zeplynk.com/ai" },
      { "@type": "ListItem", position: 3, name: page.title, item: `https://zeplynk.com/ai/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AiPageDetail slug={slug} />
    </>
  );
}
