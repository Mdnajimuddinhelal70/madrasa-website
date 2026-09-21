/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { studentUpdateSchema } from "@/schemas/students/student.schema";
import { updateStudent } from "@/services/student/updateStudent";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Student {
  _id: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  village?: string;
  postOffice?: string;
  thana?: string;
  district?: string;
  phone?: string;
  guardianPhone?: string;
  picture?: string;
  completionYear: number;
  biography?: string;
  isActive: boolean;
}

interface EditStudentFormProps {
  student: Student;
}

const EditStudentForm = ({ student }: EditStudentFormProps) => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const form = useForm({
    resolver: zodResolver(studentUpdateSchema),

    defaultValues: {
      name: student.name || "",
      fatherName: student.fatherName || "",
      motherName: student.motherName || "",
      village: student.village || "",
      postOffice: student.postOffice || "",
      thana: student.thana || "",
      district: student.district || "",
      phone: student.phone || "",
      guardianPhone: student.guardianPhone || "",
      completionYear: student.completionYear,
      biography: student.biography || "",
    },
  });

  const onSubmit = async (values: any) => {
    try {
      setIsSubmitting(true);
      setServerError("");

      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("fatherName", values.fatherName || "");
      formData.append("motherName", values.motherName || "");
      formData.append("village", values.village || "");
      formData.append("postOffice", values.postOffice || "");
      formData.append("thana", values.thana || "");
      formData.append("district", values.district || "");
      formData.append("phone", values.phone || "");
      formData.append("guardianPhone", values.guardianPhone || "");

      formData.append("completionYear", String(values.completionYear));

      formData.append("biography", values.biography || "");

      // New picture
      if (selectedImage) {
        formData.append("files", selectedImage);
      }

      const result = await updateStudent(student._id, formData);

      if (!result.success) {
        setServerError(result.message || "Failed to update student");
        return;
      }

      router.push("/dashboard/students");
      // router.refresh();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Student Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Student Name
          </label>

          <Input
            id="name"
            placeholder="Enter student name"
            {...form.register("name")}
          />

          {form.formState.errors.name && (
            <p className="text-sm text-red-500">
              {form.formState.errors.name.message as string}
            </p>
          )}
        </div>

        {/* Father Name */}
        <div className="space-y-2">
          <label htmlFor="fatherName" className="text-sm font-medium">
            Father Name
          </label>

          <Input
            id="fatherName"
            placeholder="Enter father name"
            {...form.register("fatherName")}
          />

          {form.formState.errors.fatherName && (
            <p className="text-sm text-red-500">
              {form.formState.errors.fatherName.message as string}
            </p>
          )}
        </div>

        {/* Mother Name */}
        <div className="space-y-2">
          <label htmlFor="motherName" className="text-sm font-medium">
            Mother Name
          </label>

          <Input
            id="motherName"
            placeholder="Enter mother name"
            {...form.register("motherName")}
          />

          {form.formState.errors.motherName && (
            <p className="text-sm text-red-500">
              {form.formState.errors.motherName.message as string}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>

          <Input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            {...form.register("phone")}
          />

          {form.formState.errors.phone && (
            <p className="text-sm text-red-500">
              {form.formState.errors.phone.message as string}
            </p>
          )}
        </div>

        {/* Guardian Phone */}
        <div className="space-y-2">
          <label htmlFor="guardianPhone" className="text-sm font-medium">
            Guardian Phone
          </label>

          <Input
            id="guardianPhone"
            type="tel"
            placeholder="Enter guardian phone number"
            {...form.register("guardianPhone")}
          />

          {form.formState.errors.guardianPhone && (
            <p className="text-sm text-red-500">
              {form.formState.errors.guardianPhone.message as string}
            </p>
          )}
        </div>

        {/* Village */}
        <div className="space-y-2">
          <label htmlFor="village" className="text-sm font-medium">
            Village
          </label>

          <Input
            id="village"
            placeholder="Enter village"
            {...form.register("village")}
          />

          {form.formState.errors.village && (
            <p className="text-sm text-red-500">
              {form.formState.errors.village.message as string}
            </p>
          )}
        </div>

        {/* Post Office */}
        <div className="space-y-2">
          <label htmlFor="postOffice" className="text-sm font-medium">
            Post Office
          </label>

          <Input
            id="postOffice"
            placeholder="Enter post office"
            {...form.register("postOffice")}
          />

          {form.formState.errors.postOffice && (
            <p className="text-sm text-red-500">
              {form.formState.errors.postOffice.message as string}
            </p>
          )}
        </div>

        {/* Thana */}
        <div className="space-y-2">
          <label htmlFor="thana" className="text-sm font-medium">
            Thana
          </label>

          <Input
            id="thana"
            placeholder="Enter thana"
            {...form.register("thana")}
          />

          {form.formState.errors.thana && (
            <p className="text-sm text-red-500">
              {form.formState.errors.thana.message as string}
            </p>
          )}
        </div>

        {/* District */}
        <div className="space-y-2">
          <label htmlFor="district" className="text-sm font-medium">
            District
          </label>

          <Input
            id="district"
            placeholder="Enter district"
            {...form.register("district")}
          />

          {form.formState.errors.district && (
            <p className="text-sm text-red-500">
              {form.formState.errors.district.message as string}
            </p>
          )}
        </div>

        {/* Completion Year */}
        <div className="space-y-2">
          <label htmlFor="completionYear" className="text-sm font-medium">
            Completion Year
          </label>

          <Input
            id="completionYear"
            type="number"
            {...form.register("completionYear", {
              valueAsNumber: true,
            })}
          />

          {form.formState.errors.completionYear && (
            <p className="text-sm text-red-500">
              {form.formState.errors.completionYear.message as string}
            </p>
          )}
        </div>

        {/* Biography */}
        <div className="space-y-2">
          <label htmlFor="biography" className="text-sm font-medium">
            Biography
          </label>

          <Textarea
            id="biography"
            placeholder="Enter student biography"
            className="min-h-32"
            {...form.register("biography")}
          />

          {form.formState.errors.biography && (
            <p className="text-sm text-red-500">
              {form.formState.errors.biography.message as string}
            </p>
          )}
        </div>

        {/* Current Picture */}
        {student.picture && !selectedImage && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Picture</label>

            <div>
              <Image
                src={student.picture}
                alt={student.name}
                width={120}
                height={120}
                className="h-28 w-28 rounded-lg object-cover"
              />
            </div>
          </div>
        )}

        {/* Change Picture */}
        <div className="space-y-2">
          <label htmlFor="picture" className="text-sm font-medium">
            Change Picture
          </label>

          <Input
            id="picture"
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                setSelectedImage(file);
              }
            }}
          />

          {selectedImage && (
            <p className="text-sm text-muted-foreground">
              Selected: {selectedImage.name}
            </p>
          )}
        </div>

        {/* Server Error */}
        {serverError && <p className="text-sm text-red-500">{serverError}</p>}

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Updating..." : "Update Student"}
        </Button>
      </form>
    </div>
  );
};

export default EditStudentForm;
