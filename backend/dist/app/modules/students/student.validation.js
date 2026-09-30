"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentZodSchema = exports.createStudentZodSchema = void 0;
const zod_1 = require("zod");
exports.createStudentZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    village: zod_1.z.string().optional(),
    postOffice: zod_1.z.string().optional(),
    thana: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    guardianPhone: zod_1.z.string().optional(),
    picture: zod_1.z.string().optional(),
    completionYear: zod_1.z.coerce.number().int(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.coerce.boolean().optional(),
});
exports.updateStudentZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).optional(),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    village: zod_1.z.string().optional(),
    postOffice: zod_1.z.string().optional(),
    thana: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    guardianPhone: zod_1.z.string().optional(),
    picture: zod_1.z.string().optional(),
    completionYear: zod_1.z.coerce.number().int().optional(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.coerce.boolean().optional(),
});
