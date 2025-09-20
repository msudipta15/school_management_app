import express, { Router } from "express";
import { authorizerole } from "../middlewares/rolemiddleware.js";
const studentrouter = Router();
studentrouter.post("/register", authorizerole("superadmin", "admin"), async (req, res) => { });
export { studentrouter };
//# sourceMappingURL=studentroutes.js.map