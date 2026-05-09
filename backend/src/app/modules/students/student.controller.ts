import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { IGraduateStudent } from "./student.interface";
import { GraduateService } from "./student.service";

const createGraduate = catchAsync(async (req: Request, res: Response) => {
  const payload: IGraduateStudent = {
    ...req.body,
    picture: (req.files as Express.Multer.File[]).map((file) => file.path),
  };
  const result = await GraduateService.createGraduate(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Graduate created successfully",
    data: result,
  });
});
const getAllGraduates = catchAsync(async (req: Request, res: Response) => {
  const result = await GraduateService.getAllGraduates();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Graduates retrieved successfully",
    data: result,
  });
});

const getSingleGraduate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const result = await GraduateService.getSingleGraduate(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Graduate retrieved successfully",
    data: result,
  });
});

const updateGraduate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const result = await GraduateService.updateGraduate(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Graduate updated successfully",
    data: result,
  });
});

const deleteGraduate = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  await GraduateService.deleteGraduate(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Graduate deleted successfully",
    data: null,
  });
});

export const GraduateController = {
  getAllGraduates,
  getSingleGraduate,
  updateGraduate,
  deleteGraduate,
  createGraduate,
};
