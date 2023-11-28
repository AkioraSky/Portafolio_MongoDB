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
    <main id="main">
        <section className="inner-page">
        <div classNameName="container">
            <div classNameName="text-center mb-3" style={{color:"white"}}>
<h1>Agregar estudio</h1>
            </div>
            <div classNameName="row justify-content-center">
            <div className="col">
    
    <form action="forms/contact.php" method="post" role="form" className="php-email-form"  onSubmit={AgregarEstudio}>
      <div className="row" style={{color:"white"}} >
        <label htmlFor=""> Estudio</label>
      <select
                name="tipo"
                classNameName="form-control form-control-"
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
        <div className="form-group">
          <label for="name">Detalle</label>
          <input type="text" className="form-control" name="detalle" id="detalle" required onChange={cambiar}/>
        </div>
        <div className="form-group">
        <label for="name">Fecha</label>
        <input type="date" className="form-control" name="fecha" id="fecha" required onChange={cambiar}/>
      </div>
      <div className="form-group">
      <label for="name">Estado</label>
      <select
                name="notas"
                classNameName="form-control form-control-"
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
      <div classNameName="form-group mt-4"><div className="text-center"><button type="submit" classNameName="btn btn-success">Agregar</button></div>
      </div>
      </div>
      
      
    </form>
  </div>
            </div>

</div>
        </section>
      </main>

    



    </> );
}
 
export default CrearEstudio;