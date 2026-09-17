"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const manager_model_1 = require("./manager.model");
const createManager = async (payload) => {
    const result = await manager_model_1.Manager.create(payload);
    return result;
};
const getAllManagers = async () => {
    return await manager_model_1.Manager.find();
};
const getSingleManager = async (id) => {
    return await manager_model_1.Manager.findById(id);
};
const updateManager = async (id, payload) => {
    return await manager_model_1.Manager.findByIdAndUpdate(id, payload, { new: true });
};
const deleteManager = async (id) => {
    return await manager_model_1.Manager.findByIdAndDelete(id);
};
exports.ManagerService = {
    createManager,
    getAllManagers,
    getSingleManager,
    updateManager,
    deleteManager,
};
