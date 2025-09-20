import express, { Router } from "express";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { generatepassword } from "../utils/generatepassword.js";

const studentrouter = Router();

studentrouter.post(
  "/register",
  authorizerole("superadmin", "admin"),
  async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const classid = req.body.classid;
    const parent_contact = req.body.parent_contact;
    const address = req.body.address;
    const parent_name = req.body.parent_name;
    const age = req.body.age;
  }
);

export { studentrouter };
