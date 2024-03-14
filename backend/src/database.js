import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vtes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');    
}).catch((error) => {
    console.log('Error al conectar con la base de datos',error);
})