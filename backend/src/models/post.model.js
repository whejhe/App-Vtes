import mongoose from "mongoose";
import connectDB from "../service/mongoDB";
import { v4 as uuidv4 } from "uuid";

const { Schema } = mongoose;


const postSchema = new Schema({
    _id: {
        type: Number,
        default: uuidv4, 
    },
    foroId: {
        type: Number,
        ref: 'Foro',
        required: true
    },
    userId: {
        type: String,
        ref: 'User',
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
},
{
    timestamps: true
}); 


export const Post = connectDB.model('Post', postSchema);