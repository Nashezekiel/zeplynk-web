import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSolutionBySlug, solutions } from "@/lib/solutions-data";
import SolutionDetailPage from "@/components/sections/solutions/SolutionDetailPage";

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

  const title = `${solution.title} Services Nigeria | Zeplynk`;
  const description = `Zeplynk ${solution.title.toLowerCase()} services in Nigeria. ${solution.description.slice(0, 130)}...`;

  return {
    title,
    description,
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

  // Only pass the slug (a plain string) — the client component
  // imports its own data so non-serializable values (icons) never
  // cross the server → client boundary.
  return <SolutionDetailPage slug={slug} />;
}

