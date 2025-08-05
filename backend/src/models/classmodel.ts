import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  name: { type: String, require: true },
  classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    require: true,
  },
});

export const classModel = mongoose.model("Class", classSchema);
