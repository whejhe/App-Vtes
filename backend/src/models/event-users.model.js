import mongoose from "mongoose";

const { Schema } = mongoose;

const eventUsersSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    eventId: {
        type: Number,
        unique: true,
        required: true
    },
    userId: {
        type: Number,
        unique: true,
        required: true
    }
});

export const EventUsers = mongoose.model('EventUsers', eventUsersSchema)