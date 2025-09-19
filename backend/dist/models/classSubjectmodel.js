import mongoose, { Schema } from "mongoose";
// Join of teacher , subject and class
// We can get which teacher teaches which subject of a perticular class
const classSubjectSchema = new Schema({
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    teacherIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
    ],
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
}, { timestamps: true });
export const classSubjectModel = mongoose.model("ClassSubject", classSubjectSchema);
//# sourceMappingURL=classSubjectmodel.js.map