import httpStatus from "http-status";
import { envVars } from "../../config/env";
import AppError from "../../errorHelpers/AppError";
import { generateToken } from "../../utils/jwt";

const loginAdmin = async (payload: { email: string; password: string }) => {
  if (!payload) {
    throw new AppError(httpStatus.BAD_REQUEST, "Payload missing");
  }
  const { email, password } = payload;

  // check email
  if (email !== envVars.SUPER_ADMIN_EMAIL) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  // check password
  if (password !== envVars.SUPER_ADMIN_PASSWORD) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  // create token
  const token = generateToken(
    { email, role: "admin" },
    envVars.JWT_ACCESS_SECRET as string,
    envVars.JWT_ACCESS_EXPIRES as string,
  );

  return {
    token,
  };
};

export const AuthService = {
  loginAdmin,
};
