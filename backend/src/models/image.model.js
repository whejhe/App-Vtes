import mongoose from "mongoose";
import connectDB from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";

const { Schema } = mongoose;

const imageSchema = new Schema({
    _id: {
        type: Number,
        default: uuidv4
    },
    userId: {
        type: [String],
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
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
    public: {
        type: Boolean,
        default: true,
    }
});


export const Image = connectDB.model('Image', imageSchema);
