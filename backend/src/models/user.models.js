import mongoose from "mongoose";

const { Schema } = mongoose;	

const userSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: true      
    },
    role:{
        type: String,
        default: "user"
    },
    name:{
        type: String,
        required: true
    },
    nick:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

export const User = mongoose.model('User', userSchema);
