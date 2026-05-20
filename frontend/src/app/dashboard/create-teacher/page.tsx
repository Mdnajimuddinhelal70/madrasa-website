import { CreateTeacherForm } from "@/components/modules/Teachers/CreateTeacherForm";

export const metadata = {
  title: "Create Teacher | Admin",
};

export default function CreateTeacherPage() {
  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create Teacher</h1>
        <p className="text-muted-foreground mt-1">
          Add a new teacher profile to the system.
        </p>
      </div>

      <CreateTeacherForm />
    </div>
  );
}
