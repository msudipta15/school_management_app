import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthenticationRequest extends Request {
  userid?: string;
}

export const authmiddleware = (
  req: AuthenticationRequest,
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
    const decoded = jwt.verify(token, jwt_key) as JwtPayload;

    if (!decoded || !decoded.id) {
      res.status(400).json({ msg: "Invalid token. Access denied !" });
    }

    req.userid = decoded.id;
  } catch (error) {}
};
