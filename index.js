import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno
import path from "path";
import { fileURLToPath } from "url";
import productosRouter from "./src/routes/productos.routes.js";
import "./src/database/database.js";

const app = express();

//setear variable de express
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`servidor corriendo en puerto ${app.get("port")}`);
});

//MIDDLEWARES
app.use(cors()); //permite aceptar conexiones remotas
app.use(morgan("dev")); //muestra informacion de las solicitudes
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite interpretar los datos del body de una solicitud
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

//RUTAS
app.use("/api", productosRouter);

//DATABASE
