const conexion = require("./models/conexion");
const express = require("express");
const cors = require("cors");

//inicia base de datos
conexion();
//creamos el server node
const app = express();
const puerto = 3900;

//setting cors :: middleware para evitar error de rutas cruzadas

app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));

//rutas con MVC
const rutasPersonales = require("./routes/personales");
/* const rutasSeguir = require("./routes/seguir");
const rutasPublicaciones = require("./routes/publicaciones"); */

app.use("/api", rutasPersonales);
/* app.use("/api", rutasSeguir);
app.use("/api", rutasPublicaciones); */

app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});
