"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { createTeacherZodSchema } from "@/schemas/teacher.schema";
import { updateTeacher } from "@/services/teacher/updateTeacher";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { DynamicArrayInput } from "./DynamicArrayInput";
import { TeacherImageUploader } from "./TeacherImageUploader";

type Teacher = any;

export default function EditTeacherForm({ teacher }: { teacher: Teacher }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTeacherZodSchema),
    defaultValues: {
      name: teacher?.name || "",
      fatherName: teacher?.fatherName || "",
      motherName: teacher?.motherName || "",
      village: teacher?.village || "",
      postOffice: teacher?.postOffice || "",
      thana: teacher?.thana || "",
      district: teacher?.district || "",
      phone: teacher?.phone || "",
      email: teacher?.email || "",
      education: teacher?.education || [],
      previousPositions: teacher?.previousPositions || [],
      currentPosition: teacher?.currentPosition || "",
      biography: teacher?.biography || "",
      picture: [],
      startYear: teacher?.startYear || undefined,
      endYear: teacher?.endYear || undefined,
    },
  });

  const onSubmit = async (values: any) => {
    try {
      setSubmitting(true);

      const fd = new FormData();

      // image
      values.picture?.forEach((file: File) => {
        fd.append("files", file);
      });

      const { picture, education, previousPositions, ...rest } = values;

      Object.entries(rest).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== "") {
          fd.append(k, String(v));
        }
      });

      education?.forEach((e: string) => fd.append("education", e));
      previousPositions?.forEach((p: string) =>
        fd.append("previousPositions", p),
      );

      const res = await updateTeacher(teacher._id, fd);

      if (res.success) {
        toast.success("Teacher updated successfully ✅");
        router.push("/dashboard/teachers");
        router.refresh();
      } else {
        toast.error(res.message || "Update failed ❌");
      }
    } catch (err: any) {
      toast.error("Something went wrong ❌");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6"
      encType="multipart/form-data"
    >
      {/* 🔹 Name */}
      <Controller
        control={control}
        name="name"
        render={({ field }) => <Input {...field} placeholder="Name" />}
      />

      {/* 🔹 Email */}
      <Controller
        control={control}
        name="email"
        render={({ field }) => <Input {...field} placeholder="Email" />}
      />

      {/* 🔹 Phone */}
      <Controller
        control={control}
        name="phone"
        render={({ field }) => <Input {...field} placeholder="Phone" />}
      />

      {/* 🔹 Address */}
      <Controller
        control={control}
        name="village"
        render={({ field }) => <Input {...field} placeholder="Village" />}
      />

      <Controller
        control={control}
        name="district"
        render={({ field }) => <Input {...field} placeholder="District" />}
      />

      {/* 🔹 Position */}
      <Controller
        control={control}
        name="currentPosition"
        render={({ field }) => (
          <Input {...field} placeholder="Current Position" />
        )}
      />

      {/* 🔹 Years */}
      <Controller
        control={control}
        name="startYear"
        render={({ field }) => (
          <Input
            type="number"
            value={field.value ?? ""}
            onChange={(e) =>
              field.onChange(
                e.target.value === "" ? undefined : Number(e.target.value),
              )
            }
            placeholder="Start Year"
          />
        )}
      />

      <Controller
        control={control}
        name="endYear"
        render={({ field }) => (
          <Input
            type="number"
            value={field.value ?? ""}
            onChange={(e) =>
              field.onChange(
                e.target.value === "" ? undefined : Number(e.target.value),
              )
            }
            placeholder="End Year"
          />
        )}
      />

      {/* 🔹 Arrays */}
      <DynamicArrayInput
        control={control as Control<any>}
        name="education"
        label="Education"
      />

      <DynamicArrayInput
        control={control as Control<any>}
        name="previousPositions"
        label="Previous Positions"
      />

      {/* 🔹 Biography */}
      <Controller
        control={control}
        name="biography"
        render={({ field }) => <Textarea {...field} placeholder="Biography" />}
      />

      {/* 🔹 Image */}
      <Controller
        control={control}
        name="picture"
        render={({ field }) => (
          <TeacherImageUploader
            files={field.value || []}
            onChange={field.onChange}
          />
        )}
      />

      {/* 🔹 Submit */}
      <Button type="submit" disabled={submitting} className="w-full">
        {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Update Teacher
      </Button>
    </form>
  );
}
