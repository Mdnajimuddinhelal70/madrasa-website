"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth/loginUser";

const LoginAdmin = () => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Login to your account</p>
        </div>

        <form action={formAction} className="space-y-5">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              className="mt-1"
            />

            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1"
            />

            <InputFieldError field="password" state={state} />
          </Field>

          {/* Login Button */}
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Logging in..." : "Login"}
          </Button>

          {/* Back to Home */}
          <div className="text-center text-sm">
            <Link href="/" className="font-medium text-primary hover:underline">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
