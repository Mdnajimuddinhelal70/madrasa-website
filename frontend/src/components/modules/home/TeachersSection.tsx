"use client";

import Image from "next/image";
import Link from "next/link";

const teachers = [
  {
    id: "1",
    name: "Maulana Abdul Karim",
    role: "Quran Teacher",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    name: "Hafiz Rahman Ali",
    role: "Hadith Teacher",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Mufti Hasan Uddin",
    role: "Fiqh Teacher",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&h=500&fit=crop",
  },
];

export default function TeachersSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Teachers</h2>
          <p className="text-gray-500 mt-2">
            Experienced scholars guiding our students
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <Link
              key={teacher.id}
              href={`/teachers/${teacher.id}`}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition">
                  {teacher.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{teacher.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
