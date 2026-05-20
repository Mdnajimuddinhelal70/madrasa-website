import { Types } from "mongoose";

export interface ITeacher {
  _id?: Types.ObjectId;
  name: string;
  fatherName?: string;
  motherName?: string;
  village?: string;
  postOffice?: string;
  thana?: string;
  district?: string;
  phone?: string;
  email?: string;
  picture?: string[];
  education?: string[];
  startYear?: number;
  endYear?: number;
  currentPosition?: string;
  previousPositions?: string[];
  biography?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
