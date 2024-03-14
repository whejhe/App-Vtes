import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
    description: String,
    date: String
});