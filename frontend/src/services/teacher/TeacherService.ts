/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IApiResponse, ITeacher } from "@/types/user.interface";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

// ---------- CREATE ----------
export const createTeacher = async (
  formData: FormData,
): Promise<IApiResponse<ITeacher>> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/teacher/create-teacher`, {
    method: "POST",
    body: formData,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    cache: "no-store",
  });

  console.log("Create Teacher Response:", res);
  let data;

  try {
    data = await res.json();
  } catch (err: any) {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  console.log("Create Teacher Response:", data);

  if (data?.success) {
    revalidateTag("TEACHERS", "max");
  }

  return data;
};

// ---------- GET ALL ----------
// export const TeacherService = {
//   async getAllTeachers() {
//     const res = await fetch(`${baseApiUrl}/teacher/all`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch teachers");
//     }

//     return res.json();
//   },
// };

// // ---------- GET ONE ----------
export const getSingleTeacher = async (
  id: string,
): Promise<IApiResponse<ITeacher>> => {
  const res = await fetch(`${baseApiUrl}/teacher/${id}`, {
    next: { tags: [`TEACHER_${id}`] },
  });
  return res.json();
};

export const deleteTeacher = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const res = await fetch(`${baseApiUrl}/teacher/${id}`, {
    method: "DELETE",
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  });

  return res.json();
};
