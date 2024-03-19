import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const customCardsSchema = new Schema({
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
    cost: {
        type: Number,
        required: [true, 'El coste de la carta es obligatorio'],
        min: 1,
        max: 11
    },
    image: {
        type: String,
        unique: true,
        required: [true, 'La imagen de la carta es obligatoria']
    },
    clan: {
        type: String,
        required: [true, 'El clan de la carta es obligatorio']
    },
    disciplines: {
        type: [String],
        required: [true, 'Las disciplinas de la carta son obligatorias']
    },
    description: {
        type: String,
        required: [true, 'La descripción de la carta es obligatoria']
    },
    group:{
        type: Number,
        min: 1,
        max: 7
    },
    type: [
        {
            type: String
        }
    ]
});


export const Cards = connectDB.model('customCards', customCardsSchema);