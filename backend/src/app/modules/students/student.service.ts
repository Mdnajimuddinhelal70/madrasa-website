import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudent = async (payload: IStudent) => {
  const result = await Student.create(payload);

  return result;
};

const getAllStudents = async () => {
  const result = await Student.find().sort({ completionYear: -1 });

  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findById(id);

  return result;
};

const updateStudent = async (id: string, payload: Partial<IStudent>) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteStudent = async (id: string) => {
  const result = await Student.findByIdAndDelete(id);

  return result;
};

export const StudentService = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  createStudent,
};
