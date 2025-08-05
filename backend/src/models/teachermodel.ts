import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    subjects: [{ type: String }],
    classes: [{ type: String }],
  },
  { timestamps: true }
);

export const teacherModel = mongoose.model("Teacher", teacherSchema);
