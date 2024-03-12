import { Router } from "express";
import { crearProd, listarProd } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").post(crearProd).get(listarProd);

export default router;
