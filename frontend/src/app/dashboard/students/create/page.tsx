import CreateStudentForm from "@/components/modules/Students/CreateStudentForm";

export default function CreateStudentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Create Student</h1>

        <p className="mt-2 text-muted-foreground">
          Add a new student to the system.
        </p>
      </div>

      <CreateStudentForm />
    </div>
  );
}
