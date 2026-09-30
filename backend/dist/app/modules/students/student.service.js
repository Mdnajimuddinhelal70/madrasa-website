"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_model_1 = require("./student.model");
const createStudent = async (payload) => {
    const result = await student_model_1.Student.create(payload);
    return result;
};
const getAllStudents = async () => {
    const result = await student_model_1.Student.find().sort({ completionYear: -1 });
    return result;
};
const getSingleStudent = async (id) => {
    const result = await student_model_1.Student.findById(id);
    return result;
};
const updateStudent = async (id, payload) => {
    const result = await student_model_1.Student.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteStudent = async (id) => {
    const result = await student_model_1.Student.findByIdAndDelete(id);
    return result;
};
exports.StudentService = {
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
    createStudent,
};
