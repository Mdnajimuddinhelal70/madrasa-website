/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IManager } from "@/types/manager.interface";
import { IApiResponse } from "@/types/user.interface";
import { cookies } from "next/headers";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;
export const createManager = async (
  formData: FormData,
): Promise<IApiResponse<IManager>> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${baseApiUrl}/manager/create-manager`, {
    method: "POST",
    body: formData,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    cache: "no-store",
  });

  console.log("Create Manager Response:", res);
  let data;

  try {
    data = await res.json();
    console.log("Create Manager Data:", data);
  } catch (err: any) {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  console.log("Create Manager Response:", data);

  return data;
};
