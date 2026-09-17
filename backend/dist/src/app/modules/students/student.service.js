"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduateService = void 0;
const student_model_1 = require("./student.model");
const createGraduate = async (payload) => {
    const result = await student_model_1.GraduateStudent.create(payload);
    return result;
};
const getAllGraduates = async () => {
    const result = await student_model_1.GraduateStudent.find().sort({ completionYear: -1 });
    return result;
};
const getSingleGraduate = async (id) => {
    const result = await student_model_1.GraduateStudent.findById(id);
    return result;
};
const updateGraduate = async (id, payload) => {
    const result = await student_model_1.GraduateStudent.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
};
const deleteGraduate = async (id) => {
    const result = await student_model_1.GraduateStudent.findByIdAndDelete(id);
    return result;
};
exports.GraduateService = {
    getAllGraduates,
    getSingleGraduate,
    updateGraduate,
    deleteGraduate,
    createGraduate,
};
