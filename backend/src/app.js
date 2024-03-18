import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import exphbs from "express-handlebars";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.resolve();

// Crear una instancia de Handlebars
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    extname: ".hbs",
});

//INICIANDO
const app = express();
// require('./database.js')

//CONFIGURACIONES
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
        console.log(file);
    }
});
app.use(multer({ storage }).single("image"));

//ROUTES
app.use(routes);

//MONGODB CONEXION
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/VtesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');    
}).catch((error) => {
    console.log('Error al conectar con la base de datos',error);
})

export default app;
