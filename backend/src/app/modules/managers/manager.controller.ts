import { Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ManagerService } from "./manager.service";

const createManager = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagerService.createManager(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Manager created successfully",
    data: result,
  });
});

const getAllManagers = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagerService.getAllManagers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Managers retrieved successfully",
    data: result,
  });
});

const getSingleManager = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const result = await ManagerService.getSingleManager(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Manager retrieved successfully",
    data: result,
  });
});

const updateManager = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const result = await ManagerService.updateManager(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Manager updated successfully",
    data: result,
  });
});

const deleteManager = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  await ManagerService.deleteManager(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Manager deleted successfully",
    data: null,
  });
});

export const ManagerController = {
  createManager,
  getAllManagers,
  getSingleManager,
  updateManager,
  deleteManager,
};
