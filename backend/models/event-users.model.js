import mongoose from "mongoose";

const { Schema } = mongoose;

const eventUsersSchema = new Schema({
    id: Number,
    eventId: Number,
    userId: Number
});