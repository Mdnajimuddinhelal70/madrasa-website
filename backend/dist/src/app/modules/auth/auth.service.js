"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const env_1 = require("../../config/env");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const jwt_1 = require("../../utils/jwt");
const loginAdmin = async (payload) => {
    if (!payload) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Payload missing");
    }
    const { email, password } = payload;
    // check email
    if (email !== env_1.envVars.SUPER_ADMIN_EMAIL) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials");
    }
    // check password
    if (password !== env_1.envVars.SUPER_ADMIN_PASSWORD) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid credentials");
    }
    // create token
    const token = (0, jwt_1.generateToken)({ email, role: "admin" }, env_1.envVars.JWT_ACCESS_SECRET, env_1.envVars.JWT_ACCESS_EXPIRES);
    return {
        token,
    };
};
exports.AuthService = {
    loginAdmin,
};
