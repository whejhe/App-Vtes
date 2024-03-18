import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    foroId: {
        type: Number,
        unique: true,
        required: true
    },
    userId: {
        type: Number,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

export const Post = mongoose.model('Post', postSchema);