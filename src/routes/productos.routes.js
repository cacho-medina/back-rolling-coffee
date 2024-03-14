import { Router } from "express";
import { crearProd, listarProd, getProdById } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").post(crearProd).get(listarProd);
router.route("/productos/:id").get(getProdById);

export default router;
