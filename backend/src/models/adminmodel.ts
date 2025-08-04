import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  schoolName: { type: String, require: true },
  schoolAddress: { type: String, require: true },
});

export const adminModel = mongoose.model("Admin", adminSchema);
