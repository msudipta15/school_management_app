import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userModel } from "../models/usermodel.js";
import { generateToken } from "../utils/generatetoken.js";
dotenv.config();
const authrouter = Router();
authrouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists !" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name,
            email,
            password: hashedpassword,
            role,
        });
        await newUser.save();
        res.status(200).json({ msg: "Sign up successfull !" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong !" });
    }
});
authrouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid email !" });
        }
        const validpassword = bcrypt.compare(password, user.password);
        if (!validpassword) {
            return res.status(400).json({ msg: "Invalid password !" });
        }
        const token = generateToken(user._id.toString());
        res.status(200).json({ token: token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong !" });
    }
});
export { authrouter };
//# sourceMappingURL=authroutes.js.map