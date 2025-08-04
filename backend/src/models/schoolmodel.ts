import mongoose, { Schema } from "mongoose";

const schoolSchema = new Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  contactEmail: { type: String },
  contactPhone: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const schoolModel = mongoose.model("School", schoolSchema);
