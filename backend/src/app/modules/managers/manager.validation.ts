import { z } from "zod";

export const createManagerZodSchema = z.object({
  name: z.string().min(1, "Manager name is required"),
  phone: z.string().optional(),
  picture: z.string().optional(),
  description: z.string().optional(),
});

export const updateManagerZodSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  picture: z.string().optional(),
  description: z.string().optional(),
});
