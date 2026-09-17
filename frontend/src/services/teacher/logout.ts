// services/auth/logout.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutUser = async () => {
  const cookiesList = await cookies();
  cookiesList.delete("accessToken");

  redirect("/");
};
