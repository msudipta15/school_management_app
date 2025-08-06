import mongoose, { Schema } from "mongoose";
const studentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
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
}, { timestamps: true });
export const studentModel = mongoose.model("Student", studentSchema);
//# sourceMappingURL=studentmodel.js.map