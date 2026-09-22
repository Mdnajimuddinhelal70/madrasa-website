import { Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StudentService } from "./student.service";

// const createStudent = catchAsync(async (req: Request, res: Response) => {
//   const result = await StudentService.createStudent(req.body);

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: "Student created successfully",
//     data: result,
//   });
// });

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const picture = req.file?.path;

  const studentData = {
    ...req.body,
    ...(picture && { picture }),
  };

  const result = await StudentService.createStudent(studentData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Student created successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getAllStudents();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Students retrieved successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await StudentService.getSingleStudent(id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Student retrieved successfully",
    data: result,
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const picture = req.file?.path;

  const studentData = {
    ...req.body,
    ...(picture && { picture }),
  };

  const result = await StudentService.updateStudent(id as string, studentData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Student updated successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  await StudentService.deleteStudent(id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Student deleted successfully",
    data: null,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  createStudent,
};
