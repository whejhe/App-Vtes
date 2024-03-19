import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const eventSchema = new Schema({
    _id: {
        type: Number,
        default: uuidv4
    },
    userId: {
        type: [String],
        ref: 'User',
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
},
{
    timestamps: true
});


export const Event = connectDB.model('Event', eventSchema)