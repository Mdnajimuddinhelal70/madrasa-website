/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IApiResponse, ITeacher } from "@/types/user.interface";
import { cookies } from "next/headers";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

export const getAllTeachers = async (): Promise<IApiResponse<ITeacher[]>> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/teacher/all`, {
    method: "GET",
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    next: {
      tags: ["TEACHERS"],
    },
  });

  let data;

  try {
    data = await res.json();
  } catch (err: any) {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch teachers");
  }

  return data;
};
