import { IGraduateStudent } from "./student.interface";
import { GraduateStudent } from "./student.model";

const createGraduate = async (payload: IGraduateStudent) => {
  const result = await GraduateStudent.create(payload);
  return result;
};

const getAllGraduates = async () => {
  const result = await GraduateStudent.find().sort({ completionYear: -1 });
  return result;
};

const getSingleGraduate = async (id: string) => {
  const result = await GraduateStudent.findById(id);
  return result;
};

const updateGraduate = async (
  id: string,
  payload: Partial<IGraduateStudent>,
) => {
  const result = await GraduateStudent.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteGraduate = async (id: string) => {
  const result = await GraduateStudent.findByIdAndDelete(id);
  return result;
};

export const GraduateService = {
  getAllGraduates,
  getSingleGraduate,
  updateGraduate,
  deleteGraduate,
  createGraduate,
};
