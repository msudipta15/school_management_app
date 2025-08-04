import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  name: { type: String, require: true },
  classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

export const classModel = mongoose.model("Class", classSchema);
