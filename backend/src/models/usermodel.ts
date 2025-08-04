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

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  schoolName: { type: String, require: true },
  schoolAddress: { type: String, require: true },
});

export const userModel = mongoose.model("User", userSchema);
export const adminModel = mongoose.model("Admin", adminSchema);
