import mongoose from "mongoose";
export declare const adminModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    schoolCode: string;
    userId: mongoose.Types.ObjectId;
    resetpassword: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=adminmodel.d.ts.map