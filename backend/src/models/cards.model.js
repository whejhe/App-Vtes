import mongoose from "mongoose";

const { Schema } = mongoose;

const cardsSchema = new Schema({
    id: Number,
    deckId: Number,
    name: String,
    image: String,
    description: String,
    type: String
});