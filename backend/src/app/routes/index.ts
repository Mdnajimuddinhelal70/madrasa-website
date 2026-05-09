import { Router } from "express";

import { AuthRoutes } from "../modules/auth/auth.route";
import { ManagerRoutes } from "../modules/managers/manager.route";
import { GraduateRoutes } from "../modules/students/student.route";
import { TeacherRoutes } from "../modules/teachers/teacher.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/teacher",
    route: TeacherRoutes,
  },
  {
    path: "/manager",
    route: ManagerRoutes,
  },
  {
    path: "/graduate",
    route: GraduateRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
