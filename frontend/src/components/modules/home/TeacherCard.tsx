/* eslint-disable @typescript-eslint/no-explicit-any */
// components/TeacherCard.tsx

"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";

export default function TeacherCard({ teacher }: any) {
  return (
    <div className="group relative w-full font-serif">
      <div className="relative overflow-hidden rounded-[20px] bg-[#2c0202] shadow-md hover:shadow-xl transition">
        <div className="relative h-[240px] w-full overflow-hidden rounded-t-[120px]">
          <Image
            src={teacher.picture}
            alt={teacher.name}
            fill
            className="object-cover group-hover:scale-110 transition"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a2b]/70 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-[#2c0202]/95 p-2 rounded-lg border border-[#c9a14a]/40">
              <h3 className="text-sm font-bold text-white">{teacher.name}</h3>
              <p className="text-[10px] text-white">{teacher.subject}</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs text-white italic">
            Experienced teacher in {teacher.subject}.
          </p>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1f3a2b] text-white">
                <FaFacebookSquare size={14} />
              </div>
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1f3a2b] text-white">
                <Mail size={14} />
              </div>
            </div>

            <button className="flex items-center gap-1 text-[10px] px-3 py-1 rounded-full border border-[#1f3a2b] text-[#10df2c] hover:bg-[#1f3a2b] hover:text-white transition">
              View <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
