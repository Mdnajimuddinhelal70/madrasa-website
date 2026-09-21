"use server";

import { cookies } from "next/headers";

export interface Student {
  _id: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  village?: string;
  postOffice?: string;
  thana?: string;
  district?: string;
  phone?: string;
  guardianPhone?: string;
  picture?: string;
  completionYear: number;
  biography?: string;
  isActive: boolean;
}

interface GetStudentByIdResponse {
  success: boolean;
  data?: Student;
  message?: string;
}

export const getStudentById = async (
  id: string,
): Promise<GetStudentByIdResponse> => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/student/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to get student",
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
