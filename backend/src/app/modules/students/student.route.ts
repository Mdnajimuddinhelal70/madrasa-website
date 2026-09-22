import express from "express";

import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";

import { StudentController } from "./student.controller";
import {
  createStudentZodSchema,
  updateStudentZodSchema,
} from "./student.validation";

const router = express.Router();

router.post(
  "/create",
  checkAuth("admin"),
  multerUpload.single("file"),
  validateRequest(createStudentZodSchema),
  StudentController.createStudent,
);

router.get("/all", StudentController.getAllStudents);

router.get("/:id", StudentController.getSingleStudent);

router.patch(
  "/:id",
  checkAuth("admin"),
  multerUpload.single("file"),
  validateRequest(updateStudentZodSchema),
  StudentController.updateStudent,
);

router.delete("/:id", checkAuth("admin"), StudentController.deleteStudent);

export const StudentRoutes = router;
