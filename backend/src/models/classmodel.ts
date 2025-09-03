import mongoose, { Schema } from "mongoose";

const classSchema = new Schema(
  {
    name: { type: String, required: true },
    section: { type: String, required: true },
    classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    strength: { type: Number, default: 0 }, // Auto update while adding students with $inc
  },
  { timestamps: true }
);

export const classModel = mongoose.model("Class", classSchema);
