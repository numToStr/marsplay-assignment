import { Schema, model, Document } from "mongoose";

const schema = new Schema(
    {
        _id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            minlength: 4,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        website: {
            type: String,
            minlength: 5,
            required: true,
        },
    },
    {
        minimize: true,
        timestamps: true,
    }
);

export type UserModelType = Document & {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
};

export const UserModel = model<UserModelType>("User", schema);
