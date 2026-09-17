"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    motherName: { type: String, trim: true },
    village: { type: String, trim: true },
    postOffice: { type: String, trim: true },
    thana: { type: String, trim: true },
    district: { type: String, trim: true },
    phone: {
        type: String,
        trim: true,
    },
    email: { type: String, unique: true, lowercase: true, trim: true },
    picture: { type: [String], default: [] },
    education: { type: [String], default: [] },
    startYear: { type: Number, min: 1900 },
    endYear: { type: Number },
    currentPosition: { type: String, trim: true },
    previousPositions: { type: [String], default: [] },
    biography: { type: String, trim: true },
}, { timestamps: true });
exports.Teacher = (0, mongoose_1.model)("Teacher", teacherSchema);
