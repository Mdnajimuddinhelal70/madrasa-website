"use client";

import Image from "next/image";

const graduates = [
  {
    name: "Abdul Hamid",
    year: "2020",
    achievement: "Hifz Completed (Pagri Holder)",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
  },
  {
    name: "Rahim Uddin",
    year: "2021",
    achievement: "Alim Graduation",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Hasan Ali",
    year: "2023",
    achievement: "Islamic Studies Excellence",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
  },
];

export default function GraduatesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Honored Graduates
          </h2>
          <p className="text-gray-500 mt-2">
            Students who proudly completed their journey
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {graduates.map((student, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-28 h-28 flex-shrink-0">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">
                  {student.name}
                </h3>

                {/* Year badge */}
                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                  Graduated {student.year}
                </span>

                <p className="text-gray-500 mt-3 text-sm">
                  {student.achievement}
                </p>
              </div>

              {/* Right badge */}
              <div className="text-green-700 font-semibold text-sm">
                🎓 Honored Graduate
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
