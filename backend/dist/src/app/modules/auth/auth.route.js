"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post("/login", auth_controller_1.AuthController.loginAdmin);
router.get("/me", (0, checkAuth_1.checkAuth)("admin"), auth_controller_1.AuthController.getMe);
exports.AuthRoutes = router;
