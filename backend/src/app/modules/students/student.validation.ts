import { z } from "zod";

export const createStudentZodSchema = z.object({
  name: z.string().min(2),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  guardianPhone: z.string().optional(),
  picture: z.string().optional(),
  completionYear: z.coerce.number().int(),
  biography: z.string().optional(),
  isActive: z.coerce.boolean().optional(),
});

export const updateStudentZodSchema = z.object({
  name: z.string().min(2).optional(),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  guardianPhone: z.string().optional(),
  picture: z.string().optional(),
  completionYear: z.coerce.number().int().optional(),
  biography: z.string().optional(),
  isActive: z.coerce.boolean().optional(),
});
