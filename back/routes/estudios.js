const express = require("express");
const router = express.Router();
const estudiosController = require("../controllers/estudios");
const auth = require("../controllers/auth");

router.post("/estudios/crearEstudio",auth, estudiosController.crearEstudio);
router.get("/estudios/listar/:pagina?", auth, estudiosController.listar);
router.get("/estudios/listarUno/:id", auth, estudiosController.listarUno);
router.delete("/estudios/borrar/:id", auth, estudiosController.borrar);
router.put("/estudios/editar/:id", auth, estudiosController.editar);
module.exports = router;
