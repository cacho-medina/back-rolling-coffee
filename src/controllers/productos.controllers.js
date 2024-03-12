import Producto from "../database/models/producto.js";

export const listarProd = async (req, res) => {
    try {
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "No se pudo obtener los productos" });
    }
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
