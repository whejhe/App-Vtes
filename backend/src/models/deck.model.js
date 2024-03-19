import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import {connectDB} from "../service/mongoDB";

const { Schema } = mongoose;

const deckSchema = new Schema({
    _id: {
        type: String,
        default:uuidv4
    },
    userId: {
        type: String,
        ref: 'User',
        required: [true, 'El identificador de usuario es obligatorio']
    },
    name: {
        type: String,
        required: [true, 'El nombre del mazo es obligatorio']
    },
    public: {
        type: Boolean,
        default: true,
    },
    cardIds:{
        type: [String],
        ref: 'Cards'
    }
});

export const Deck = connectDB.model('Deck', deckSchema)