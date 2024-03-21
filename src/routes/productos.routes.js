import { Router } from "express";
import {
    crearProd,
    listarProd,
    getProdById,
    editarProd,
    deleteProd,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";

const router = Router();

router
    .route("/productos")
    .post(
        [
            check("nombre")
                .notEmpty()
                .withMessage("El nombre del producto es obligatorio")
                .isLength({ min: 3, max: 40 })
                .withMessage(
                    "El nombre del producto debe tener entre 3 y 40 caracteres"
                ),
            check("precio")
                .notEmpty()
                .withMessage("El precio del producto es obligatorio")
                .isNumeric()
                .withMessage("El precio debe ser un valor numerico")
                .custom((value) => {
                    if (value >= 100 && value < 100000) {
                        return true;
                    } else {
                        throw new Error(
                            "El precio debe ser un valor entre 100 y 100000"
                        );
                    }
                }),
        ],
        crearProd
    )
    .get(listarProd);
router
    .route("/productos/:id")
    .get(getProdById)
    .put(editarProd)
    .delete(deleteProd);

export default router;
