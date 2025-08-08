import jwt from "jsonwebtoken";
import type mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (userid: string, role: string) => {
  const JWT_KEY = process.env.JWT_KEY;
  if (!JWT_KEY) {
    console.log("Invalid jwt key");
    return;
  }

  const token = jwt.sign({ id: userid, role: role }, JWT_KEY);

  return token;
};
