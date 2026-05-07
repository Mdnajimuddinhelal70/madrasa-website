"use client";

import Image from "next/image";

const management = [
  {
    name: "Maulana Abdul Karim",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    message:
      "Our mission is to provide quality Islamic education and build strong moral values.",
  },
  {
    name: "Hafiz Rahman Ali",
    role: "Secretary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    message:
      "We are committed to maintaining discipline and academic excellence.",
  },
  {
    name: "Mufti Hasan Uddin",
    role: "Advisor",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    message:
      "Guiding students towards knowledge and spirituality is our priority.",
  },
];

export default function ManagementSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Management</h2>
          <p className="text-gray-500 mt-2">
            Dedicated leaders guiding our madrasa
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {management.map((person, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {person.name}
                </h3>

                <p className="text-green-700 font-medium mb-3">{person.role}</p>

                <p className="text-gray-500 text-sm">{person.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
