import express from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post("/login", AuthController.loginAdmin);
router.get("/me", checkAuth("admin"), AuthController.getMe);

export const AuthRoutes = router;
