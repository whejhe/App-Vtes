import mongoose from "mongoose";

const { Schema } = mongoose;	

const userSchema = new Schema({
    id: Number,
    name: String,
    email:String,
    password:String,
});
