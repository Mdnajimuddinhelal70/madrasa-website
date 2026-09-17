/* eslint-disable @typescript-eslint/no-explicit-any */
// components/TeacherCard.tsx

"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function TeacherCard({ teacher }: any) {
  return (
    <div className="group relative w-full font-serif">
      <div className="overflow-hidden rounded-xl bg-[#2c0202] shadow-md hover:shadow-xl transition">
        {/* Image Section */}
        <div className="relative h-[240px] w-full">
          <Image
            src={
              Array.isArray(teacher?.picture) && teacher.picture.length > 0
                ? teacher.picture[0]
                : "/placeholder-teacher.jpg"
            }
            alt={teacher?.name || "Teacher photo"}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Info Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-white">{teacher?.name}</h3>
          <p className="text-sm text-gray-300">{teacher?.subject}</p>
          <p className="mt-2 text-xs text-white italic">
            Experienced teacher in {teacher?.subject}.
          </p>

          {/* Footer Section */}
          <div className="mt-4 flex justify-between items-center">
            {/* Social Icons */}
            <div className="flex gap-2">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1f3a2b] text-white hover:bg-[#10df2c] transition">
                <FaFacebookSquare size={14} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1f3a2b] text-white hover:bg-[#10df2c] transition">
                <Mail size={14} />
              </div>
            </div>

            {/* View Button */}
            <Link href={`/single-teacher/${teacher._id}`}>
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-[#10df2c] text-[#10df2c] hover:bg-[#10df2c] hover:text-black transition">
                View <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
