import { GraduationCap, Users } from "lucide-react";
import Link from "next/link";

const QuickActions = () => {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>

        <p className="text-sm text-muted-foreground">
          Quickly access the most common management tasks.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Add Teacher */}
        <Link
          href="/dashboard/create-teacher"
          className="group rounded-2xl border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <GraduationCap
            size={24}
            className="mb-3 text-[#2c0202] transition-transform group-hover:scale-110"
          />

          <h3 className="font-semibold">Add Teacher</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Add a new teacher to the madrasa.
          </p>
        </Link>

        {/* Add Student */}
        <Link
          href="/dashboard/students/create"
          className="group rounded-2xl border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <Users
            size={24}
            className="mb-3 text-[#2c0202] transition-transform group-hover:scale-110"
          />

          <h3 className="font-semibold">Add Student</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Register a new student.
          </p>
        </Link>

        {/* View Teachers */}
        <Link
          href="/dashboard/all-teachers"
          className="group rounded-2xl border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <GraduationCap
            size={24}
            className="mb-3 text-[#2c0202] transition-transform group-hover:scale-110"
          />

          <h3 className="font-semibold">View Teachers</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            View and manage all teachers.
          </p>
        </Link>

        {/* View Students */}
        <Link
          href="/dashboard/students"
          className="group rounded-2xl border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <Users
            size={24}
            className="mb-3 text-[#2c0202] transition-transform group-hover:scale-110"
          />

          <h3 className="font-semibold">View Students</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            View and manage all students.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default QuickActions;
