import { Schema, model } from "mongoose";
import { IGraduateStudent } from "./student.interface";

const graduateSchema = new Schema<IGraduateStudent>(
  {
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: String,
    postOffice: String,
    thana: String,
    district: String,
    phone: String,
    picture: { type: [String], default: [] },
    completionYear: { type: Number, required: true },
    biography: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const GraduateStudent = model<IGraduateStudent>(
  "GraduateStudent",
  graduateSchema,
);
