"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createStudent } from "@/services/student/createStudent";

// ========================================
// Student Form Schema
// ========================================
const studentFormSchema = z.object({
name: z
.string()
.min(2, "Student name must be at least 2 characters"),

fatherName: z.string().optional(),

motherName: z.string().optional(),

village: z.string().optional(),

postOffice: z.string().optional(),

thana: z.string().optional(),

district: z.string().optional(),

phone: z.string().optional(),

guardianPhone: z.string().optional(),

completionYear: z
.number()
.int("Completion year must be a whole number")
.min(1900, "Enter a valid completion year"),

biography: z.string().optional(),

picture: z
.instanceof(File)
.optional(),
});

// ========================================
// Form Type
// ========================================
type CreateStudentFormValues = z.infer<
typeof studentFormSchema

> ;

// ========================================
// Component
// ========================================
export default function CreateStudentForm() {
const [submitting, setSubmitting] = useState(false);

const {
register,
handleSubmit,
reset,
setValue,
formState: { errors },
} = useForm<CreateStudentFormValues>({
resolver: zodResolver(studentFormSchema),


defaultValues: {
  name: "",
  fatherName: "",
  motherName: "",
  village: "",
  postOffice: "",
  thana: "",
  district: "",
  phone: "",
  guardianPhone: "",
  completionYear: new Date().getFullYear(),
  biography: "",
  picture: undefined,
},


});

// ========================================
// Submit
// ========================================
const onSubmit = async (
values: CreateStudentFormValues
) => {
try {
setSubmitting(true);


  const formData = new FormData();

  // ========================================
  // Single Student Picture
  // ========================================
  if (values.picture instanceof File) {
    formData.append("file", values.picture);
  }

  // ========================================
  // Student Data
  // ========================================
  const { picture, ...studentData } = values;

  formData.append(
    "data",
    JSON.stringify(studentData)
  );

  // ========================================
  // Create Student
  // ========================================
  const response = await createStudent(formData);

  if (response.success) {
    toast.success(
      response.message ||
        "Student created successfully"
    );

    // Reset Form
    reset({
      name: "",
      fatherName: "",
      motherName: "",
      village: "",
      postOffice: "",
      thana: "",
      district: "",
      phone: "",
      guardianPhone: "",
      completionYear: new Date().getFullYear(),
      biography: "",
      picture: undefined,
    });
  } else {
    toast.error(
      response.message ||
        "Failed to create student"
    );
  }
} catch (error) {
  console.error(
    "Create student error:",
    error
  );

  toast.error(
    error instanceof Error
      ? error.message
      : "Something went wrong"
  );
} finally {
  setSubmitting(false);
}


};

return ( <form
   onSubmit={handleSubmit(onSubmit)}
   className="space-y-6"
 >
{/* ========================================
Student Name
======================================== */} <div className="space-y-2"> <label
       htmlFor="name"
       className="text-sm font-medium"
     >
Student Name </label>


    <Input
      id="name"
      placeholder="Enter student name"
      {...register("name")}
    />

    {errors.name && (
      <p className="text-sm text-destructive">
        {errors.name.message}
      </p>
    )}
  </div>

  {/* ========================================
      Father & Mother Name
  ======================================== */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Father */}
    <div className="space-y-2">
      <label
        htmlFor="fatherName"
        className="text-sm font-medium"
      >
        Father&apos;s Name
      </label>

      <Input
        id="fatherName"
        placeholder="Enter father's name"
        {...register("fatherName")}
      />

      {errors.fatherName && (
        <p className="text-sm text-destructive">
          {errors.fatherName.message}
        </p>
      )}
    </div>

    {/* Mother */}
    <div className="space-y-2">
      <label
        htmlFor="motherName"
        className="text-sm font-medium"
      >
        Mother&apos;s Name
      </label>

      <Input
        id="motherName"
        placeholder="Enter mother's name"
        {...register("motherName")}
      />

      {errors.motherName && (
        <p className="text-sm text-destructive">
          {errors.motherName.message}
        </p>
      )}
    </div>
  </div>

  {/* ========================================
      Address
  ======================================== */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Village */}
    <div className="space-y-2">
      <label
        htmlFor="village"
        className="text-sm font-medium"
      >
        Village
      </label>

      <Input
        id="village"
        placeholder="Enter village"
        {...register("village")}
      />

      {errors.village && (
        <p className="text-sm text-destructive">
          {errors.village.message}
        </p>
      )}
    </div>

    {/* Post Office */}
    <div className="space-y-2">
      <label
        htmlFor="postOffice"
        className="text-sm font-medium"
      >
        Post Office
      </label>

      <Input
        id="postOffice"
        placeholder="Enter post office"
        {...register("postOffice")}
      />

      {errors.postOffice && (
        <p className="text-sm text-destructive">
          {errors.postOffice.message}
        </p>
      )}
    </div>

    {/* Thana */}
    <div className="space-y-2">
      <label
        htmlFor="thana"
        className="text-sm font-medium"
      >
        Thana
      </label>

      <Input
        id="thana"
        placeholder="Enter thana"
        {...register("thana")}
      />

      {errors.thana && (
        <p className="text-sm text-destructive">
          {errors.thana.message}
        </p>
      )}
    </div>

    {/* District */}
    <div className="space-y-2">
      <label
        htmlFor="district"
        className="text-sm font-medium"
      >
        District
      </label>

      <Input
        id="district"
        placeholder="Enter district"
        {...register("district")}
      />

      {errors.district && (
        <p className="text-sm text-destructive">
          {errors.district.message}
        </p>
      )}
    </div>
  </div>

  {/* ========================================
      Phone
  ======================================== */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Student Phone */}
    <div className="space-y-2">
      <label
        htmlFor="phone"
        className="text-sm font-medium"
      >
        Student Phone
      </label>

      <Input
        id="phone"
        type="tel"
        placeholder="Enter student phone"
        {...register("phone")}
      />

      {errors.phone && (
        <p className="text-sm text-destructive">
          {errors.phone.message}
        </p>
      )}
    </div>

    {/* Guardian Phone */}
    <div className="space-y-2">
      <label
        htmlFor="guardianPhone"
        className="text-sm font-medium"
      >
        Guardian Phone
      </label>

      <Input
        id="guardianPhone"
        type="tel"
        placeholder="Enter guardian phone"
        {...register("guardianPhone")}
      />

      {errors.guardianPhone && (
        <p className="text-sm text-destructive">
          {errors.guardianPhone.message}
        </p>
      )}
    </div>
  </div>

  {/* ========================================
      Completion Year
  ======================================== */}
  <div className="space-y-2">
    <label
      htmlFor="completionYear"
      className="text-sm font-medium"
    >
      Completion Year
    </label>

    <Input
      id="completionYear"
      type="number"
      placeholder="Enter completion year"
      {...register("completionYear", {
        valueAsNumber: true,
      })}
    />

    {errors.completionYear && (
      <p className="text-sm text-destructive">
        {errors.completionYear.message}
      </p>
    )}
  </div>

  {/* ========================================
      Biography
  ======================================== */}
  <div className="space-y-2">
    <label
      htmlFor="biography"
      className="text-sm font-medium"
    >
      Biography
    </label>

    <Textarea
      id="biography"
      placeholder="Write student's biography"
      className="min-h-32 resize-none"
      {...register("biography")}
    />

    {errors.biography && (
      <p className="text-sm text-destructive">
        {errors.biography.message}
      </p>
    )}
  </div>

  {/* ========================================
      Student Picture - Single File
  ======================================== */}
  <div className="space-y-2">
    <label
      htmlFor="picture"
      className="text-sm font-medium"
    >
      Student Picture
    </label>

    <Input
      id="picture"
      type="file"
      accept="image/*"
      onChange={(event) => {
        const file =
          event.target.files?.[0];

        setValue(
          "picture",
          file,
          {
            shouldValidate: true,
          }
        );
      }}
    />

    {errors.picture && (
      <p className="text-sm text-destructive">
        {errors.picture.message}
      </p>
    )}
  </div>

  {/* ========================================
      Submit Button
  ======================================== */}
  <Button
    type="submit"
    disabled={submitting}
  >
    {submitting
      ? "Creating..."
      : "Create Student"}
  </Button>
</form>


);
}
