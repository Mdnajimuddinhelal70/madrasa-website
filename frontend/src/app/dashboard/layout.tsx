import { getMe } from "@/services/auth/AuthService";
import { redirect } from "next/navigation";

const DasboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  if (!user) {
    redirect("/login");
  }
  return (
    <div>
      <header className="bg-[#2c0202] text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default DasboardLayout;
