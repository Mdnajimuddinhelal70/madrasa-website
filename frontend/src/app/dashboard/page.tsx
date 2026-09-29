/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DashboardStats,
  QuickActions,
  WelcomeSection,
} from "@/components/modules/Dashboard/DashboardHome";
import { getToken } from "@/lib/auth";
import { getAllManagers } from "@/services/manager/getAllManagers";
import { getAllStudents } from "@/services/student/getAllStudents";
import { getAllTeachers } from "@/services/teacher/GetAllTeachers";

import { redirect } from "next/navigation";

const DashboardHomePage = async () => {
  // Check authentication first
  const token = await getToken();

  if (!token) {
    redirect("/login");
  }

  // Fetch dashboard data
  const [teacherResponse, studentsResponse, managersResponse] =
    await Promise.all([getAllTeachers(), getAllStudents(), getAllManagers()]);

  // Calculate statistics
  const totalTeachers = teacherResponse.data.length;

  const totalStudents = studentsResponse.data.length;

  const totalManagers = managersResponse.data.length;

  const activeStudents = studentsResponse.data.filter(
    (student: any) => student.isActive === true,
  ).length;

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      {/* Welcome Section */}
      <WelcomeSection />

      {/* Dashboard Statistics */}
      <DashboardStats
        totalTeachers={totalTeachers}
        totalStudents={totalStudents}
        activeStudents={activeStudents}
        totalManagers={totalManagers}
      />

      {/* Quick Actions */}
      <QuickActions />
    </div>
  );
};

export default DashboardHomePage;
