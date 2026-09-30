"use client";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: BookOpen,
    title: "Quran & Hifz",
    description:
      "কুরআন শিক্ষা ও হিফজের মাধ্যমে শিক্ষার্থীদের দ্বীনি জ্ঞানের ভিত্তি শক্ত করা।",
  },
  {
    icon: GraduationCap,
    title: "Academic Education",
    description:
      "বাংলা, ইংরেজি ও আরবি শিক্ষার মাধ্যমে শিক্ষার্থীদের প্রাথমিক শিক্ষার ভিত তৈরি করা।",
  },
  {
    icon: HeartHandshake,
    title: "Care & Support",
    description:
      "এতিম ও অসচ্ছল শিক্ষার্থীদের শিক্ষা, থাকা ও খাবারের ক্ষেত্রে সহযোগিতা করা।",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* ================= Background Decoration ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Section Heading ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <Sparkles className="h-4 w-4" />
            About Our Madrasa
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            শিক্ষা শুধু বইয়ের মধ্যে নয়,
            <span className="block text-amber-600">শিক্ষা গড়ে তোলে মানুষ।</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            বীরেন্দ্র নগর আল-আরাফাহ ইবতেদায়ী হাফিজীয়া মাদরাসা ও এতিম খানা একটি
            শিক্ষামূলক ও মানবিক প্রতিষ্ঠান, যেখানে কুরআন ও ইসলামী শিক্ষার
            পাশাপাশি প্রয়োজনীয় সাধারণ শিক্ষার মাধ্যমে শিক্ষার্থীদের সুন্দর
            ভবিষ্যতের জন্য প্রস্তুত করা হয়।
          </p>
        </div>

        {/* ================= Main Content ================= */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* ================= Visual Side ================= */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Decorative shapes */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border border-amber-200 bg-amber-50" />

            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full border border-emerald-100 bg-emerald-50" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-2 shadow-xl shadow-slate-200/50">
              <div className="rounded-[1.5rem] bg-[#160707] p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-[#160707]">
                  <BookOpen className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Our Vision
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  জ্ঞান, চরিত্র ও মানবিকতায়
                  <span className="block text-amber-300">
                    একটি সুন্দর প্রজন্ম।
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                  আমরা বিশ্বাস করি, একজন শিক্ষার্থীর প্রকৃত উন্নয়ন তখনই সম্ভব
                  যখন তার জ্ঞান, চরিত্র, নৈতিকতা ও মানবিক মূল্যবোধ একসাথে বিকশিত
                  হয়।
                </p>

                {/* Mini Stats */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-amber-300">Quran</p>
                    <p className="mt-1 text-xs text-white/50">
                      Islamic Foundation
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-emerald-300">Care</p>
                    <p className="mt-1 text-xs text-white/50">
                      Compassion & Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Content Side ================= */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              Who We Are
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              একটি আদর্শ পরিবেশে
              <span className="block text-amber-600">
                শিক্ষার্থীদের বেড়ে ওঠা
              </span>
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              আমাদের লক্ষ্য শুধু একজন শিক্ষার্থীকে পরীক্ষায় ভালো করার জন্য
              প্রস্তুত করা নয়। বরং তাকে একজন সৎ, দায়িত্বশীল, জ্ঞানী ও মানবিক
              মানুষ হিসেবে গড়ে তোলা।
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              ইবতেদায়ী শিক্ষা, হিফজুল কুরআন এবং প্রয়োজনীয় সাধারণ শিক্ষার
              সমন্বয়ের মাধ্যমে আমরা শিক্ষার্থীদের দ্বীনি ও পার্থিব জীবনের জন্য
              একটি শক্ত ভিত্তি তৈরি করতে কাজ করছি।
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="group flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#160707] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c1010] hover:shadow-lg"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
