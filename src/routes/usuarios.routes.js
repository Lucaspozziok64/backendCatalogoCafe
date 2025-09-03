import { Router } from "express";
import { crearUsuario, test } from "../controllers/usuarios.controllers.js";
const router = new Router();

router.route('/test').get(test)
router.route('/').post(crearUsuario)

export default router;