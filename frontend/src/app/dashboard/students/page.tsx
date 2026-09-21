import StudentsTable from "@/components/modules/Students/StudentTable";
import { getAllStudents } from "@/services/student/getAllStudents";

const StudentsPage = async () => {
  const result = await getAllStudents();

  return (
    <div className="space-y-6">
      <StudentsTable
        students={result.success && result.data ? result.data : []}
      />
    </div>
  );
};

export default StudentsPage;
