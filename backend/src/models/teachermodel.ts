import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    require: true,
  },
  subjects: [{ type: String }],
  classes: [{ type: String }],
});

export const teacherModel = mongoose.model("Teacher", teacherSchema);
