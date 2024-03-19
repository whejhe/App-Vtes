import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import {connectDB} from "../service/mongoDB";

const { Schema } = mongoose;

const deckSchema = new Schema({
    _id: {
        type: Number,
        default:uuidv4
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        default: true,
    },
    cards:{
        type: [Number],
        ref: 'Cards'
    }
});

export const Deck = connectDB.model('Deck', deckSchema)