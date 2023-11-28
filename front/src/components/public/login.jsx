import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Login = () => {
  const { form, cambiar } = HelperForm({});

  const ingresarPerfil = async (e) => {
    e.preventDefault();
    let formulario = form;
    //guardar en la api
    const request = await fetch(Global.url + "personales/login", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.id === 200) {
      let titulo = data.Encabezado;
      let mensaje = data.mensaje;
      let token2 = data.token;
      localStorage.setItem("token", token2);
      localStorage.setItem("user", JSON.stringify(data.user));
      //console.log(token2);
      MySwal.fire({
        title: <strong> {titulo}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } else {
      const inputPass = document.getElementById("password");
      inputPass.value = "";
      const inputEmail = document.getElementById("email");
      inputEmail.value = "";
      let titulo = data.Encabezado;
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {titulo}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formLog formM" onSubmit={ingresarPerfil}>
        <h3>Iniciar Sesion</h3>

        <div className="container">
          <div className="row">
            <label className="lbLog">
              Correo Electronico
            </label>
            <input
              className="dtInpLog"
              type="email"
              placeholder="Correo Electronico"
              name="email"
              id="email"
              onChange={cambiar}
            />

            <label className="lbLog">
              Contraseña
            </label>
            <input
              className="dtInpLog"
              type="password"
              placeholder="Contraseña"
              name="password"
              id="password"
              onChange={cambiar}
            />
          </div>

          <button type="submit" className="btnRes">
            Iniciar Sesión
          </button>
        </div>
        <div className="centrar">
          <a className="regis" href="/register">
            Registrarse
          </a>
        </div>
      </form>
    </>
  );
};

export default Login;

