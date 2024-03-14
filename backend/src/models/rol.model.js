import mongoose from "mongoose";

const { Schema } = mongoose;

const rolSchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
});