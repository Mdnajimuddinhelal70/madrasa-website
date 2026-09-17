"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const manager_controller_1 = require("./manager.controller");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const manager_validation_1 = require("./manager.validation");
const router = express_1.default.Router();
// Create Manager
router.post("/create-manager", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.array("files"), (0, validateRequest_1.validateRequest)(manager_validation_1.createManagerZodSchema), manager_controller_1.ManagerController.createManager);
// Get all Managers
router.get("/all", manager_controller_1.ManagerController.getAllManagers);
// Get single Manager
router.get("/manager/:id", manager_controller_1.ManagerController.getSingleManager);
// Update Manager
router.patch("/update-manager/:id", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.array("files"), (0, validateRequest_1.validateRequest)(manager_validation_1.updateManagerZodSchema), manager_controller_1.ManagerController.updateManager);
// Delete Manager
router.delete("/delete-manager/:id", (0, checkAuth_1.checkAuth)("admin"), multer_config_1.multerUpload.array("files"), manager_controller_1.ManagerController.deleteManager);
exports.ManagerRoutes = router;
