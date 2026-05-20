import { getToken } from "@/lib/auth";
import { redirect } from "next/navigation";

const DashboardHomePage = async () => {
  const token = await getToken();

  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2c0202]">
        Welcome to the Dashboard
      </h1>
      <p className="mt-4 text-gray-700">
        This is the dashboard home page. Here you can manage your content and
        view analytics.
      </p>
    </div>
  );
};

export default DashboardHomePage;
