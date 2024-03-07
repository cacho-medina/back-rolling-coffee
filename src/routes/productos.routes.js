import { Router } from "express";
import { listarProd } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listarProd);

export default router;
