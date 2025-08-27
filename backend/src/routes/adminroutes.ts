import { Router } from "express";
import dotenv from "dotenv";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { schoolModel } from "../models/schoolmodel.js";

dotenv.config();

const adminrouter = Router();

adminrouter.post(
  "/addschool",
  authmiddleware,
  authorizerole("superadmin"),
  async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const contactEmail = req.body.email;
    const contactPhone = req.body.phone;
    const schoolCode = req.body.schoolCode;

    const duplicate_school_name = await schoolModel.findOne({ name: name });
    const duplicate_school_code = await schoolModel.findOne({
      schoolCode: schoolCode,
    });

    if (duplicate_school_name) {
      return res.status(409).json({ msg: "School already exists !" });
    }

    if (duplicate_school_code) {
      return res.status(409).json({ msg: "School Code already in use !" });
    }

    try {
      const school = await schoolModel.create({
        name,
        address,
        schoolCode,
        contactEmail,
        contactPhone,
      });
      res.status(200).json({ msg: `${school.name}  is created` });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong" });
    }
  }
);

adminrouter.get(
  "/schools",
  authmiddleware,
  authorizerole("superadmin"),
  async (req, res) => {
    try {
      const school = await schoolModel.find({});
      res.status(200).json({ schools: school });
    } catch (error) {
      res.status(405).json({ msg: "Something went wrong " });
    }
  }
);

export { adminrouter };
