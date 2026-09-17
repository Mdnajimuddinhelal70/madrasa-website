// app/dashboard/edit-teacher/[id]/page.tsx

import EditTeacherForm from "@/components/modules/Teachers/EditTeacherForm";
import { getSingleTeacher } from "@/services/teacher/TeacherService";

const EditTeacherPage = async ({ params }: { params: { id: string } }) => {
  const res = await getSingleTeacher(params.id);
  console.log("Single Teacher Response:", res);

  const teacher = res.data;

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return <EditTeacherForm teacher={teacher} />;
};

export default EditTeacherPage;
