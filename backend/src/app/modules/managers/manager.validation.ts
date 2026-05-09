import { z } from "zod";

export const createManagerZodSchema = z.object({
  name: z.string(),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  picture: z.string().optional(),
  designation: z.string().optional(),
  biography: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const updateManagerZodSchema = z.object({
  name: z.string().optional(),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  picture: z.string().optional(),
  designation: z.string().optional(),
  biography: z.string().optional(),
  isActive: z.boolean().optional(),
});
