import mongoose from "mongoose";

const { Schema } = mongoose;

const deckSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
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
    cards:{
        type: Array,
        required: true
    }
});

export const Deck = mongoose.model('Deck', deckSchema)