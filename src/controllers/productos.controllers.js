import Producto from "../database/models/producto.js";

export const listarProd = async (req, res) => {
    try {
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "No se pudo obtener los productos" });
    }
};
export const getProdById = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "El producto no fue encontrado" });
    }
};

export const crearProd = async (req, res) => {
    try {
        const producto = req.body;
        const productoNuevo = new Producto(producto);
        const created = await productoNuevo.save();
        res.status(201).json(created);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "El producto no pudo ser creado" });
    }
};

export const editarProd = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            res.status(404).json({ message: "No se encontro el producto" });
        }
        const productoEditado = await Producto.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Producto editado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar el producto" });
    }
};
