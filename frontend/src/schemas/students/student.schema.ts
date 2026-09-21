import { z } from "zod";

export const studentCreateSchema = z.object({
  name: z.string().min(2, "Student name must be at least 2 characters").trim(),

  fatherName: z.string().trim().optional(),

  motherName: z.string().trim().optional(),

  village: z.string().trim().optional(),

  postOffice: z.string().trim().optional(),

  thana: z.string().trim().optional(),

  district: z.string().trim().optional(),

  phone: z.string().trim().optional(),

  guardianPhone: z.string().trim().optional(),

  completionYear: z
    .number()
    .min(1900, "Invalid completion year")
    .max(2100, "Invalid completion year"),

  biography: z.string().trim().optional(),
});

export const studentUpdateSchema = studentCreateSchema;

export type StudentCreateInput = z.infer<typeof studentCreateSchema>;

export type StudentUpdateInput = z.infer<typeof studentUpdateSchema>;
