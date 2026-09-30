"use client";

import {
  ArrowUpRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Languages,
  MoonStar,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpenCheck,
    title: "Quran & Hifz Education",
    description:
      "কুরআন শিক্ষা ও হিফজের মাধ্যমে শিক্ষার্থীদের দ্বীনি জ্ঞানের শক্ত ভিত্তি গড়ে তোলা।",
    number: "01",
  },
  {
    icon: GraduationCap,
    title: "Primary Education",
    description:
      "ইবতেদায়ী পর্যায়ে প্রয়োজনীয় সাধারণ শিক্ষার মাধ্যমে শিক্ষার্থীদের একাডেমিক ভিত্তি শক্ত করা।",
    number: "02",
  },
  {
    icon: Languages,
    title: "Bangla, English & Arabic",
    description: "বাংলা, ইংরেজি ও আরবি ভাষার প্রয়োজনীয় জ্ঞান অর্জনের সুযোগ।",
    number: "03",
  },
  {
    icon: HeartHandshake,
    title: "Orphan & Student Support",
    description:
      "এতিম ও অসচ্ছল শিক্ষার্থীদের শিক্ষা ও প্রয়োজনীয় সহায়তার মাধ্যমে পাশে থাকা।",
    number: "04",
  },
  {
    icon: Utensils,
    title: "Food & Accommodation",
    description:
      "প্রয়োজনীয় শিক্ষার্থীদের জন্য থাকা ও খাবারের ক্ষেত্রে সহযোগিতার ব্যবস্থা।",
    number: "05",
  },
  {
    icon: Brain,
    title: "Character Building",
    description:
      "জ্ঞান অর্জনের পাশাপাশি নৈতিকতা, শৃঙ্খলা ও মানবিক মূল্যবোধের বিকাশে গুরুত্ব দেওয়া।",
    number: "06",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* ================= Background Decoration ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Section Heading ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <ShieldCheck className="h-4 w-4" />
            What We Offer
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            শিক্ষার পাশাপাশি
            <span className="block text-amber-600">
              যত্ন, মূল্যবোধ ও ভবিষ্যৎ
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            একজন শিক্ষার্থীর সুন্দর ভবিষ্যতের জন্য প্রয়োজন জ্ঞান, নৈতিকতা, যত্ন
            এবং একটি নিরাপদ পরিবেশ। আমাদের কার্যক্রমগুলো এই বিষয়গুলোকে সামনে
            রেখেই পরিচালিত হয়।
          </p>
        </div>

        {/* ================= Feature Grid ================= */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
              >
                {/* Number */}
                <div className="absolute right-5 top-4 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-amber-50">
                  {feature.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#160707] text-amber-300 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-amber-600">
                  <span className="h-px w-6 bg-current" />
                  Learn & Grow
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= Highlight Banner ================= */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#160707] p-7 text-white shadow-xl sm:p-9 lg:p-10">
          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-amber-300">
                <MoonStar className="h-5 w-5" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  A Complete Learning Environment
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                দ্বীনি শিক্ষা ও সাধারণ শিক্ষার
                <span className="text-amber-300"> সুন্দর সমন্বয়</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                আমাদের উদ্দেশ্য হলো শিক্ষার্থীদের এমন একটি পরিবেশ দেওয়া যেখানে
                তারা জ্ঞান অর্জনের পাশাপাশি শৃঙ্খলা, দায়িত্ববোধ, নৈতিকতা ও
                মানবিকতার চর্চা করতে পারে।
              </p>
            </div>

            {/* Right Checklist */}
            <div className="grid shrink-0 gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-white/80">
                  Islamic & Quranic Education
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-white/80">
                  Academic Foundation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-white/80">
                  Caring & Supportive Environment
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-white/80">
                  Character & Moral Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-amber-600"
          >
            Explore More About Our Institution
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
