"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const teacher_controller_1 = require("./teacher.controller");
const teacher_validation_1 = require("./teacher.validation");
const router = express_1.default.Router();
router.post("/create-teacher", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.array("files"), (0, validateRequest_1.validateRequest)(teacher_validation_1.createTeacherZodSchema), teacher_controller_1.TeacherController.createTeacher);
router.get("/all", teacher_controller_1.TeacherController.getAllTeachers);
router.get("/:id", teacher_controller_1.TeacherController.getSingleTeacher);
router.patch("/:id", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.array("files"), teacher_controller_1.TeacherController.updateTeacher);
router.delete("/:id", (0, checkAuth_1.checkAuth)("admin"), teacher_controller_1.TeacherController.deleteTeacher);
exports.TeacherRoutes = router;
