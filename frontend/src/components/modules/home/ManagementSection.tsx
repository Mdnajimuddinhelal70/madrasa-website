"use client";

import {
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ManagementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* ================= Background Decoration ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Section Heading ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <Sparkles className="h-4 w-4" />
            Our Management
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            নেতৃত্বে দায়িত্ব,
            <span className="block text-amber-600">উদ্দেশ্যে কল্যাণ</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            একটি শিক্ষা প্রতিষ্ঠানকে এগিয়ে নিতে প্রয়োজন দায়িত্বশীল নেতৃত্ব,
            সুস্পষ্ট লক্ষ্য এবং শিক্ষার্থীদের প্রতি আন্তরিকতা। আমাদের
            ব্যবস্থাপনা সেই লক্ষ্যেই কাজ করে যাচ্ছে।
          </p>
        </div>

        {/* ================= Main Management Card ================= */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= Founder Visual ================= */}
            <div className="relative overflow-hidden bg-[#160707] p-8 sm:p-10 lg:p-12">
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-amber-300/10" />

              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-amber-400/5 blur-2xl" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    <Award className="h-3.5 w-3.5" />
                    Founder & Secretary
                  </div>

                  {/* Profile Placeholder */}
                  <div className="mt-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-300/20 bg-gradient-to-br from-amber-300/20 to-white/5 text-4xl font-bold text-amber-300 shadow-2xl">
                    লা
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                    জনাব মোঃ লাকি মিয়া
                  </h3>

                  <p className="mt-2 text-sm font-medium text-amber-300">
                    Founder & Secretary
                  </p>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                    লন্ডন প্রবাসী এই উদ্যোক্তার উদ্যোগ ও সহযোগিতায় প্রতিষ্ঠানটি
                    শিক্ষার্থীদের দ্বীনি শিক্ষা, সাধারণ শিক্ষা এবং মানবিক সহায়তা
                    প্রদানের লক্ষ্য নিয়ে এগিয়ে যাচ্ছে।
                  </p>
                </div>

                {/* Bottom Quote */}
                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Our Commitment
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    “শিক্ষার মাধ্যমে জ্ঞান, চরিত্র ও মানবিকতার বিকাশ ঘটানো।”
                  </p>
                </div>
              </div>
            </div>

            {/* ================= Management Content ================= */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                Leadership & Responsibility
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                শিক্ষার্থীদের ভবিষ্যৎকে
                <span className="block text-amber-600">
                  সামনে রেখেই আমাদের পথচলা
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                আমাদের ব্যবস্থাপনার মূল লক্ষ্য হলো এমন একটি শিক্ষার পরিবেশ তৈরি
                করা যেখানে শিক্ষার্থীরা নিরাপদে শিখতে পারে, নিজেদের প্রতিভা
                বিকশিত করতে পারে এবং নৈতিক ও মানবিক মূল্যবোধ নিয়ে বেড়ে উঠতে
                পারে।
              </p>

              {/* Responsibility List */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-amber-200 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <HeartHandshake className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Student Welfare
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      শিক্ষার্থীদের প্রয়োজন ও কল্যাণকে গুরুত্ব দিয়ে সহায়ক পরিবেশ
                      নিশ্চিত করার চেষ্টা করা হয়।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-amber-200 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Safe Learning Environment
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      শৃঙ্খলা, নিরাপত্তা ও সুন্দর পরিবেশের মাধ্যমে শিক্ষার্থীদের
                      শেখার সুযোগ তৈরি করা।
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-amber-200 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Educational Support
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      প্রয়োজন অনুযায়ী শিক্ষার্থীদের শিক্ষা, থাকা ও খাবারের
                      ক্ষেত্রে সহযোগিতার ব্যবস্থা করা।
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href="/about/founder"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#160707] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c1010] hover:shadow-lg"
                >
                  Meet Our Founder
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom Trust Strip ================= */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Responsible Leadership
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              শিক্ষার্থীদের কল্যাণকে অগ্রাধিকার
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Education First
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              জ্ঞান ও চরিত্র গঠনে গুরুত্ব
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
            <p className="text-sm font-semibold text-slate-900">
              Community Care
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              প্রয়োজনীয় শিক্ষার্থীদের পাশে থাকা
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
