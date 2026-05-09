import express from "express";
import { ManagerController } from "./manager.controller";

import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createManagerZodSchema,
  updateManagerZodSchema,
} from "./manager.validation";

const router = express.Router();

// Create Manager
router.post(
  "/create-manager",
  checkAuth("admin"),
  validateRequest(createManagerZodSchema),
  ManagerController.createManager,
);

// Get all Managers
router.get("/all", ManagerController.getAllManagers);

// Get single Manager
router.get("/manager/:id", ManagerController.getSingleManager);

// Update Manager
router.patch(
  "/update-manager/:id",
  checkAuth("admin"),
  validateRequest(updateManagerZodSchema),
  ManagerController.updateManager,
);

// Delete Manager
router.delete(
  "/delete-manager/:id",
  checkAuth("admin"),
  ManagerController.deleteManager,
);

export const ManagerRoutes = router;
