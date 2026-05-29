"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { solutions } from "@/lib/solutions-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Map solution slugs to bento span sizes for visual variety
const bentoSpans: Record<string, string> = {
  ai: "md:col-span-2",
  engineering: "md:col-span-1",
  cloud: "md:col-span-1",
  enterprise: "md:col-span-1",
  security: "md:col-span-2",
  data: "md:col-span-1",
};

export default function SolutionsPageContent() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ── Subtle grid background ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Hero ── */}
      <section className="relative z-10 pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          {/* eyebrow */}
          <motion.div variants={cardVariants} className="flex items-center gap-3">
            <div className="h-px w-8 bg-zgreen-500" />
            <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">
              Our Solutions
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={cardVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
          >
            The technology
            <br />
            <span className="text-zinc-500">that moves business.</span>
          </motion.h1>

          {/* sub */}
          <motion.p
            variants={cardVariants}
            className="text-lg text-zinc-400 max-w-2xl leading-relaxed font-medium"
          >
            Six practice areas. One accountable partner. From AI systems and cloud
            infrastructure to enterprise integration — we engineer outcomes, not just
            deliverables.
          </motion.p>

          {/* stat row */}
          <motion.div
            variants={cardVariants}
            className="flex flex-wrap gap-8 pt-4 border-t border-white/5"
          >
            {[
              { value: "100+", label: "Projects delivered" },
              { value: "40+", label: "AI systems deployed" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "5★", label: "Client satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Bento Grid ── */}
      <section className="relative z-10 pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const span = bentoSpans[solution.slug] ?? "md:col-span-1";

            return (
              <motion.div key={solution.slug} variants={cardVariants} className={span}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group relative flex flex-col h-full min-h-[280px] p-8 rounded-2xl bg-zinc-900/40 border border-white/8 hover:border-white/20 hover:bg-zinc-900/70 transition-all duration-500 overflow-hidden"
                >
                  {/* Accent glow */}
                  <div
                    className={`absolute -top-16 -right-16 w-48 h-48 ${solution.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
                  />

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${solution.bgColor} ${solution.borderColor} border flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${solution.accentColor}`} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-white/30 translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Title + tagline */}
                  <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {solution.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">
                    {solution.tagline}
                  </p>

                  {/* Service pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {solution.items.slice(0, 3).map((item) => (
                      <span
                        key={item.name}
                        className="text-[11px] font-semibold text-zinc-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        {item.name}
                      </span>
                    ))}
                    {solution.items.length > 3 && (
                      <span className="text-[11px] font-semibold text-zinc-600 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                        +{solution.items.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Bottom explore label */}
                  <div
                    className={`mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${solution.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Explore {solution.title.split(" ")[0]}
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 rounded-2xl border border-white/8 bg-zinc-900/30"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Not sure where to start?
            </h2>
            <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll audit your current
              stack and tell you exactly where we can add the most value.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
