import mongoose from "mongoose";
export declare const teacherModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
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
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
    subjects: string[];
    classes: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=teachermodel.d.ts.map