import mongoose from "mongoose";

const { Schema } = mongoose;

const cardsSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    deckId: Number,
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

export const Cards = mongoose.model('Cards', cardsSchema);