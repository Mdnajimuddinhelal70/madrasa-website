import { Router } from "express";

// import { UserControllers } from "./user.controller";

const router = Router();

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
export const UserRoutes = router;
