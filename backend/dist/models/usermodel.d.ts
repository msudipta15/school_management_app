import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
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
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    password: string;
    role: "superadmin" | "admin" | "teacher" | "student";
    profile?: {
        phone?: string | null;
        gender?: "M" | "F" | "Other" | null;
    } | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=usermodel.d.ts.map