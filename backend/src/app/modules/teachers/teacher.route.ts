import express from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { TeacherController } from "./teacher.controller";
import { createTeacherZodSchema } from "./teacher.validation";

const router = express.Router();

router.post(
  "/create-teacher",
  checkAuth("admin"),
  multerUpload.array("files"),
  validateRequest(createTeacherZodSchema),
  TeacherController.createTeacher,
);
router.get("/all", TeacherController.getAllTeachers);
router.get("/single/:id", TeacherController.getSingleTeacher);
router.patch(
  "/:id",
  checkAuth("admin"),
  multerUpload.array("files"),
  TeacherController.updateTeacher,
);
router.delete("/:id", checkAuth("admin"), TeacherController.deleteTeacher);

export const TeacherRoutes = router;
