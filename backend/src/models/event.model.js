import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
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
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export const Event = mongoose.model('Event', eventSchema)