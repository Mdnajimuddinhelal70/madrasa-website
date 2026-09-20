import { IStudents } from "./student.interface";
import { Students } from "./student.model";

const createStudent = async (payload: IStudents) => {
  const result = await Students.create(payload);

  return result;
};

const getAllStudents = async () => {
  const result = await Students.find().sort({ completionYear: -1 });

  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Students.findById(id);

  return result;
};

const updateStudent = async (id: string, payload: Partial<IStudents>) => {
  const result = await Students.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteStudent = async (id: string) => {
  const result = await Students.findByIdAndDelete(id);

  return result;
};

export const StudentService = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  createStudent,
};
