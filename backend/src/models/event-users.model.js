import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";



const { Schema } = mongoose;

const eventUsersSchema = new Schema({
    _id: {
        type: Number,
        default: uuidv4
    },
    eventId: {
        type: Number,
        ref: 'Event',
        required: true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    }
});


export const EventUsers = connectDB.model('EventUsers', eventUsersSchema)