"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduateController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const student_service_1 = require("./student.service");
const createGraduate = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = {
        ...req.body,
        picture: req.files.map((file) => file.path),
    };
    const result = await student_service_1.GraduateService.createGraduate(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Graduate created successfully",
        data: result,
    });
});
const getAllGraduates = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await student_service_1.GraduateService.getAllGraduates();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Graduates retrieved successfully",
        data: result,
    });
});
const getSingleGraduate = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await student_service_1.GraduateService.getSingleGraduate(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Graduate retrieved successfully",
        data: result,
    });
});
const updateGraduate = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await student_service_1.GraduateService.updateGraduate(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Graduate updated successfully",
        data: result,
    });
});
const deleteGraduate = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await student_service_1.GraduateService.deleteGraduate(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Graduate deleted successfully",
        data: null,
    });
});
exports.GraduateController = {
    getAllGraduates,
    getSingleGraduate,
    updateGraduate,
    deleteGraduate,
    createGraduate,
};
