import express from "express";
import router from "./routes/user.router.js";


import dotenv from "dotenv";
import cors from "cors";
import app from "./app.js";

if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(router);
app.use(router);

app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en el puerto: ", app.get("port"));
    console.log("En el modo: ", process.env.NODE_ENV);
})

app.get('/data', (req, res) => {
    res.send('Datos desde backend');
})
