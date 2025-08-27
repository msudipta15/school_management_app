import mongoose, { Schema } from "mongoose";
const adminSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    schoolCode: {
        type: String,
        ref: "School",
        required: true,
    },
    resetpassword: { type: Boolean, default: false },
}, { timestamps: true });
export const adminModel = mongoose.model("Admin", adminSchema);
//# sourceMappingURL=adminmodel.js.map