"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
// import { UserControllers } from "./user.controller";
const router = (0, express_1.Router)();
// router.post(
//   "/register",
//   // validateRequest(createUserZodSchema),
//   UserControllers.createUser,
// );
// router.get(
//   "/all-users",
//   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
//   UserControllers.getAllUsers,
// );
// router.get("/me", checkAuth(...Object.values(Role)), UserControllers.getMe);
// /api/v1/user/:id
exports.UserRoutes = router;
