import express from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { GraduateController } from "./student.controller";
import {
  createGraduateZodSchema,
  updateGraduateZodSchema,
} from "./student.validation";

const router = express.Router();
router.post(
  "/create-graduate",
  checkAuth("admin"),
  multerUpload.array("files"),
  validateRequest(createGraduateZodSchema),
  GraduateController.createGraduate,
);

router.get("/all", GraduateController.getAllGraduates);

router.get("/:id", GraduateController.getSingleGraduate);

router.patch(
  "/:id",
  checkAuth("admin"),
  validateRequest(updateGraduateZodSchema),
  GraduateController.updateGraduate,
);

router.delete("/:id", checkAuth("admin"), GraduateController.deleteGraduate);

export const GraduateRoutes = router;
