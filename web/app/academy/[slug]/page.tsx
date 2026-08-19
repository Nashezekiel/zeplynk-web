import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug, courses } from "@/lib/courses-data";
import CourseDetailPage from "@/components/sections/academy/CourseDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: {
      canonical: `https://zeplynk.com/academy/${slug}`,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: `https://zeplynk.com/academy/${slug}`,
      images: [{ url: "/academy/opengraph-image", width: 1200, height: 630, alt: "Zeplynk Academy — Tech Education Nigeria" }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
      images: ["/academy/opengraph-image"],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Zeplynk Academy",
      url: "https://zeplynk.com/academy",
    },
    url: `https://zeplynk.com/academy/${slug}`,
    inLanguage: "en",
    courseMode: ["onsite", "online"],
    timeRequired: course.duration,
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      location: {
        "@type": "Place",
        name: "Zeplynk Academy, Kaduna",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kaduna",
          addressRegion: "Kaduna State",
          addressCountry: "NG",
        },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Academy", item: "https://zeplynk.com/academy" },
      { "@type": "ListItem", position: 3, name: course.title, item: `https://zeplynk.com/academy/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CourseDetailPage slug={slug} />
    </>
  );
}
