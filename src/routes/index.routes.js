import productosRoutes from "./productos.routes.js";
import usuariosRoutes from "./usuarios.routes.js"
import { Router } from "express";

const router = Router();

router.use('/productos', productosRoutes);
router.use('/usuarios', usuariosRoutes);

export default router;