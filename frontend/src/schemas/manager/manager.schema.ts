import { z } from "zod";

export const createManagerZodSchema = z.object({
  name: z.string().min(1, "Manager name is required"),

  phone: z.string().optional(),

  description: z.string().optional(),

  picture: z.instanceof(File).optional(),
});
