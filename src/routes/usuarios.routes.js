import { Router } from "express";
import { crearUsuario, leerUsuarios, test } from "../controllers/usuarios.controllers.js";
const router = new Router();

router.route('/test').get(test)
router.route('/').post(crearUsuario).get(leerUsuarios)

export default router;