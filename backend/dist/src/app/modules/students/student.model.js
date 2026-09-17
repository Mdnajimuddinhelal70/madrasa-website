"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduateStudent = void 0;
const mongoose_1 = require("mongoose");
const graduateSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: String,
    postOffice: String,
    thana: String,
    district: String,
    phone: String,
    picture: { type: [String], default: [] },
    completionYear: { type: Number, required: true },
    biography: String,
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
exports.GraduateStudent = (0, mongoose_1.model)("GraduateStudent", graduateSchema);
