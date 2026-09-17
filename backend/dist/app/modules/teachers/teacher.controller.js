"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const teacher_service_1 = require("./teacher.service");
const createTeacher = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = {
        ...req.body,
        picture: (req.files ?? []).map((f) => f.path),
    };
    const result = await teacher_service_1.TeacherService.createTeacher(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Teacher Created Successfully",
        data: result,
    });
});
const getAllTeachers = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await teacher_service_1.TeacherService.getAllTeachers();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Teachers Retrieved Successfully",
        data: result,
    });
});
const getSingleTeacher = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await teacher_service_1.TeacherService.getSingleTeacher(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Teacher Retrieved Successfully",
        data: result,
    });
});
const updateTeacher = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const payload = {
        ...req.body,
        picture: (req.files ?? []).map((f) => f.path),
    };
    const result = await teacher_service_1.TeacherService.updateTeacher(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Teacher Updated Successfully",
        data: result,
    });
});
const deleteTeacher = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await teacher_service_1.TeacherService.deleteTeacher(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Teacher Deleted Successfully",
        data: null,
    });
});
exports.TeacherController = {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher,
};
