import { z } from "zod";

export const createStudentFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().optional(),
  thana: z.string().optional(),
  district: z.string().optional(),
  phone: z.string().optional(),
  guardianPhone: z.string().optional(),
  completionYear: z.coerce.number().min(1900, "Invalid year"),
  biography: z.string().optional(),
  picture: z.instanceof(File).optional(),
});

export type CreateStudentFormValues = z.infer<typeof createStudentFormSchema>;
