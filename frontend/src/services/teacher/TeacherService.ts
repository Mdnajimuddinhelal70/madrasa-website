/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IApiResponse, ITeacher } from "@/types/user.interface";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_BASE_API;

// ---------- CREATE ----------
export const createTeacher = async (
  formData: FormData,
): Promise<IApiResponse<ITeacher>> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/teacher/create-teacher`, {
    method: "POST",
    body: formData,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    cache: "no-store",
  });

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
// export const getAllTeachers = async (): Promise<IApiResponse<ITeacher[]>> => {
//   const res = await fetch(`${NEXT_PUBLIC_API_URL}/teacher`, {
//     next: { tags: ["TEACHERS"], revalidate: 60 },
//   });
//   return res.json();
// };

// // ---------- GET ONE ----------
// export const getTeacherById = async (
//   id: string,
// ): Promise<IApiResponse<ITeacher>> => {
//   const res = await fetch(`${NEXT_PUBLIC_API_URL}/teacher/${id}`, {
//     next: { tags: [`TEACHER_${id}`] },
//   });
//   return res.json();
// };
