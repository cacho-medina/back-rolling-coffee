import "dotenv/config";
import mongoose from "mongoose";

const mongoURI = process.env.MONGOBD_URI;

console.log(mongoURI);

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;
datosConexion.once("open", () => {
    console.log("db conection success");
});
