/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/teachers/page.tsx

import AllTeachers from "@/components/modules/Teachers/AllTeachers";
import { getAllTeachers } from "@/services/teacher/GetAllTeachers";

const AllTeachersPage = async () => {
  const res = await getAllTeachers();
  const teachers =
    res.data?.map((teacher: any) => ({
      _id: teacher._id?.toString() || "",
      name: teacher.name,
      email: teacher.email,
    })) || [];
  return (
    <div>
      <AllTeachers teachers={teachers} />
    </div>
  );
};

export default AllTeachersPage;
