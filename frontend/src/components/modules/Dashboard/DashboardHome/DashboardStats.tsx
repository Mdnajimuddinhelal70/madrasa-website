import { BookOpen, GraduationCap, UserPlus, Users } from "lucide-react";

interface DashboardStatsProps {
  totalTeachers: number;
  totalStudents: number;
  activeStudents: number;
  totalManagers: number;
}

const DashboardStats = ({
  totalTeachers,
  totalStudents,
  activeStudents,
  totalManagers,
}: DashboardStatsProps) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Teachers */}
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

      {/* Total Students */}
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

            <h3 className="mt-2 text-3xl font-bold">{activeStudents}</h3>
          </div>

          <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
            <BookOpen size={24} />
          </div>
        </div>
      </div>

      {/* Total Managers */}
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
  );
};

export default DashboardStats;
