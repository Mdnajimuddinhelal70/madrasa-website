"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import teacher1 from "../../../../public/assets/images/teachers/teacher1.png";

export default function TeacherCard() {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={teacher1}
          alt="Teacher"
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800">Maulana Abdul Karim</h3>

        <p className="text-green-700 font-medium mb-2">Islamic Scholar</p>

        <p className="text-gray-500 text-sm mb-4">
          Expert in Tafsir and Hadith with 10+ years experience.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-500 hover:text-green-700 transition">
            <FaFacebookSquare size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-green-700 transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
