import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Zeplynk - Tech Solutions & Web Development Company Nigeria",
  description:
    "Zeplynk: Nigeria's #1 tech solutions company in Kaduna. Web engineering, AI automation, software development & Academy training across Nigeria and Africa.",
  keywords: [
    "Zeplynk",
    "tech solutions Nigeria",
    "web development company Nigeria",
    "tech company Kaduna",
    "web development Kaduna",
    "AI automation Nigeria",
    "software development company Nigeria",
    "Zeplynk Academy",
    "tech education Nigeria",
    "coding bootcamp Nigeria",
    "Next.js agency Nigeria",
    "tech solutions Kaduna Nigeria",
    "northern Nigeria tech company",
    "tech startup Kaduna",
  ],
  alternates: {
    canonical: "https://zeplynk.com",
  },
  openGraph: {
    title: "Tech Solutions & Web Development Company Nigeria | Zeplynk",
    description:
      "Nigeria's premier tech solutions and education company in Kaduna. Web engineering, AI automation, and developer training across Nigeria and Africa.",
    url: "https://zeplynk.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Solutions & Web Development Company Nigeria | Zeplynk",
    description:
      "Zeplynk is Nigeria's premier tech solutions company in Kaduna — web engineering, AI automation & developer training.",
  },
};

import Link from "next/link";
import { Sparkles, ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAllNews } from "@/lib/news-store";
import { CALENDLY_URL } from "@/lib/constants";

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

export default async function Home() {
  const newsItems = await getAllNews();

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
        <NewsSection items={newsItems} />
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-zgreen-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zgreen-500/10 border border-zgreen-500/20 text-zgreen-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s Build Something Great
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zgreen-400 to-emerald-500">Your Digital Infrastructure?</span>
            </h2>

            <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether it&apos;s a strategy call with our engineers or a quick chat with our AI consultant, we&apos;re ready to help you scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group bg-zgreen-600 hover:bg-zgreen-500 text-white rounded-full h-16 px-10 text-lg sm:text-xl font-bold w-full sm:w-auto shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:scale-[1.02] active:scale-95">
                  Schedule a Strategy Call
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full h-16 px-10 text-lg sm:text-xl font-bold w-full sm:w-auto backdrop-blur-sm transition-all">
                  <Bot className="h-5 w-5 mr-2" />
                  Talk to an AI Consultant
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
              <CheckCircle2 className="h-4 w-4 text-zgreen-500" />
              Trusted by 50+ startups and businesses across Nigeria
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
