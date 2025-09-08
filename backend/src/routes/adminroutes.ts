import { Router } from "express";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { schoolModel } from "../models/schoolmodel.js";
import { classModel } from "../models/classmodel.js";
import { teacherModel } from "../models/teachermodel.js";
import { subjectModel } from "../models/subjectmodel.js";
import { classSubjectModel } from "../models/classSubjectmodel.js";

const adminrouter = Router();

adminrouter.post(
  "/:schoolCode/class/create",
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
        return res.status(400).json({ msg: "Invalid school code !" });
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

adminrouter.post(
  "/:schoolCode/subject/create",
  authmiddleware,
  authorizerole("admin", "superadmin"),
  async (req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const description = req.body.description;
    const schoolCode = req.params.schoolCode;

    try {
      const school = await schoolModel.findOne({ schoolCode: schoolCode });

      if (!school) {
        return res.status(400).json({ msg: "Invalid school code !" });
      }

      const duplicate = await subjectModel.findOne({
        code,
        schoolId: school._id,
      });

      if (duplicate) {
        return res.status(400).json({ msg: "Subject code already exists !" });
      }

      const subject = await subjectModel.create({
        name,
        code,
        description,
        schoolId: school._id,
      });

      res.status(200).json({ msg: "Success", Subject: `${subject}` });
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong !" });
    }
  }
);

adminrouter.post(
  "/:schoolCode/:classname/assign/subject",
  authmiddleware,
  authorizerole("admin", "superadmin"),
  async (req, res) => {
    const schoolCode = req.params.schoolCode;
    const class_name = req.params.classname;
    const subject_name = req.body.name;

    try {
      const school = await schoolModel.findOne({ schoolCode: schoolCode });

      if (!school) {
        return res.status(400).json({ msg: "Invalid school code !" });
      }

      const subject = await subjectModel.findOne({
        name: subject_name,
        schoolId: school._id,
      });

      if (!subject) {
        return res.status(400).json({ msg: "No subject found !" });
      }

      const found_class = await classModel.findOne({
        name: class_name,
        schoolId: school._id,
      });

      if (!found_class) {
        return res.status(400).json({ msg: "Invalid class name !" });
      }

      const duplicate = await classSubjectModel.findOne({
        classId: found_class._id,
        subjectId: subject._id,
        schoolId: school._id,
      });

      if (duplicate) {
        return res
          .status(405)
          .json({ msg: "Subject already assigned to the class !" });
      }

      const assign = await classSubjectModel.create({
        classId: found_class._id,
        subjectId: subject._id,
        schoolId: school._id,
      });

      res.status(200).json({
        msg: `Subject: ${subject.name} assigned to Class:${found_class.name}`,
      });
    } catch (error) {
      return res.status(500).json({ msg: "Something went wrong !" });
    }
  }
);

export { adminrouter };
