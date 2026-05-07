"use client";

import { BookOpen, Building2, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    desc: "We provide strong Islamic and modern education for all students.",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    desc: "Our teachers are highly qualified and experienced in their fields.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    desc: "We provide state-of-the-art facilities for enhanced learning.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    desc: "We ensure a safe and secure environment for every student.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Our Madrasa
          </h2>
          <p className="text-gray-500 mt-2">
            We provide the best environment for learning and growth
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition group"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
