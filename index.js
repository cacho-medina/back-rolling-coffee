const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("dotenv/config"); //permite procesar variables de entorno

const app = express();

//setear variable de express
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(`servidor corriendo en puerto ${app.get("port")}`);
});

app.use(cors()); //permite aceptar conexiones remotas
app.use(morgan("dev")); //muestra informacion de las solicitudes
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite interpretar los datos del body de una solicitud

app.get("/", (req, res) => {
    res.send("hola");
});
app.get("*", (req, res) => {
    res.status(400).end("<h1>Error</h1>");
});
