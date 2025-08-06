import mongoose, { Schema } from "mongoose";
const classSchema = new Schema({
    name: { type: String, required: true },
    classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
}, { timestamps: true });
export const classModel = mongoose.model("Class", classSchema);
//# sourceMappingURL=classmodel.js.map