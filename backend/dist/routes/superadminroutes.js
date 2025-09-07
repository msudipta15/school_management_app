import { Router } from "express";
import dotenv from "dotenv";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { schoolModel } from "../models/schoolmodel.js";
import { generatepassword } from "../utils/generatepassword.js";
import { userModel } from "../models/usermodel.js";
import { adminModel } from "../models/adminmodel.js";
import { teacherModel } from "../models/teachermodel.js";
import bcrypt from "bcrypt";
dotenv.config();
const superadminrouter = Router();
superadminrouter.post("/addschool", authmiddleware, authorizerole("superadmin"), async (req, res) => {
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
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
});
superadminrouter.get("/schools", authmiddleware, authorizerole("superadmin"), async (req, res) => {
    try {
        const school = await schoolModel.find({});
        res.status(200).json({ schools: school });
    }
    catch (error) {
        res.status(405).json({ msg: "Something went wrong " });
    }
});
superadminrouter.post("/:schoolCode/createadmin", authmiddleware, authorizerole("superadmin"), async (req, res) => {
    const { name, email } = req.body;
    const role = "admin";
    const password = "a123";
    const schoolCode = req.params.schoolCode;
    const hashpassword = await bcrypt.hash(password, 10);
    try {
        const duplicate = await userModel.findOne({ email });
        if (duplicate) {
            return res.status(409).json({ msg: "User already exists !" });
        }
        const user = await userModel.create({
            name,
            password: hashpassword,
            email,
            role,
        });
        await adminModel.create({ userId: user._id, schoolCode: schoolCode });
        res.status(200).json({ msg: `Success ! Password:${password}` });
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong !" });
    }
});
superadminrouter.post("/:schoolCode/createteacher", authmiddleware, authorizerole("superadmin"), async (req, res) => {
    const schoolCode = req.params.schoolCode;
    const { name, email } = req.body;
    const role = "teacher";
    const password = "t123";
    const hashpassword = await bcrypt.hash(password, 10);
    const duplicate = await userModel.findOne({ email });
    if (duplicate) {
        return res.status(409).json({ msg: "User already exists" });
    }
    try {
        const teacher = await userModel.create({
            name,
            email,
            role,
            password: hashpassword,
        });
        await teacherModel.create({
            userId: teacher._id,
            schoolCode: schoolCode,
        });
        res.status(200).json({ msg: `Success ! Password:${password} ` });
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong !" });
    }
});
export { superadminrouter };
//# sourceMappingURL=superadminroutes.js.map