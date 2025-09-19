import mongoose from "mongoose";
export declare const classSubjectModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherIds: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=classSubjectmodel.d.ts.map