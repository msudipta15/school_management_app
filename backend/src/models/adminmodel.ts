import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    require: true,
  },
});

export const adminModel = mongoose.model("Admin", adminSchema);
