import Usuario from "../models/usuario.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba con Usuarios");
};

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "El usuario fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find()
        res.status(201).json(listaUsuarios);
  } catch (error) {
    console.error(error)
        res.status(500).json({ mensaje: 'Error al leer los usuarios' })
  }
}
