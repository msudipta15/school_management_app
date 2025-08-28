import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
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
    subjects: [{ type: String }],
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    resetpassword: { type: Boolean, default: false },
  },

  { timestamps: true }
);

export const teacherModel = mongoose.model("Teacher", teacherSchema);
