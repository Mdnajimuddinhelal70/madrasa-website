/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginUser = async (
  _currentState: any,
  formData: FormData,
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Login failed");
    }

    (await cookies()).set("accessToken", result.data.token, {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
    redirect("/dashboard");
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Login Error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Login Failed. Invalid email or password.",
    };
  }
};

// This function is for testing purposes to verify that the token is being sent correctly with the request. In a real application, you would typically have a more secure and robust way to handle authentication and user data fetching.
export const getMe = async () => {
  const res = await fetch("http://localhost:5000/api/v1/auth/me", {
    method: "GET",
    credentials: "include",
  });

  return res.json();
};
