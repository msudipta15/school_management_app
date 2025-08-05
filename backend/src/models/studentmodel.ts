import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  section: { type: String },
  roll: { type: String, required: true },
  guardian_name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const studentModel = mongoose.model("Student", studentSchema);
