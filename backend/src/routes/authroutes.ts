import { Router } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userModel } from "../models/usermodel.js";
import { generateToken } from "../utils/generatetoken.js";
import { authmiddleware } from "../middlewares/authmiddleware.js";
import type { Request } from "express";
import { adminModel } from "../models/adminmodel.js";
import { authorizerole } from "../middlewares/rolemiddleware.js";

dotenv.config();

const authrouter = Router();

interface AuthenticationRequest extends Request {
  userid?: string;
  role?: string;
}

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
  "/resetpassword",
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
      const user = await userModel.findOne({ _id: userid });
      const admin = await adminModel.findOne({ userId: userid });

      if (!user) {
        return res.status(400).json({ msg: "No user found" });
      }

      const validpassword = await bcrypt.compare(oldpassword, user.password);

      if (!validpassword) {
        return res.status(401).json({ msg: "Invalid old password !" });
      }

      const isSame = await bcrypt.compare(newpassword, user.password);

      if (isSame) {
        return res
          .status(400)
          .json({ msg: "New password can not be same as old password !" });
      }

      const hashed = await bcrypt.hash(newpassword, 10);

      user.password = hashed;

      if (admin) {
        admin.resetpassword = true;
      }

      await user.save();

      res.status(200).json({ msg: "Password updated successfully" });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong !" });
    }
  }
);

export { authrouter };
