import { Router } from "express";
import dotenv from "dotenv";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";

dotenv.config();

const adminrouter = Router();

adminrouter.post(
  "/addschool",
  authmiddleware,
  authorizerole("superadmin"),
  (req, res) => {}
);
