import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
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
    check("imagen")
        .notEmpty()
        .withMessage("La imagen del producto es obligatoria")
        .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
        .withMessage(
            "La imagen debe tener el formato de una url valida y terminar en (png|jpg|jpeg|gif|svg)"
        ),
    check("categoria")
        .notEmpty()
        .withMessage("La categoria es un dato obligatorio")
        .isIn(["infusiones", "batidos", "salado", "dulce"])
        .withMessage(
            "La categoria debe ser una de las siguientes ('infusiones', 'batidos', 'salado', 'dulce')"
        ),
    check("descBreve")
        .notEmpty()
        .withMessage("La descripcion es un dato obligatorio")
        .isLength({ min: 10, max: 100 })
        .withMessage("La descripcion debe tener entre 10 y 100 caracteres"),
    check("descAmplia")
        .notEmpty()
        .withMessage("La descripcion es un dato obligatorio")
        .isLength({ min: 30, max: 400 })
        .withMessage("La descripcion debe tener entre 30 y 400 caracteres"),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
