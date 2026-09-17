import { CreateManagersForm } from "@/components/modules/Managers/CreateManagersForm";

export const metadata = {
  title: "Create Manager | Admin",
};

export default function CreateManagerPage() {
  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create Manager</h1>
        <p className="text-muted-foreground mt-1">
          Add a new manager profile to the system.
        </p>
      </div>

      <CreateManagersForm />
    </div>
  );
}
