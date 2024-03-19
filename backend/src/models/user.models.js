import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { connectDB } from "../service/mongoDB.js";

const { Schema } = mongoose;

// let validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return true;
// };

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

// let validatePassword = function(password) {
//     if(password.length < 8){
//         message: 'La contraseña debe tener al menos 8 caracteres'
//         return false;
//     }else if(password.length > 20){
//         message: 'La contraseña debe tener un maximo de 20 caracteres'
//         return false;
//     }
//     return true;
// };

const userSchema = new Schema({
    _id:{
        type: String,
        default: uuidv4     
    },
    role:{
        type: String,
        default: "user"
    },
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [30, 'El nombre debe tener un maximo de 30 caracteres'],
        // validate:{
        //     validator: function(v){
        //         return this.valueOf.length > 3 && this.valueOf.length < 30
        //     },
        //     message: 'El nombre debe tener entre 3 y 30 caracteres',
        // }
    },
    nick:{
        type: String,
        unique: true,
        required: [true, 'El nick de usuario es obligatorio'],
        minlength: [3, 'El nick debe tener al menos 3 caracteres'],
        maxlength: [30, 'El nick debe tener un maximo de 20 caracteres'],
        // validate:{
        //     validator: function(v){
        //         return this.valueOf.length > 3 && this.valueOf.length < 30
        //     },
        //     message: 'El nick debe tener entre 3 y 30 caracteres',
        // }
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'El email es obligatorio'],
        validate: {
            validator: (v) => emailRegex.test(v),
            message: 'El email no es valido'
        }
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
        validate:{
            validator: (v) => passwordRegex.test(v),
            message: 'La contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial'
        }
        // validate: {
        //     validator: validatePassword,
        //     message: 'La contraseña no es valida',
        // }
    },
}, {
    timestamps: true,
    versionKey: false,
    autoCreate: false
});

export const User = connectDB.model('User', userSchema);
