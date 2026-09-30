"use client";

import { ArrowRight, Heart, HeartHandshake, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Donor {
  id: number;
  name: string;
  role: string;
  image?: string;
  message: string;
}

const donors: Donor[] = [
  {
    id: 1,
    name: "জনাব মোঃ লাকি মিয়া",
    role: "Founder & Secretary",
    message:
      "শিক্ষার্থীদের শিক্ষা, কল্যাণ ও ভবিষ্যৎ গঠনে তাঁর আন্তরিক সহযোগিতা আমাদের পথচলার অন্যতম অনুপ্রেরণা।",
  },
  {
    id: 2,
    name: "Our Supporters",
    role: "Well-Wishers",
    message:
      "যারা বিভিন্নভাবে এই প্রতিষ্ঠানের পাশে রয়েছেন এবং শিক্ষার্থীদের সুন্দর ভবিষ্যৎ গঠনে সহযোগিতা করছেন।",
  },
  {
    id: 3,
    name: "Our Community",
    role: "Community Support",
    message:
      "স্থানীয় শুভাকাঙ্ক্ষী ও সহযোগীদের সম্মিলিত সহায়তা আমাদের শিক্ষার্থীদের জন্য একটি সহায়ক পরিবেশ গড়ে তুলতে ভূমিকা রাখে।",
  },
];

export default function DonorsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <HeartHandshake className="h-4 w-4" />
            Our Supporters
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            যারা পাশে আছেন,
            <span className="block text-amber-600">তারাই আমাদের শক্তি</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            একটি শিক্ষা প্রতিষ্ঠানের পথচলায় শুভাকাঙ্ক্ষী ও সহযোগীদের অবদান
            অত্যন্ত গুরুত্বপূর্ণ। তাঁদের আন্তরিক সহযোগিতা আমাদের শিক্ষার্থীদের
            জন্য আরও সুন্দর সুযোগ তৈরি করতে অনুপ্রেরণা দেয়।
          </p>
        </div>

        {/* Donor Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {donors.map((donor, index) => (
            <div
              key={donor.id}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/40 ${
                index % 2 === 0
                  ? "animate-[donorLeft_0.8s_ease-out_both]"
                  : "animate-[donorRight_0.8s_ease-out_both]"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-100/50 blur-3xl transition-all duration-500 group-hover:bg-amber-200/60" />

              {/* Top Icon */}
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Heart className="h-5 w-5" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Supporter
                </span>
              </div>

              {/* Donor Profile */}
              <div className="relative mt-7 flex items-center gap-4">
                {donor.image ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-amber-100">
                    <Image
                      src={donor.image}
                      alt={donor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="64px"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-amber-100 bg-[#160707] text-lg font-bold text-amber-300">
                    {donor.name.slice(0, 2)}
                  </div>
                )}

                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-slate-900">
                    {donor.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-amber-600">
                    {donor.role}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="relative mt-6 text-sm leading-7 text-slate-600">
                {donor.message}
              </p>

              {/* Bottom */}
              <div className="relative mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-slate-500">
                <Sparkles className="h-4 w-4 text-amber-500" />
                With gratitude & appreciation
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#160707] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c1010] hover:shadow-lg"
          >
            Support Our Mission
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Mobile / Scroll Animation */}
      <style jsx>{`
        @keyframes donorLeft {
          from {
            opacity: 0;
            transform: translateX(-70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes donorRight {
          from {
            opacity: 0;
            transform: translateX(70px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 768px) {
          .animate-\\[donorLeft_0\\.8s_ease-out_both\\],
          .animate-\\[donorRight_0\\.8s_ease-out_both\\] {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[donorLeft_0\\.8s_ease-out_both\\],
          .animate-\\[donorRight_0\\.8s_ease-out_both\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
