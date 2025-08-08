import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authmiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;

  const jwt_key = process.env.JWT_KEY;

  if (!jwt_key) {
    console.log("Invalid jwt_key");
    return;
  }

  if (!token) {
    return res.status(400).json({ msg: "You are not signed in !" });
  }

  try {
    const decoded = jwt.verify(token, jwt_key);

    if (!decoded) {
      res.status(400).json({ msg: "Invalid token. Access denied !" });
    }
  } catch (error) {}
};
