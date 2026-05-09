import httpStatus from "http-status";
import AppError from "../../errorHelpers/AppError";
import type { ITeacher } from "./teacher.interface";
import { Teacher } from "./teacher.model";

const createTeacher = async (payload: ITeacher) => {
  const result = await Teacher.create(payload);
  return result;
};

const getAllTeachers = async () => {
  return await Teacher.find();
};

const getSingleTeacher = async (id: string) => {
  const result = await Teacher.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Teacher not found");
  }
  return result;
};

const updateTeacher = async (id: string, payload: Partial<ITeacher>) => {
  const result = await Teacher.findByIdAndUpdate(id, payload, { new: true });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Teacher not found");
  }

  return result;
};

const deleteTeacher = async (id: string) => {
  const result = await Teacher.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Teacher not found");
  }

  return result;
};

export const TeacherService = {
  createTeacher,
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
};
