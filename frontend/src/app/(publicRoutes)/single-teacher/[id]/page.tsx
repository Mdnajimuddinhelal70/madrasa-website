// app/(publicRoutes)/single-teacher/[id]/page.tsx

import { getSingleTeacher } from "@/services/teacher/TeacherService";
import Image from "next/image";

const TeacherDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getSingleTeacher(id);
  const teacher = res.data;

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Side: Teacher Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src={teacher?.picture?.[0] || "/placeholder-teacher.jpg"}
            alt={teacher?.name || "Teacher photo"}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Biography */}
        <div>
          <h1 className="text-2xl font-bold">{teacher?.name}</h1>
          <p className="text-gray-500">{teacher?.email}</p>
          <p className="mt-2">{teacher?.phone}</p>

          <div className="mt-4">
            <h2 className="font-semibold">Biography</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              {teacher?.biography}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailsPage;
