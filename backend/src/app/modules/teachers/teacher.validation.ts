import { z } from "zod";

export const createTeacherZodSchema = z.object({
  name: z.string({
    error: "Name is required",
  }),

  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  education: z.array(z.string()).optional(),
  startYear: z.coerce.number().optional(),
  endYear: z.coerce.number().optional(),
  currentPosition: z.string().optional(),
  previousPositions: z.array(z.string()).optional(),
  biography: z.string().optional(),
  isActive: z.boolean().optional(),
});
