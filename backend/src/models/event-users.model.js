import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";



const { Schema } = mongoose;

const eventUsersSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    eventId: {
        type: String,
        ref: 'Event',
        required: [true, 'El identificador del evento es obligatorio']
    },
    userId: {
        type: String,
        ref: 'User',
        required: [true, 'El identificador de usuario es obligatorio']
    },
    score: {
        type: Number,
        default : 0
    },
    registrationStatus: {
        type: String,
        enum: ['confirmed', 'pending', 'cancelled', 'abandoned'],
        default: 'pending'
    },
    
});


export const EventUsers = connectDB.model('EventUsers', eventUsersSchema)