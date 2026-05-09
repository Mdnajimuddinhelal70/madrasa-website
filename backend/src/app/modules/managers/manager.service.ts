import { IManager } from "./manager.interface";
import { Manager } from "./manager.model";

const createManager = async (payload: IManager) => {
  const result = await Manager.create(payload);
  return result;
};

const getAllManagers = async () => {
  return await Manager.find();
};

const getSingleManager = async (id: string) => {
  return await Manager.findById(id);
};

const updateManager = async (id: string, payload: Partial<IManager>) => {
  return await Manager.findByIdAndUpdate(id, payload, { new: true });
};

const deleteManager = async (id: string) => {
  return await Manager.findByIdAndDelete(id);
};

export const ManagerService = {
  createManager,
  getAllManagers,
  getSingleManager,
  updateManager,
  deleteManager,
};
