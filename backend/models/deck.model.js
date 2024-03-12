import mongoose from "mongoose";

const { Schema } = mongoose;

const deckSchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
    cards: Array
});