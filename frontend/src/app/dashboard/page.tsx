import { getToken } from "@/lib/auth";
import { getAllManagers } from "@/services/manager/getAllManagers";
import { getAllStudents } from "@/services/student/getAllStudents";
import { getAllTeachers } from "@/services/teacher/GetAllTeachers";
import { BookOpen, GraduationCap, UserPlus, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashboardHomePage = async () => {
  const teacherResponse = await getAllTeachers();
  const studentsResponse = await getAllStudents();
  const managersResponse = await getAllManagers();
  const totalTeachers = teacherResponse.data.length;
  const totalStudents = studentsResponse.data.length;
  const totalManagers = managersResponse.data.length;

  const token = await getToken();

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      {/* Welcome Section */}
      <section className="rounded-2xl bg-amber-200 p-6 text-black shadow-sm md:p-8">
        <p className="mb-2 text-sm font-medium text-black">
          Madrasa Management System
        </p>

        <h2 className="text-2xl font-bold md:text-3xl">
          Welcome to Your Dashboard
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-black md:text-base">
          Manage your madrasa teachers, students, and other important
          information from one place.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Teachers */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Teachers</p>

              <h3 className="mt-2 text-3xl font-bold">{totalTeachers}</h3>
            </div>

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <GraduationCap size={24} />
            </div>
          </div>
        </div>

        {/* Students */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Students</p>

              <h3 className="mt-2 text-3xl font-bold">{totalStudents}</h3>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Active Students */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Students</p>

              <h3 className="mt-2 text-3xl font-bold">--</h3>
            </div>

            <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        {/* Managers */}
        <div className="rounded-2xl border bg-background p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Managers</p>

              <h3 className="mt-2 text-3xl font-bold">{totalManagers}</h3>
            </div>

            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <UserPlus size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <p className="text-sm text-muted-foreground">
            Quickly access the most common management tasks.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
};

export default DashboardHomePage;
