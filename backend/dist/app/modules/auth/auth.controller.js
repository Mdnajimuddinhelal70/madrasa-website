"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const loginAdmin = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await auth_service_1.AuthService.loginAdmin(req.body);
    res.cookie("accessToken", result.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Admin login successful",
        data: result,
    });
});
//   const logout = catchAsync(async (req: Request, res: Response) => {
//   res.clearCookie("accessToken", {
//     httpOnly: true,
//     secure: envVars.NODE_ENV === "production",
//     sameSite: "lax",
//   });
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Logged out successfully",
//     data: null,
//   });
// });
const getMe = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    console.log("User from get me", user);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "User fetched successfully",
        data: user,
    });
});
exports.AuthController = {
    loginAdmin,
    getMe,
};
