"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const http_status_1 = __importDefault(require("http-status"));
const env_1 = require("../config/env");
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const jwt_1 = require("../utils/jwt");
const checkAuth = (...roles) => (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];
        // console.log(token, "Here is token");
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "No token provided");
        }
        const verifiedUser = (0, jwt_1.verifyToken)(token, env_1.envVars.JWT_ACCESS_SECRET);
        if (roles.length && !roles.includes(verifiedUser.role)) {
            throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Forbidden");
        }
        req.user = verifiedUser;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
