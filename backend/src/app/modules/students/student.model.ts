import { Schema, model } from "mongoose";
import { IStudent } from "./student.interface";

const studentsSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: String,
    postOffice: String,
    thana: String,
    district: String,
    phone: {
      type: String,
      trim: true,
    },
    guardianPhone: {
      type: String,
      trim: true,
    },
    picture: { type: String, trim: true },
    completionYear: { type: Number, required: true },
    biography: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Student = model<IStudent>("Student", studentsSchema);
