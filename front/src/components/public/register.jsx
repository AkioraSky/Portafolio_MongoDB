import React, { useState } from "react";
import { Global } from "../../helpers/Global";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import swal from "sweetalert2";


const Register = () => {
  const [guardado, setGuardado] = useState("no_enviado");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const mostrarSweetAlert = () => {
    swal.fire({
      title: "Registro exitoso",
      text: "¡Te has registrado correctamente!",
      icon: "success",
      confirmButtonText: "Ir a iniciar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const guardarPerfil = async (e) => {
    e.preventDefault();

    const form = document.querySelector('form[name="formRes"]');
    const formData = new FormData(form);

    // Crear un objeto para almacenar los datos del formulario
    const nuevoPerfil = {};

    // Recopilar los datos del FormData y asignarlos al objeto
    formData.forEach((value, key) => {
      nuevoPerfil[key] = value;
    });

    try {
      const request = await fetch(Global.url + "personales/registrar", {
        method: "POST",
        body: JSON.stringify(nuevoPerfil),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      const data = await request.json();
    
      if (data.status === "ok") {
        console.log(data);
        setGuardado("Guardado");
    
        // Limpia los campos del formulario
        const form = document.querySelector('form[name="formRes"]');
        form.reset();
    
        // Redirige al usuario a la página de inicio de sesión
        
        mostrarSweetAlert(); // Show the SweetAlert
      } else {
        console.log(data);
        setGuardado("Error");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setGuardado("Error");
    }
    
  }
  return (
    <>
      <div></div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formRes" onSubmit={guardarPerfil} name="formRes">
        <h3>REGISTRO</h3>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <label className="lbRes" htmlFor="password">Nombre</label>
              <input
                className="dtInp"
                type="text"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
              />

              <label className="lbRes" htmlFor="password">Apellidos</label>
              <input
                className="dtInp"
                type="text"
                placeholder="Apellidos"
                id="apellidos"
                name="apellidos"
              />

              <label className="lbRes" htmlFor="password">Fecha De Naciminto</label>
              <input
                className="dtInp"
                type="date"
                placeholder="Fecha De Nacimiento"
                id="fechaNace"
                name="fechaNace"
              />

              <label className="lbRes" htmlFor="password">Dirección</label>
              <input
                className="dtInp"
                type="text"
                placeholder="Dirección"
                id="direccion"
                name="direccion"
              />
            </div>

            <div className="col-6">
              <label className="lbRes" htmlFor="password">Correo Electronico</label>
              <input
                className="dtInp"
                type="email"
                placeholder="Correo Electronico"
                id="email"
                name="email"
              />

              <label className="lbRes" htmlFor="password">Contraseña</label>
              <input
                className="dtInp"
                type="password"
                placeholder="Contraseña"
                id="contrasena"
                name="password"
              />

              <label className="lbRes" htmlFor="password">Telefono</label>
              <input
                className="dtInp"
                type="text"
                placeholder="Telefono"
                id="telefono"
                name="telefono"
              />
            </div>
          </div>

          <button type="submit" className="btnRes">
            Registrarse
          </button>
        </div>
        <div className="centrar">
          <a className="regis" href="login">
            Iniciar Sesión
          </a>
        </div>
      </form>
    </>
  );
};

export default Register;
