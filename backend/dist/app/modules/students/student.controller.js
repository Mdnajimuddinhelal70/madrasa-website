"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const student_service_1 = require("./student.service");
// const createStudent = catchAsync(async (req: Request, res: Response) => {
//   const result = await StudentService.createStudent(req.body);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: "Student created successfully",
//     data: result,
//   });
// });
const createStudent = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const picture = req.file?.path;
    const studentData = {
        ...req.body,
        ...(picture && { picture }),
    };
    const result = await student_service_1.StudentService.createStudent(studentData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Student created successfully",
        data: result,
    });
});
const getAllStudents = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await student_service_1.StudentService.getAllStudents();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Students retrieved successfully",
        data: result,
    });
});
const getSingleStudent = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await student_service_1.StudentService.getSingleStudent(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Student retrieved successfully",
        data: result,
    });
});
const updateStudent = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const picture = req.file?.path;
    const studentData = {
        ...req.body,
        ...(picture && { picture }),
    };
    const result = await student_service_1.StudentService.updateStudent(id, studentData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Student updated successfully",
        data: result,
    });
});
const deleteStudent = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await student_service_1.StudentService.deleteStudent(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Student deleted successfully",
        data: null,
    });
});
exports.StudentController = {
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
    createStudent,
};
