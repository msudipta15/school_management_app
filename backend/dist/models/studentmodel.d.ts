import mongoose from "mongoose";
export declare const studentModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
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
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: mongoose.Types.ObjectId;
    address: string;
    classId: mongoose.Types.ObjectId;
    schoolId: mongoose.Types.ObjectId;
    roll: string;
    guardian_name: string;
    contact: string;
    section?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=studentmodel.d.ts.map