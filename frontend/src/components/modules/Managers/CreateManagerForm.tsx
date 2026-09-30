"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, Resolver, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createManagerZodSchema } from "@/schemas/manager/manager.schema";
import { createManager } from "@/services/manager/createManager";
import { CreateManagerFormValues } from "@/types/manager.interface";

export const CreateManagerForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, reset } = useForm<CreateManagerFormValues>({
    resolver: zodResolver(
      createManagerZodSchema,
    ) as unknown as Resolver<CreateManagerFormValues>,

    defaultValues: {
      name: "",
      phone: "",
      description: "",
      picture: undefined,
    },
  });

  const onSubmit = async (values: CreateManagerFormValues) => {
    try {
      setSubmitting(true);

      const formData = new FormData();

      // Separate file from manager data
      const { picture, ...managerData } = values;

      // Manager information
      formData.append("data", JSON.stringify(managerData));

      // Manager picture
      if (picture instanceof File) {
        formData.append("file", picture);
      }

      const response = await createManager(formData);

      console.log("Create Manager Response:", response);

      if (response.success) {
        toast.success(response.message || "Manager created successfully");

        reset();
      } else {
        toast.error(response.message || "Failed to create manager");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      encType="multipart/form-data"
    >
      {/* ================= Manager Information ================= */}
      <Card>
        <CardHeader>
          <CardTitle>Manager Information</CardTitle>
        </CardHeader>

        <CardContent>
          <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Name *</FieldLabel>

                  <Input
                    id="name"
                    placeholder="Md. Karim Uddin"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>

                  <Input
                    id="phone"
                    type="tel"
                    placeholder="017XXXXXXXX"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Description */}
            <Controller
              control={control}
              name="description"
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="md:col-span-2"
                >
                  <FieldLabel htmlFor="description">Description</FieldLabel>

                  <Textarea
                    id="description"
                    placeholder="Write a short description about the manager..."
                    rows={5}
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
      </Card>

      {/* ================= Manager Picture ================= */}
      <Card>
        <CardHeader>
          <CardTitle>Manager Picture</CardTitle>
        </CardHeader>

        <CardContent>
          <Controller
            control={control}
            name="picture"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="picture">Profile Picture</FieldLabel>

                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    field.onChange(file);
                  }}
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </CardContent>
      </Card>

      {/* ================= Submit ================= */}
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => reset()}
          disabled={submitting}
        >
          Reset
        </Button>

        <Button type="submit" disabled={submitting}>
          {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

          {submitting ? "Creating..." : "Create Manager"}
        </Button>
      </div>
    </form>
  );
};
