import { Router } from "express";
import { crearProd, listarProd, getProdById, editarProd } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").post(crearProd).get(listarProd);
router.route("/productos/:id").get(getProdById).put(editarProd);

export default router;
