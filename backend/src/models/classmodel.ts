import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  name: { type: String, required: true },
  classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const classModel = mongoose.model("Class", classSchema);
