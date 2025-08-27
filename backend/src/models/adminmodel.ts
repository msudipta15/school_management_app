import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    schoolCode: {
      type: String,
      ref: "School",
      required: true,
    },
  },
  { timestamps: true }
);

export const adminModel = mongoose.model("Admin", adminSchema);
