import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
    id: Number,
    userId: Number,
    name: String,
    url: String,
    public: Boolean
});