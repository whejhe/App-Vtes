import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const cardsSchema = new Schema({
    _id:{
        type: Number,
        default: uuidv4
    },
    deckId: {
        type: Number,
        ref: 'Deck'
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: [
        {
            type: String
        }
    ]
});


export const Cards = connectDB.model('Cards', cardsSchema);