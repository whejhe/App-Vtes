import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const cardsSchema = new Schema({
    _id:{
        type: String,
        default: uuidv4
    },
    deckId: {
        type: String,
        ref: 'Deck'
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'El nombre de la carta es obligatoria']
    },
    image: {
        type: String,
        unique: true,
        required: [true, 'La imagen de la carta es obligatoria']
    },
    description: {
        type: String,
        required: [true, 'La descripción de la carta es obligatoria']
    },
    type: [
        {
            type: String
        }
    ]
});


export const Cards = connectDB.model('Cards', cardsSchema);