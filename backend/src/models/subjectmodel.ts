import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String }, // example: MATH10 = class 10 Math ( This is optional )
    description: { type: String },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
  },
  { timestamps: true }
);

export const subjectModel = mongoose.model("Subject", subjectSchema);
