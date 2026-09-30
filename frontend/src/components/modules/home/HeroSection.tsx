"use client";

import { ArrowRight, BookOpen, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#160707] text-white">
      {/* ================= Background Decoration ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,167,72,0.12),transparent_35%)]" />
      </div>

      {/* ================= Main Content ================= */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ================= Left Content ================= */}
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Islamic Education • Hafizia • Orphan Care
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              Building Hearts,
              <span className="block text-amber-300">Nurturing Minds.</span>
            </h1>

            {/* Madrasa Name */}
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/90 md:text-xl">
              বীরেন্দ্র নগর আল-আরাফাহ ইবতেদায়ী হাফিজীয়া মাদরাসা ও এতিম খানা
            </p>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              ইসলামী মূল্যবোধ, কুরআন শিক্ষা এবং আধুনিক জ্ঞানের সমন্বয়ে একটি
              সুন্দর ও আদর্শ ভবিষ্যৎ গড়ে তোলার প্রত্যয়ে আমরা কাজ করে যাচ্ছি।
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-[#160707] shadow-lg shadow-amber-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Discover Our Madrasa
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#160707]"
              >
                Get in Touch
              </Link>
            </div>

            {/* ================= Trust Points ================= */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Quran & Education</p>
                  <p className="text-xs text-white/50">Knowledge with values</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                  <Heart className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Caring Environment</p>
                  <p className="text-xs text-white/50">Care & compassion</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Safe & Supportive</p>
                  <p className="text-xs text-white/50">A place to grow</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Right Image ================= */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-amber-300/10 bg-amber-300/5" />

            <div className="absolute -right-4 -top-4 z-10 hidden h-24 w-24 rounded-full border border-amber-300/20 bg-amber-300/5 blur-sm sm:block" />

            {/* Image */}
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
              <Image
                src="https://res.cloudinary.com/dpgjlcycl/image/upload/v1790445634/Gemini_Generated_Image_czlhdvczlhdvczlh_djsooz.jpg"
                alt="Students and learning environment of the madrasa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Image Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                    Our Mission
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/90 sm:text-base">
                    শিক্ষা, চরিত্র ও মানবিকতার সমন্বয়ে আগামী প্রজন্মকে গড়ে তোলা।
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-3 z-20 rounded-2xl border border-white/10 bg-[#251010]/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-6">
              <p className="text-xs text-white/50">A place for</p>

              <p className="mt-1 text-sm font-semibold text-white">
                Knowledge & Character
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Bottom Curve ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
    </section>
  );
}
