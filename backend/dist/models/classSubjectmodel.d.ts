import mongoose from "mongoose";
export declare const classSubjectModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherId?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherId?: mongoose.Types.ObjectId | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherId?: mongoose.Types.ObjectId | null;
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
    teacherId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherId?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolId: mongoose.Types.ObjectId;
    classId: mongoose.Types.ObjectId;
    subjectId: mongoose.Types.ObjectId;
    teacherId?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=classSubjectmodel.d.ts.map