"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const teacher_model_1 = require("./teacher.model");
const createTeacher = async (payload) => {
    const result = await teacher_model_1.Teacher.create(payload);
    return result;
};
const getAllTeachers = async () => {
    return await teacher_model_1.Teacher.find();
};
const getSingleTeacher = async (id) => {
    const result = await teacher_model_1.Teacher.findById(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Teacher not found");
    }
    return result;
};
const updateTeacher = async (id, payload) => {
    const result = await teacher_model_1.Teacher.findByIdAndUpdate(id, payload, {
        returnDocument: "after",
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Teacher not found");
    }
    return result;
};
const deleteTeacher = async (id) => {
    const result = await teacher_model_1.Teacher.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Teacher not found");
    }
    return result;
};
exports.TeacherService = {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher,
};
