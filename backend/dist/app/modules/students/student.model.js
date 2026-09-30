"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentsSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: String,
    postOffice: String,
    thana: String,
    district: String,
    phone: {
        type: String,
        trim: true,
    },
    guardianPhone: {
        type: String,
        trim: true,
    },
    picture: { type: String, trim: true },
    completionYear: { type: Number, required: true },
    biography: String,
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
exports.Student = (0, mongoose_1.model)("Student", studentsSchema);
