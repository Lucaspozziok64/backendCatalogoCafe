import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 100,
        unique: true
    },
    precio: {
        type: Number,
        required: true,
        min: 50,
        max: 1000000
    },
    categoria: {
        type: String,
        required: true,
        enum: ["Dulce", "Batidos", "Infusiones", "Salado"]
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: (valor) => {
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor)
            }
        }
    },
        descripcion_breve: {
        type: String,
        required: true,
        minLenght: 5,
        maxLenght: 250,
    },
        descripcion_amplia: {
        type: String,
        required: true,
        minLenght: 10,
        maxLenght: 500,
    },
})

const Producto = mongoose.model("producto", productoSchema);

export default Producto;