import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { connectDB } from "../service/mongoDB.js";
import { roles } from "../middlewares/roles.js";

const { Schema } = mongoose;


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;


const userSchema = new Schema({
    _id:{
        type: String,
        default: uuidv4     
    },
    role:{
        type: String,
        enum: ["ADMIN", "USER","COLLABORATOR", "GUEST"],
        default: "USER"
    },
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [30, 'El nombre debe tener un maximo de 30 caracteres'],
    },
    nick:{
        type: String,
        unique: true,
        required: [true, 'El nick de usuario es obligatorio'],
        minlength: [3, 'El nick debe tener al menos 3 caracteres'],
        maxlength: [30, 'El nick debe tener un maximo de 20 caracteres'],
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
            message: 'La contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial de entre !@#$%^&*'
        }
    },
}, {
    timestamps: true,
    versionKey: false,
    autoCreate: false
});

const User = connectDB.model('User', userSchema);

export default User;
