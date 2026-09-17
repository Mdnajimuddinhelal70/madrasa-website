/* eslint-disable @typescript-eslint/no-explicit-any */
// app/teachers/page.tsx

import TeacherCard from "@/components/modules/home/TeacherCard";
import { getAllTeachers } from "@/services/teacher/GetAllTeachers";

export default async function TeachersPage() {
  const res = await getAllTeachers();
  // console.log("Response from getAllTeachers:", res);
  const teachers =
    res.data?.map((teacher: any) => ({
      _id: teacher._id?.toString() || "",
      name: teacher.name,
      email: teacher.email,
      picture: teacher.picture,
    })) || [];

  return (
    <div className="p-6 bg-amber-50">
      <h1 className="text-2xl font-bold text-[#2c0202] mb-6">Our Teachers</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
