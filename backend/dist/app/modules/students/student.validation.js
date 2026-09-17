"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGraduateZodSchema = exports.createGraduateZodSchema = void 0;
const zod_1 = require("zod");
exports.createGraduateZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    village: zod_1.z.string().optional(),
    postOffice: zod_1.z.string().optional(),
    thana: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    completionYear: zod_1.z.number(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.updateGraduateZodSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    completionYear: zod_1.z.number().optional(),
    biography: zod_1.z.string().optional(),
});
