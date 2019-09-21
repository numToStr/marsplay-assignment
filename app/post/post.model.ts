import { Schema, model, Document, SchemaTypes } from "mongoose";

const schema = new Schema(
    {
        _id: {
            type: Number,
            required: true,
        },
        userID: {
            type: SchemaTypes.Number,
            ref: "User",
            required: true,
            index: true,
        },
        title: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
        },
        body: {
            type: String,
            minlength: 4,
            required: true,
            trim: true,
        },
    },
    {
        minimize: true,
        timestamps: true,
    }
);

export type PostModelType = Document & {
    userID: string;
    title: string;
    body: string;
};

export const PostModel = model<PostModelType>("Post", schema);
