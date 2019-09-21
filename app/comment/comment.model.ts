import { Schema, model, Document, SchemaTypes } from "mongoose";

const schema = new Schema(
    {
        _id: {
            type: Number,
            required: true,
        },
        postID: {
            type: SchemaTypes.Number,
            ref: "User",
            required: true,
            index: true,
        },
        email: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
        },
        name: {
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

export type CommentModelType = Document & {
    postID: string;
    email: string;
    name: string;
    body: string;
};

export const CommentModel = model<CommentModelType>("Comment", schema);
