import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userModel } from "../models/usermodel.js";
import { generateToken } from "../utils/generatetoken.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import type { Request } from "express";

dotenv.config();

const authrouter = Router();

interface AuthenticationRequest extends Request {
  userid?: string;
  role?: string;
}

// Will add email verification later
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
  } catch (error) {
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

    const token = generateToken(user._id.toString(), user.role);

    res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong !" });
  }
});

authrouter.get("/role", authmiddleware, async (req, res) => {
  //@ts-ignore
  const role = req.role;
  res.json({ msg: `Role: ${role}` });
});

authrouter.post(
  "/changepassword",
  authmiddleware,
  async (req: AuthenticationRequest, res) => {
    const userid = req.userid;
    const { oldpassword, newpassword } = req.body;

    if (!oldpassword || !newpassword) {
      return res
        .status(400)
        .json({ msg: "Both old and new password required !" });
    }

    try {
      const user = userModel.findOne({});
    } catch (error) {}
  }
);

export { authrouter };
