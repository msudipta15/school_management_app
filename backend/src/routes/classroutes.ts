import { Router } from "express";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { schoolModel } from "../models/schoolmodel.js";
import { classModel } from "../models/classmodel.js";
import { teacherModel } from "../models/teachermodel.js";

const classrouter = Router();

classrouter.post(
  "/:schoolCode/create",
  authmiddleware,
  authorizerole("superadmin", "admin"),
  async (req, res) => {
    const name = req.body.name;
    const section = req.body.section;
    const schoolCode = req.params.schoolCode;
    const classteacher = req.body.classteacher;

    try {
      const school = await schoolModel.findOne({ schoolCode });
      const classTeacher = await teacherModel.findOne({
        _id: classteacher,
        schoolCode: schoolCode,
      });

      if (!school) {
        return res
          .status(400)
          .json({ msg: "No school found corresponding to the school code !" });
      }

      const duplicate = await classModel.findOne({
        name,
        section,
        schoolId: school._id,
      });

      if (duplicate) {
        return res.status(409).json({ msg: "Class already exists" });
      }

      if (!classTeacher) {
        return res.status(400).json({ msg: "Invalid teacher id !" });
      }

      const new_class = await classModel.create({
        name,
        section,
        schoolId: school._id,
        classteacher,
      });

      res.status(200).json({
        msg: `Class created successfully`,
        class: new_class,
      });
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong !" });
    }
  }
);

export { classrouter };
