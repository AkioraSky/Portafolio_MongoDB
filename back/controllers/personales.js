//COntrolador Del Usuario
const Personales = require("../models/Personales");
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registrar = async (req, res) => {
  try {
    let datos = req.body;

    const personalesGuardar = new Personales(datos);

    let consulta = await Personales.find({
      $or: [
        {
          email: personalesGuardar.email.toLowerCase(),
        },
      ],
    }).exec();

    //ENCRIPTAR Y SALVAR

    if (consulta.length > 0) {
      return res.status(400).send({
        mensaje: "ya existe el email o usuarios",
      });
    } else {
      //ENCRIPTAR Y SALVAR
      let password = await bcrypt.hash(personalesGuardar.password, 10);
      personalesGuardar.password = password;
      personalesGuardar.save();
      return res.status(200).send({
        status: "ok",
        mensaje: "insertado con exito",
      });
    }
  } catch (error) {
    return res.status(500).send({
      nombreError: error.name,
      mensaje: "Error en la consulta: " + error.message,
    });
  }
};

const listar = async (req, res) => {
  try {
    let pagina;
    if (req.params.pagina) {
      pagina = req.params.pagina;
    }
    pagina = parseInt(pagina);
    let itemsPerPage = 5;
    const options = {
      page: pagina,
      limit: itemsPerPage,
      sort: { _id: 1 },
    };
    console.log(pagina);
    Personales.paginate({}, options)
      .then((result) => {
        if (!result) {
          return res.status(400).send({
            id: 400,
            Encabezado: "Error listar",
            mensaje: "No hay Registros Para Mostrar",
          });
        } else {
          return res.status(200).send({
            id: 200,
            Encabezado: "Correcto",
            mensaje: "Lista de Personas",
            perfiles: result.docs,
            pagina,
            limite: result.limit,
            totalPaginas: result.totalPages,
            registros: result.totalDocs,
          });
        }
      })
      .catch((error) => {
        return res.status(400).send({
          id: 400,
          Encabezado: "Error",
          mensaje: "Error al Generar: " + error,
        });
      });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error listar",
      mensaje: "Error de Consulta: " + error.message,
    });
  }
};

const listarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    consulta = await Personales.findById(id).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "ListarUno exitoso",
      mensaje: consulta,
    });
  } catch (error) {
    return res.status(404).send({
      id: 404,
      Encabezado: "Error listarUno",
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};

const borrar = async (req, res) => {
  try {
    let id = req.params.id;
    consulta = await Personales.findOneAndDelete({ _id: id }).exec();
    return res.status(200).send({
      id: 200,
      Encabezado: "Correcto",
      mensaje: "Eliminado Correctamente",
    });
  } catch (error) {
    return res.status(400).send({
      id: 400,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.messages,
    });
  }
};

const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let datos = req.body;

    // Check if a password is provided for updating
    if (datos.password) {
      // ENCRYPT PASSWORD
      let password = await bcrypt.hash(datos.password, 10);
      datos.password = password;
    }

    // Update the document with the provided data
    let consulta = await Personales.findOneAndUpdate(
      { _id: id },
      { $set: datos }
    ).exec();

    // Check if the document was not found
    if (!consulta) {
      return res.status(404).send({
        id: 404,
        Encabezado: "Error",
        mensaje: "No se encontró el registro para editar",
      });
    } else {
      return res.status(200).send({
        id: 200,
        Encabezado: "Editado Correctamente",
        mensaje: "Se ha editado correctamente",
      });
    }
  } catch (error) {
    return res.status(500).send({
      id: 500,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.message,
    });
  }
};

const login = async (req, res) => {
  let data = req.body;

    if (!data.email || !data.password) {
      return res.status(400).send({
        id: 400,
        Encabezado: "Error",
        mensaje: "Email o Contraseña Vacio",
      });
    }

    let consulta = await Personales.findOne({ email: data.email }).exec();
    if (consulta == null) {
      return res.status(400).send({
        id: 400,
        Encabezado: "Error",
        mensaje: "El Usuario no existe en la Base de Datos",
      });
    }
    else 
    {
      let password = bcrypt.compareSync(data.password, consulta.password);
      if (!password) {
        return res.status(400).send({
          id: 400,
          Encabezado: "Error",
          mensaje: "Contraseña Incorrecta",
        });
      }
      else
      {
        const token = jwt.sign(
          {
            userId: consulta._id,
            email: consulta.email,
          },
          "Alexis@1502",
          {
            expiresIn: "1d",
          }
        );

        return res.status(200).send({
          id: 200,
          Encabezado: "Correcto",
          mensaje: "Ingreso Exitoso",
          user: {
            id: consulta._id,
            email: consulta.email,
          },
          token: token,
        });      
      }
    }
};


module.exports = {
  registrar,
  listar,
  listarUno,
  borrar,
  editar,
  login,
};
