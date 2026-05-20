/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { createTeacherZodSchema } from "@/schemas/teacher.schema";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Resolver } from "react-hook-form";

import { createTeacher } from "@/services/teacher/TeacherService";
import { CreateTeacherFormValues } from "@/types/teacher.interface";
import { DynamicArrayInput } from "./DynamicArrayInput";
import { TeacherImageUploader } from "./TeacherImageUploader";

export const CreateTeacherForm = () => {
  // const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTeacherFormValues>({
    resolver: zodResolver(
      createTeacherZodSchema,
    ) as unknown as Resolver<CreateTeacherFormValues>,
    defaultValues: {
      name: "",
      fatherName: "",
      motherName: "",
      village: "",
      postOffice: "",
      thana: "",
      district: "",
      phone: "",
      email: "",
      education: [],
      previousPositions: [],
      currentPosition: "",
      biography: "",
      picture: [],
      startYear: undefined,
      endYear: undefined,
    },
  });

  const onSubmit = async (values: CreateTeacherFormValues) => {
    try {
      setSubmitting(true);
      const fd = new FormData();

      // ✅ file upload (FIXED)
      values.picture?.forEach((file) => fd.append("files", file));

      const { picture, education, previousPositions, ...rest } = values;

      // ✅ normal fields
      Object.entries(rest).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== "") {
          fd.append(k, String(v));
        }
      });

      // ✅ array fields
      education?.forEach((e) => fd.append("education", e));
      previousPositions?.forEach((p) => fd.append("previousPositions", p));

      const res = await createTeacher(fd);

      if (res.success) {
        toast.success(res.message || "Teacher created successfully");
        reset();
      } else {
        toast.error(res.message || "Failed to create teacher");
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
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
      {/* ---------- Personal Info ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <Controller
              control={control}
              name="fatherName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fatherName">
                    Father&apos;s Name
                  </FieldLabel>
                  <Input
                    id="fatherName"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={control}
              name="motherName"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="motherName">
                    Mother&apos;s Name
                  </FieldLabel>
                  <Input
                    id="motherName"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="md:col-span-2"
                >
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
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

      {/* ---------- Address ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FieldLegend variant="label">Where do they live?</FieldLegend>
            <FieldDescription>
              Optional — helpful for record keeping.
            </FieldDescription>
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(["village", "postOffice", "thana", "district"] as const).map(
                (key) => (
                  <Controller
                    key={key}
                    control={control}
                    name={key}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={key} className="capitalize">
                          {key}
                        </FieldLabel>
                        <Input
                          id={key}
                          aria-invalid={fieldState.invalid}
                          {...field}
                        />
                        {fieldState.error && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                ),
              )}
            </FieldGroup>
          </FieldSet>
        </CardContent>
      </Card>

      {/* ---------- Career ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Career & Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FieldGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Controller
              control={control}
              name="currentPosition"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="currentPosition">
                    Current Position
                  </FieldLabel>
                  <Input
                    id="currentPosition"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={control}
              name="startYear"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="startYear">Start Year</FieldLabel>
                  <Input
                    id="startYear"
                    type="number"
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const v = e.target.value;
                      field.onChange(v === "" ? undefined : Number(v));
                    }}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={control}
              name="endYear"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="endYear">End Year</FieldLabel>
                  <Input
                    id="endYear"
                    type="number"
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const v = e.target.value;
                      field.onChange(v === "" ? undefined : Number(v));
                    }}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <DynamicArrayInput
            control={control as Control<any>}
            name="education"
            label="Education"
            placeholder="e.g. M.A. in Bangla, DU"
          />

          <DynamicArrayInput
            control={control as Control<any>}
            name="previousPositions"
            label="Previous Positions"
            placeholder="e.g. Assistant Teacher, XYZ School"
          />
        </CardContent>
      </Card>

      {/* ---------- Biography ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <Controller
            control={control}
            name="biography"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="biography">About</FieldLabel>
                <Textarea
                  id="biography"
                  rows={5}
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                <FieldDescription>
                  Short biography — max 2000 characters.
                </FieldDescription>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </CardContent>
      </Card>

      {/* ---------- Pictures + Status ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Pictures & Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Controller
            control={control}
            name="picture"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <TeacherImageUploader
                  files={field.value ?? []}
                  onChange={field.onChange}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </CardContent>
      </Card>

      {/* ---------- Submit ---------- */}
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
          Create Teacher
        </Button>
      </div>
    </form>
  );
};
