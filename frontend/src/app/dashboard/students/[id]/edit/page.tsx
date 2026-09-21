import EditStudentForm from "@/components/modules/Students/EditStudentForm";
import { getStudentById } from "@/services/student/getStudentById";

interface EditStudentPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditStudentPage = async ({ params }: EditStudentPageProps) => {
  const { id } = await params;

  const result = await getStudentById(id);

  if (!result.success || !result.data) {
    return (
      <div className="p-6">
        <p className="text-red-500">{result.message || "Student not found"}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Edit Student</h1>

      <EditStudentForm student={result.data} />
    </div>
  );
};

export default EditStudentPage;
