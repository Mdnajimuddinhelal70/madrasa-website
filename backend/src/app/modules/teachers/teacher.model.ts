import { model, Schema } from "mongoose";
import type { ITeacher } from "./teacher.interface";

const teacherSchema = new Schema<ITeacher>(
  {
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: { type: String, trim: true },
    postOffice: { type: String, trim: true },
    thana: { type: String, trim: true },
    district: { type: String, trim: true },
    phone: {
      type: String,
      trim: true,
      match: [/^01[3-9]\d{8}$/, "Invalid phone number"],
    },
    email: { type: String, unique: true, lowercase: true, trim: true },
    picture: { type: [String], default: [] },
    education: { type: [String], default: [] },
    startYear: { type: Number, min: 1900 },
    endYear: { type: Number },
    currentPosition: { type: String, trim: true },
    previousPositions: { type: [String], default: [] },
    biography: { type: String, trim: true },
  },
  { timestamps: true },
);

export const Teacher = model<ITeacher>("Teacher", teacherSchema);
