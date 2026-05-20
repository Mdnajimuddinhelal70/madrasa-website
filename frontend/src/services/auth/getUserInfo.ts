/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

export const getUserInfo = async (): Promise<any> => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result?.message || "Failed to fetch user info");
    }
    return result;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
