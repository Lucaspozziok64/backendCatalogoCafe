import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = async (req, res) => {
  try {

    // 1- Buscar todos los productos en la BD
    const listaProductos = await Producto.find()

    // 2- Enviar la respuesta al front
    res.status(200).json(listaProductos)

  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al leer los productos' })
  }
};

//agregar funcion para crear Producto
export const crearProducto = async (req, res) => {
  try {
    // recibir el objeto que tengo que agregar a la BD
    // Validar los datos del 0
    // guardar el objeto en la base de datos
    const nuevoProducto = new Producto(req.body)
    await nuevoProducto.save()
    // Enviar Respuesta
    res.status(201).json({ mensaje: 'El producto fue creado exitosamente' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el producto' })
  }
};
//agregar funccion para editar
