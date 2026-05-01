import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Premier Tech Solutions & Digital Engineering",
  description:
    "Zeplynk provides comprehensive tech solutions, top-tier web engineering, AI automation, and tech education to transform businesses and careers across Nigeria and Africa.",
  keywords: [
    "tech solutions provider",
    "tech education programs",
    "technology partner Africa",
    "web engineering Nigeria",
    "AI automation Africa",
    "tech startup Nigeria",
    "software development company Nigeria",
    "AI solutions Africa",
    "Next.js agency Nigeria",
  ],
  alternates: {
    canonical: "https://zeplynk.com",
  },
  openGraph: {
    title: "Zeplynk — Premier Tech Solutions & Digital Engineering",
    description:
      "Comprehensive tech solutions, top-tier web engineering, AI automation, and tech education for businesses and careers across Nigeria and Africa.",
    url: "https://zeplynk.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zeplynk — Digital Engineering & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeplynk — Premier Tech Solutions & Digital Engineering",
    description:
      "Comprehensive tech solutions, web engineering, AI automation & tech education across Nigeria and Africa.",
    images: ["/opengraph-image.png"],
  },
};

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

import dynamic from "next/dynamic";

// Section Components
import Hero from "@/components/sections/Hero";

// Enhanced dynamic imports with prefetching and better loading states
const SolutionsSlider = dynamic(() => import("@/components/sections/SolutionsSlider"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const AiSolutions = dynamic(() => import("@/components/sections/AiSolutions"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const Industries = dynamic(() => import("@/components/sections/Industries"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const ProcessMap = dynamic(() => import("@/components/sections/ProcessMap"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const CaseStudyBlock = dynamic(() => import("@/components/sections/CaseStudyBlock"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const PortfolioProjects = dynamic(() => import("@/components/sections/PortfolioProjects"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

const NewsSection = dynamic(() => import("@/components/sections/NewsSection"), {
  loading: () => (
    <div className="h-96 bg-zinc-950 animate-pulse rounded-lg">
      <div className="h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-[length:200%_100%] animate-shimmer" />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zgreen-500/30 selection:text-zgreen-200 overflow-x-hidden font-friendly">

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <SolutionsSlider />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <AiSolutions />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <Industries />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <ProcessMap />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <CaseStudyBlock />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <PortfolioProjects />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <FAQ />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <Testimonials />
        </ScrollReveal>
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse" />}>
        <ScrollReveal width="100%">
          <Newsletter />
        </ScrollReveal>
      </Suspense>

      {/* Strategic CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5 text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Transform <br />
              <span className="text-zgreen-500">Your Digital Infrastructure?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-16 px-10 text-xl font-bold w-full sm:w-auto">
                  Schedule a Strategy Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 rounded-full h-16 px-10 text-xl font-bold w-full sm:w-auto">
                  Talk to an AI Consultant
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
