"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const mongoose_1 = require("mongoose");
const managerSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    picture: { type: [String], default: [] },
    description: { type: String, trim: true },
}, { timestamps: true });
exports.Manager = (0, mongoose_1.model)("Manager", managerSchema);
