import express, { Router } from "express";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";

const app = express();

const subjectrouter = Router();

app.post(
  "/add",
  authmiddleware,
  authorizerole("superadmin", "admin"),
  async (req, res) => {}
);

export { subjectrouter };
