import app from "./app.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en el puerto: ", app.get("port"));
    console.log("En el modo: ", process.env.NODE_ENV);
})

app.get('/data', (req, res) => {
    res.send('Datos desde backend');
})
