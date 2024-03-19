import mongoose from "mongoose";
import connectDB from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const librarySchema = new Schema({
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
    deckId: {
        type: [Number],
        ref: 'Deck',
        required: true
    }
});


export const Library = connectDB.model('Library', librarySchema)