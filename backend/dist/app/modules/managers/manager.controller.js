"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const manager_service_1 = require("./manager.service");
const createManager = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = {
        ...req.body,
        picture: req.files.map((file) => file.path),
    };
    const result = await manager_service_1.ManagerService.createManager(payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Manager created successfully",
        data: result,
    });
});
const getAllManagers = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await manager_service_1.ManagerService.getAllManagers();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Managers retrieved successfully",
        data: result,
    });
});
const getSingleManager = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await manager_service_1.ManagerService.getSingleManager(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager retrieved successfully",
        data: result,
    });
});
const updateManager = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const payload = {
        ...req.body,
        picture: req.files.map((file) => file.path),
    };
    const result = await manager_service_1.ManagerService.updateManager(id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager updated successfully",
        data: result,
    });
});
const deleteManager = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await manager_service_1.ManagerService.deleteManager(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager deleted successfully",
        data: null,
    });
});
exports.ManagerController = {
    createManager,
    getAllManagers,
    getSingleManager,
    updateManager,
    deleteManager,
};
