"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Clock,
  BookOpen,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getCourseBySlug } from "@/lib/courses-data";

interface Props {
  slug: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const childFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function CourseDetailPage({ slug }: Props) {
  const course = getCourseBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!course) return null;

  const Icon = course.icon;

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Breadcrumb ── */}
      <div className="relative z-10 pt-28 pb-0 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link
          href="/academy"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All Courses
        </Link>
      </div>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
          <motion.div variants={childFade} className="flex items-center gap-3">
            <div className={`flex items-center gap-2.5 px-4 py-1.5 rounded-full ${course.bgColor} ${course.borderColor} border`}>
              <Icon className={`w-4 h-4 ${course.accentColor}`} />
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${course.accentColor}`}>
                {course.category}
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={childFade} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            {course.title}
          </motion.h1>

          <motion.p variants={childFade} className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
            {course.tagline}
          </motion.p>

          <motion.div variants={childFade} className="flex flex-wrap gap-6 pt-2 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-500" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-zinc-500" />
              {course.format}
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-zinc-500" />
              {course.level}
            </div>
          </motion.div>

          <motion.div variants={childFade} className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-100 transition-colors"
            >
              Apply for Enrollment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Full Catalog
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAND
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5"
          >
            {course.stats.map((stat) => (
              <motion.div key={stat.label} variants={childFade} className="py-8 px-8 flex flex-col gap-1 first:pl-0 last:pr-0">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-zinc-500 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OVERVIEW + WHO IT'S FOR
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-zgreen-500" />
              <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              About this course
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">{course.description}</p>
            <div className="pt-4">
              <p className="text-sm font-bold text-white mb-1">Tuition</p>
              <p className="text-zinc-400">{course.price}</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Who this course is for</p>
            {course.whoFor.map((item) => (
              <motion.div
                key={item}
                variants={childFade}
                className="group p-5 rounded-xl bg-zinc-900/40 border border-white/8 hover:border-white/20 hover:bg-zinc-900/70 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${course.accentColor}`} />
                  <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CURRICULUM
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-16 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-zgreen-500" />
              <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">Curriculum</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What you&apos;ll learn</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {course.curriculum.map((module, i) => (
              <motion.div key={module.title} variants={childFade} className="relative p-6 rounded-2xl bg-zinc-900/40 border border-white/8 space-y-3">
                <div className={`w-10 h-10 rounded-full ${course.bgColor} ${course.borderColor} border flex items-center justify-center`}>
                  <span className={`text-sm font-black ${course.accentColor}`}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-base font-bold text-white">{module.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUTCOMES
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-16 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-zgreen-500" />
              <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What you&apos;ll walk away with</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {course.outcomes.map((outcome) => (
              <motion.div key={outcome} variants={childFade} className="flex items-start gap-3 p-5 rounded-xl bg-zinc-900/40 border border-white/8">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${course.accentColor}`} />
                <p className="text-sm text-zinc-300 leading-relaxed">{outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY ZEPLYNK ACADEMY
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-16 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-zgreen-500" />
              <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">Why Zeplynk Academy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What sets this course apart</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {course.differentiators.map((diff, i) => (
              <motion.div key={diff.title} variants={childFade} className="p-8 rounded-2xl border border-white/8 bg-zinc-900/40 space-y-3">
                <div className={`text-4xl font-black ${course.accentColor} opacity-30`}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold text-white">{diff.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-12 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-zgreen-500" />
            <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">Tools & Technology</span>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap gap-3">
            {course.techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={childFade}
                className="px-4 py-2 rounded-full bg-zinc-900/60 border border-white/8 text-sm font-semibold text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ ACCORDION
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-16 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-zgreen-500" />
              <span className="text-zgreen-500 text-xs font-bold uppercase tracking-[0.25em]">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Common questions</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-3xl">
            {course.faqs.map((faq, i) => (
              <motion.div key={i} variants={childFade} className="rounded-xl border border-white/8 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-white text-sm leading-relaxed">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative rounded-2xl border border-white/8 bg-zinc-900/40 overflow-hidden p-12 md:p-16 text-center"
          >
            <div className={`absolute inset-0 ${course.gradientFrom} bg-gradient-to-br to-transparent opacity-10 pointer-events-none`} />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to enroll?</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Applications for {course.title} are open now. Join the next cohort at Zeplynk Academy in Kaduna, or online from anywhere in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  Apply for Enrollment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Browse All Courses
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
