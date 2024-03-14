import mongoose from "mongoose";

const { Schema, model } = mongoose;

const imageSchema = new Schema({
    userId: Number,
    name: String,
    description: String,
    imageUrl: String,
    public_id: String
});

export const Image = model('Image', imageSchema);
