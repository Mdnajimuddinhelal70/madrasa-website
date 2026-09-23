"use server";
import { cookies } from "next/headers";

export const getAllStudents = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/student/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["STUDENTS"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch students");
  }

  const data = await res.json();

  return data;
};
