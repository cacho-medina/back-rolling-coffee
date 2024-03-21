import { Router } from "express";
import {
    crearProd,
    listarProd,
    getProdById,
    editarProd,
    deleteProd,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../helpers/validacionProducto.js";

const router = Router();

router
    .route("/productos")
    .post([validacionProducto], crearProd)
    .get(listarProd);
router
    .route("/productos/:id")
    .get(getProdById)
    .put([validacionProducto], editarProd)
    .delete(deleteProd);

export default router;
