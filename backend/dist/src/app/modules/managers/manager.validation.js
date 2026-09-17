"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManagerZodSchema = exports.createManagerZodSchema = void 0;
const zod_1 = require("zod");
exports.createManagerZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    designation: zod_1.z.string().optional(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.updateManagerZodSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    fatherName: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    designation: zod_1.z.string().optional(),
    biography: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
});
