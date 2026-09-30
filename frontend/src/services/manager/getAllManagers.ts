"use server";

import { cookies } from "next/headers";

import { IManager } from "@/types/manager.interface";

export interface IManagerApiResponse {
  success: boolean;
  message: string;
  data: IManager[];
}

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

export const getAllManagers = async (): Promise<IManagerApiResponse> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/manager/all`, {
    method: "GET",
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {},
    next: {
      tags: ["MANAGERS"],
    },
  });

  let data;

  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch managers");
  }

  return data;
};
