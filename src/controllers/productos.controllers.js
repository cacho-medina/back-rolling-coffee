import Producto from "../database/models/producto.js";

export const listarProd = (req, res) => {
    res.send("Lista de Productos");
};

export const crearProd = async (req, res) => {
    try {
        const producto = req.body;
        const productoNuevo = new Producto(producto);
        const created = await productoNuevo.save();
        res.status(201).json(created);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "El producto no pudo ser creado" });
    }
};
