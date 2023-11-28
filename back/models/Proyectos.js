//form de proyectos
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const proyectosSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    link: {
        type: String,
        required: true,
    },
    Persona: {
        type: Schema.ObjectId,
        ref: "Personales",
    },
  },
  { collection: "proyectos" }
);
proyectosSchema.plugin(mongoosePaginate);
module.exports = model("Proyectos", proyectosSchema, "proyectos");
