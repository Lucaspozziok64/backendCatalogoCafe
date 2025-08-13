export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const leerProductos = (req, res) => {};

//agregar funcion para crear Producto
export const crearProducto = (req, res) => {
  try {
    // recibir el objeto que tengo que agregar a la BD
    console.log(req.body)
    // Validar los datos del objeto
    // guardar el objeto en la base de datos
    // Enviar Respuesta
  } catch (error) {
    console.error(error);
  }
};
//agregar funccion para editar
