import mongoose from "mongoose";

const { Schema } = mongoose;

const librarySchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
    cards: Array
});