"use server";

import { IApiResponse, IStudent } from "@/interfaces/student/student.interface";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

export const createStudent = async (
  formData: FormData,
): Promise<IApiResponse<IStudent>> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/student/create`, {
    method: "POST",
    body: formData,
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {},
    cache: "no-store",
  });

  let data;

  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to create student");
  }

  if (data?.success) {
    revalidateTag("STUDENTS", "max");
  }

  return data;
};
