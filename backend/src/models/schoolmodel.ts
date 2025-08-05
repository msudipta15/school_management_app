import mongoose, { Schema } from "mongoose";

const schoolSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactEmail: { type: String },
  contactPhone: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const schoolModel = mongoose.model("School", schoolSchema);
