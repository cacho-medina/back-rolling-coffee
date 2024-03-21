import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errores: err.array() });
    }
    //continuar la ejecucion de la siguiente funcion de crearProd
    next();
};

export default resultadoValidacion;
