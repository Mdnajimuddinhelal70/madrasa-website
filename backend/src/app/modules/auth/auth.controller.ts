import { Request, Response } from "express";
import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginAdmin(req.body);

  res.cookie("accessToken", result.token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Admin login successful",
    data: result,
  });
});

//   const logout = catchAsync(async (req: Request, res: Response) => {
//   res.clearCookie("accessToken", {
//     httpOnly: true,
//     secure: envVars.NODE_ENV === "production",
//     sameSite: "lax",
//   });

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: "Logged out successfully",
//     data: null,
//   });
// });

export const AuthController = {
  loginAdmin,
};
