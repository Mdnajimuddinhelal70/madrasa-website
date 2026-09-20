import { z } from "zod";

export const createStudentZodSchema = z.object({
  name: z.string(),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  guardianPhone: z.string().optional(),
  picture: z.string().optional(),
  completionYear: z.number(),
  biography: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const updateStudentZodSchema = z.object({
  name: z.string().optional(),
  completionYear: z.number().optional(),
  biography: z.string().optional(),
});
