"use server";
import { cookies } from "next/headers";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;
export const getAllStudents = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/student/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["STUDENTS"],
    },
  });

  if (!res.ok) {
    const errorText = await res.text();

    console.log("Student API Error:", {
      status: res.status,
      statusText: res.statusText,
      body: errorText,
      apiUrl: process.env.NEXT_PUBLIC_BASE_API,
      hasToken: !!accessToken,
    });

    throw new Error("Failed to fetch students");
  }

  const data = await res.json();

  return data;
};
