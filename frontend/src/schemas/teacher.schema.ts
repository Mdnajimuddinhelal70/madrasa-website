import { z } from "zod";

export const createTeacherZodSchema = z.object({
  name: z.string(),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  education: z.array(z.string()).optional(),
  previousPositions: z.array(z.string()).optional(),
  currentPosition: z.string().optional(),
  biography: z.string().optional(),
  picture: z.array(z.instanceof(File)).optional(),
  startYear: z.number().optional(),
  endYear: z.number().optional(),
});
