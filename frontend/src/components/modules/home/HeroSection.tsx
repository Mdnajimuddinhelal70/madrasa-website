"use client";

import Image from "next/image";
import banner from "../../../../public/assets/images/bannerImg/madrasa2.png";

export default function HeroSection() {
  return (
    <section className="bg-[#2c0202] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to Our Madrasa
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            We provide quality Islamic education with modern knowledge. Build
            your future with us.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={banner}
            alt="Madrasa"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
