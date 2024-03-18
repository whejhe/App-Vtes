import mongoose from "mongoose";

const { Schema } = mongoose;

const foroSchema = new Schema({
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
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

export const Foro = mongoose.model('Foro', foroSchema)