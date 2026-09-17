import { Schema, model } from "mongoose";
import { IManager } from "./manager.interface";

const managerSchema = new Schema<IManager>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    picture: { type: [String], default: [] },
    description: { type: String, trim: true },
  },
  { timestamps: true },
);

export const Manager = model<IManager>("Manager", managerSchema);
