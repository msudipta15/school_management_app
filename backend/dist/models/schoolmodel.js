import mongoose, { Schema } from "mongoose";
const schoolSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactEmail: { type: String },
    contactPhone: { type: String },
}, { timestamps: true });
export const schoolModel = mongoose.model("School", schoolSchema);
//# sourceMappingURL=schoolmodel.js.map