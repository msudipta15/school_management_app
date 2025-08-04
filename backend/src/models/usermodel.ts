import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: ["superadmin", "admin", "teacher", "student"],
    default: "student",
  },
  profile: {
    phone: String,
    gender: String,
  },
});

export const userModel = mongoose.model("User", userSchema);
