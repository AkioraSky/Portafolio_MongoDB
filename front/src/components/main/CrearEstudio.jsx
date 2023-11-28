import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const CrearEstudio = () => {

const inputdetalle = document.getElementById("detalle");
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
    const AgregarEstudio = async (e) => {
        e.preventDefault();
        let formulario = form;
    
        //guardar en la api
    
        const request = await fetch(Global.url + "estudios/crearEstudio", {
          method: "POST",
          body: JSON.stringify(formulario),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const data = await request.json();
        if (data.id == 200) {
          let titulo = data.Encabezado;
          let mensaje = data.mensaje;
          MySwal.fire({
            title: <strong> {titulo}</strong>,
            html: <i>{mensaje}</i>,
            icon: "success",
          });
          inputdetalle.value = "";
        } else {
          let titulo = data.Encabezado;
          let mensaje = data.mensaje;
          MySwal.fire({
            title: <strong> {titulo}</strong>,
            html: <i>{mensaje}</i>,
            icon: "error",
          });
        }
      };
    return ( <>

<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
              <select
                        name="tipo"
                        className="form-group col-md-6"
                        id="tipo"
                        onChange={cambiar}
                        style={{ borderRadius: "50px", fontSize: "100%" }}
                      >
                        <option value="TECNICO">Tecnico</option>
                        <option value="TECNOLOGO">Tecnologo</option>
                        <option value="PROFESIONAL">Profesional</option>
                        <option value="ESPECIALIZACION">Especializacion</option>
                        <option value="MAESTRIA">Maestria</option>
                        <option value="DOCTORADO">Doctorado</option>
                      </select>
                <div class="form-group col-md-6">
                  <label for="name">Detalle</label>
                  <input type="email" class="form-control" name="detalle" id="detalle" required onChange={cambiar}/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Fecha</label>
                <input type="date" class="form-control" name="fecha" id="fecha" required onChange={cambiar}/>
              </div>
              <div class="form-group">
              <select
                        name="notas"
                        className="form-control form-control-"
                        id="notas"
                        onChange={cambiar}
                        style={{ borderRadius: "50px", fontSize: "100%" }}
                      >
                        <option value="APROBADO">Aprobado</option>
                        <option value="NO APROBADO">No Aprobado</option>
                        <option value="EN PROCESO">En Proceso</option>
                        <option value="DESERCION">Desercion</option>
                      </select>
              </div>
              <div class="text-center"><button type="submit" className="btn btn-success">Agregar</button></div>
            </form>
          </div>

    </> );
}
 
export default CrearEstudio;