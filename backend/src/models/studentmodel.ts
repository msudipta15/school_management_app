import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  class: { type: String, require: true },
  section: { type: String },
  roll: { type: String, require: true },
  guardian_name: { type: String, require: true },
  contact: { type: String, require: true },
  address: { type: String, require: true },
});

export const studentModel = mongoose.model("Student", studentSchema);
