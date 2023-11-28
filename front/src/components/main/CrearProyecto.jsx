import React from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const CrearProyecto = () => {
  
const inputdetalle = document.getElementById("detalle");
const { form, cambiar } = HelperForm({});
const token = localStorage.getItem("token");
  const AgregarProyecto = async (e) => {
      e.preventDefault();
      let formulario = form;
  
      //guardar en la api
  
      const request = await fetch(Global.url + "proyectos/crear", {
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
  return (
    <>
       <main id="main">
        <section className="inner-page">
        <div className="container">
            <div className="text-center mb-3" style={{color:"white"}}>
<h1>Agregar proyecto</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col">
    
    <form action="forms/contact.php" method="post" role="form" className="php-email-form"  onSubmit={AgregarProyecto}>
      <div className="row" style={{color:"white"}} >
        
        <div className="form-group">
          <label for="name">Nombre</label>
          <input type="text" className="form-control" name="nombre" id="nombre" required onChange={cambiar}/>
        </div>
        <div className="form-group">
          <label for="name">Detalle</label>
          <input type="text" className="form-control" name="detalle" id="detalle" required onChange={cambiar}/>
        </div>
        <div className="form-group">
        <label for="name">Link</label>
        <input type="text" className="form-control" name="link" id="link" required onChange={cambiar}/>
      </div>

      <div className="form-group mt-4">
        <div className="text-center"><button type="submit" className="btn btn-success">Agregar</button></div>
      </div>
      </div>
      
      
    </form>
  </div>
            </div>

</div>
        </section>
      </main>
    </>
  );
};

export default CrearProyecto;
