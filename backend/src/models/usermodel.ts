import mongoose, { Model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["superadmin", "admin", "teacher", "student"],
      default: "student",
    },
    profile: {
      phone: String,
      gender: String,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
