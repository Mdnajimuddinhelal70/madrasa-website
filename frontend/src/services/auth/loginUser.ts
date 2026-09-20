"use server";

import { IInputErrorState } from "@/lib/getInputFieldError";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface LoginState extends IInputErrorState {
  message?: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export const loginUser = async (
  _currentState: LoginState | null,
  formData: FormData,
): Promise<LoginState> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API;

    if (!baseApiUrl) {
      throw new Error("API URL is not configured");
    }

    const res = await fetch(`${baseApiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result: LoginResponse = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Login failed");
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    redirect("/dashboard");
  } catch (error) {
    // Next.js redirect() throws internally, so we must allow it to continue.
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof error.digest === "string" &&
      error.digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    console.error("Login Error:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development" && error instanceof Error
          ? error.message
          : "Login failed. Invalid email or password.",
      errors: [],
    };
  }
};
