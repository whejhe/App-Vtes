import mongoose from "mongoose";
import {connectDB} from "../service/mongoDB.js";
import { v4 as uuidv4 } from "uuid";


const { Schema } = mongoose;

const foroSchema = new Schema({
    _id: {
        type: Number,
        default: uuidv4
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        // select: false,
    },
    body: {
        type: String,
        required: true
    }
},{
    timestamps: true
});


export const Foro = connectDB.model('Foro', foroSchema);