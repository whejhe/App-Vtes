import mongoose from "mongoose";
import uuid from "uuid";

const { Schema } = mongoose;

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

let validatePassword = function(password) {
    if(password.length < 8){
        message: 'La contraseña debe tener al menos 8 caracteres'
        return false;
    }else if(password.length > 20){
        message: 'La contraseña debe tener un maximo de 20 caracteres'
        return false;
    }
    return re.test(password);
};

const userSchema = new Schema({
    id:{
        type: String,
        unique: true,
        required: true,
        default: () => {  
            return uuid.v4();
        }      
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
        validate:{
            validator: function(v){
                return this.valueOf.length > 3 && this.valueOf.length < 30
            },
            message: 'El nombre debe tener entre 3 y 30 caracteres',
        }
    },
    nick:{
        type: String,
        unique: true,
        required: [true, 'El nick de usuario es obligatorio'],
        minlength: [3, 'El nick debe tener al menos 3 caracteres'],
        maxlength: [30, 'El nick debe tener un maximo de 20 caracteres'],
        validate:{
            validator: function(v){
                return this.valueOf.length > 3 && this.valueOf.length < 30
            },
            message: 'El nick debe tener entre 3 y 30 caracteres',
        }
    },
    email:{
        type: String,
        trim: true,
        // lowercase: true,
        unique: true,
        required: [true, 'El email es obligatorio'],
        validate: {
            validator: validateEmail,
            message: 'El email no es valido'
        }
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
        validate: {
            validator: validatePassword,
            message: 'La contraseña no es valida',
        }
    },
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);
