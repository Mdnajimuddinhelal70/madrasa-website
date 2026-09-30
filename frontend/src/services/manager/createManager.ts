"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import { IManager } from "@/types/manager.interface";
import { IApiResponse } from "@/types/user.interface";

export const createManager = async (
  formData: FormData,
): Promise<IApiResponse<IManager>> => {
  try {
    const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

    if (!baseApiUrl) {
      throw new Error("API URL is not configured");
    }

    const accessToken = (await cookies()).get("accessToken")?.value;

    const response = await fetch(`${baseApiUrl}/manager/create-manager`, {
      method: "POST",
      headers: {
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
      body: formData,
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to create manager");
    }

    revalidateTag("MANAGERS", "max");

    return result;
  } catch (error) {
    console.error("Create Manager Error:", error);

    throw new Error(
      error instanceof Error ? error.message : "Failed to create manager",
    );
  }
};
