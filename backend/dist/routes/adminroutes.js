import { Router } from "express";
import dotenv from "dotenv";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";
import { schoolModel } from "../models/schoolmodel.js";
dotenv.config();
const adminrouter = Router();
adminrouter.post("/addschool", authmiddleware, authorizerole("superadmin"), async (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const contactEmail = req.body.email;
    const contactPhone = req.body.phone;
    const duplicate_school = await schoolModel.findOne({ name: name });
    if (duplicate_school) {
        return res.status(409).json({ msg: "School already exists !" });
    }
    try {
        const school = await schoolModel.create({
            name,
            address,
            contactEmail,
            contactPhone,
        });
        res.status(200).json({ msg: `${school.name}  is created` });
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
});
export { adminrouter };
//# sourceMappingURL=adminroutes.js.map