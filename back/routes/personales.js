// ROUTER DE PESONALES

const express = require("express");
const router = express.Router();
const personalesControlador = require("../controllers/personales");
const auth = require("../controllers/auth");

router.post("/personales/registrar", personalesControlador.registrar);
router.get("/personales/listar/:pagina?", auth, personalesControlador.listar);
router.get("/personales/listarUno/:id", auth, personalesControlador.listarUno);
router.delete("/personales/borrar/:id", auth, personalesControlador.borrar);
router.put("/personales/editar/:id", auth, personalesControlador.editar);
router.post("/personales/login", personalesControlador.login);

module.exports = router;
