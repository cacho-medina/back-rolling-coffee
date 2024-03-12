import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        unique: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 100,
        max: 10000,
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(
                    valor
                );
            },
            message: (props) => `${props.value} no es una url valida`,
        },
    },
    categoria: {
        type: String,
        required: true,
        enum: ["infusiones", "batidos", "salado", "dulce"],
    },
    descBreve: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    descAmplia: {
        type: String,
        required: true,
        minLength: 30,
        maxLength: 400,
    },
});

//vamos a generar modelo Producto

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
