import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";

export const checkAuth =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // ✅ আগে কুকি চেক করুন, তারপর header
      const token =
        req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, "No token provided");
      }

      const verifiedUser = verifyToken(
        token,
        envVars.JWT_ACCESS_SECRET as string,
      ) as any;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new AppError(httpStatus.FORBIDDEN, "Forbidden");
      }

      req.user = verifiedUser;
      next();
    } catch (error) {
      next(error);
    }
  };
