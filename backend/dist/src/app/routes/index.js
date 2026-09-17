"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const manager_route_1 = require("../modules/managers/manager.route");
const student_route_1 = require("../modules/students/student.route");
const teacher_route_1 = require("../modules/teachers/teacher.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/teacher",
        route: teacher_route_1.TeacherRoutes,
    },
    {
        path: "/manager",
        route: manager_route_1.ManagerRoutes,
    },
    {
        path: "/graduate",
        route: student_route_1.GraduateRoutes,
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
