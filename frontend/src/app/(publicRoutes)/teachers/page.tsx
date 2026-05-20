// app/teachers/page.tsx

import { teachers } from "@/components/data/teachersFakeData";
import TeacherCard from "@/components/modules/home/TeacherCard";

export default function TeachersPage() {
  return (
    <div className="p-6 bg-amber-50">
      <h1 className="text-2xl font-bold text-[#2c0202] mb-6">Our Teachers</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
