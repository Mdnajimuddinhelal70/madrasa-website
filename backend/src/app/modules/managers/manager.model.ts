import { Schema, model } from "mongoose";
import { IManager } from "./manager.interface";

const managerSchema = new Schema<IManager>(
  {
    name: { type: String, required: true, trim: true },

    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },

    phone: { type: String, trim: true },
    email: { type: String, trim: true, unique: true },

    picture: { type: String },

    designation: { type: String, trim: true },

    biography: { type: String, trim: true },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Manager = model<IManager>("Manager", managerSchema);
