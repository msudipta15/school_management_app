import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userModel } from "../models/usermodel.js";
dotenv.config();
export async function createSuperAdmin() {
    try {
        const existing = await userModel.findOne({
            email: "superadmin123@gmail.com",
        });
        if (existing) {
            console.log("Superadmin exists");
            return;
        }
        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;
        if (!password) {
            console.log("Error getting password from .env");
            return;
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newSuperAdmin = new userModel({
            name: "Super Admin",
            email: email,
            password: hashedpassword,
            role: "superadmin",
            profile: {
                phone: "00000000000",
                gender: "M",
            },
        });
        await newSuperAdmin.save();
        console.log("Superadmin created.");
    }
    catch (error) {
        console.log("Error creating superadmin", error);
    }
}
//# sourceMappingURL=createsuperadmin.js.map