"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const student_controller_1 = require("./student.controller");
const student_validation_1 = require("./student.validation");
const router = express_1.default.Router();
router.post("/create", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.single("file"), (0, validateRequest_1.validateRequest)(student_validation_1.createStudentZodSchema), student_controller_1.StudentController.createStudent);
router.get("/all", student_controller_1.StudentController.getAllStudents);
router.get("/:id", student_controller_1.StudentController.getSingleStudent);
router.patch("/:id", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.single("file"), (0, validateRequest_1.validateRequest)(student_validation_1.updateStudentZodSchema), student_controller_1.StudentController.updateStudent);
router.delete("/:id", (0, checkAuth_1.checkAuth)("admin"), student_controller_1.StudentController.deleteStudent);
exports.StudentRoutes = router;
