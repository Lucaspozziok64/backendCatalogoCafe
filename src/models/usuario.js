import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLenght: 4,
    maxLenght: 50,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (valor) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(valor)
      },
    },
  },
  password: {
    type: String,
    required: true,
    minLenght: 8,
    maxLenght: 16,
    validate: {
      validator: (valor) => {
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(valor)
      }
    },
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
