import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ITeacher } from "./teacher.interface";
import { TeacherService } from "./teacher.service";

const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const payload: ITeacher = {
    ...req.body,
    picture: ((req.files as Express.Multer.File[]) ?? []).map((f) => f.path),
  };
  const result = await TeacherService.createTeacher(payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Teacher Created Successfully",
    data: result,
  });
});

const getAllTeachers = catchAsync(async (req: Request, res: Response) => {
  const result = await TeacherService.getAllTeachers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Teachers Retrieved Successfully",
    data: result,
  });
});

const getSingleTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const result = await TeacherService.getSingleTeacher(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Teacher Retrieved Successfully",
    data: result,
  });
});

const updateTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  const payload: ITeacher = {
    ...req.body,
    picture: ((req.files as Express.Multer.File[]) ?? []).map((f) => f.path),
  };
  const result = await TeacherService.updateTeacher(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Teacher Updated Successfully",
    data: result,
  });
});

const deleteTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as any;

  await TeacherService.deleteTeacher(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Teacher Deleted Successfully",
    data: null,
  });
});

export const TeacherController = {
  createTeacher,
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
};
