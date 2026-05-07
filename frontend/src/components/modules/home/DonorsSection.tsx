"use client";

import Image from "next/image";

const donors = [
  {
    name: "Abdul Karim",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
  },
  {
    name: "Rahman Ali",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Hafiz Uddin",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
  },
];

export default function DonorsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Lifetime Donors</h2>
          <p className="text-gray-500 mt-2">
            We are grateful to our generous supporters
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {donors.map((donor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={donor.image}
                  alt={donor.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {donor.name}
              </h3>

              {/* Badge */}
              <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
                Lifetime Donor
              </span>

              {/* Year */}
              <p className="text-gray-500 text-sm mt-2">
                Donated in {donor.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
