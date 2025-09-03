import { Router } from "express";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";

const classrouter = Router();

classrouter.post(
  "/create",
  authmiddleware,
  authorizerole("superadmin", "admin"),
  async (req, res) => {}
);

export { classrouter };
