import mongoose from "mongoose";

const { Schema, model } = mongoose;

const imageSchema = new Schema({
    userId: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        unique: true,
    }
});

export const Image = model('Image', imageSchema);
