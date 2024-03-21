import { Router } from "express";
import {
    crearProd,
    listarProd,
    getProdById,
    editarProd,
    deleteProd,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").post(crearProd).get(listarProd);
router
    .route("/productos/:id")
    .get(getProdById)
    .put(editarProd)
    .delete(deleteProd);

export default router;
