"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacherZodSchema = void 0;
const zod_1 = require("zod");
exports.createTeacherZodSchema = zod_1.z.object({
    name: zod_1.z.string({
        error: "Name is required",
    }),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    village: zod_1.z.string().optional(),
    postOffice: zod_1.z.string().optional(),
    thana: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    education: zod_1.z.array(zod_1.z.string()).optional(),
    startYear: zod_1.z.coerce.number().optional(),
    endYear: zod_1.z.coerce.number().optional(),
    currentPosition: zod_1.z.string().optional(),
    previousPositions: zod_1.z.array(zod_1.z.string()).optional(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
});
