import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar" style={{ backgroundColor: "white" }}>
          <div className="container-fluid m-2">
            <a className="navbar-brand">PORTAFOLIO</a>
            <ul className="nav nav-pills">
              <li className="nav-item btn btn-success">
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Iniciar Sesión
                </NavLink>
              </li>
              <li className="nav-item btn btn-primary ms-3 me-5">
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Registrarse
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="background-image">
        {/* Contenido de la imagen principal */}
        <img
          src="https://th.bing.com/th/id/R.8d1aa594b5517861aa71e3f8b64fba3b?rik=c1fXbv6TnmSuVw&riu=http%3a%2f%2fimagenes.4ever.eu%2fdata%2fdownload%2fabstractos%2ffondo-de-colores-225784.jpg%3fno-logo&ehk=oVxJISUO969DMyfiWIXE7Lfn9w%2biUXN2jPyAT%2bjg1s0%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          style={{
            width: "100%", // Ancho al 100% del contenedor
            height: "auto", // Altura ajustada automáticamente para mantener la proporción
          }}
        />
      </main>
    </>
  );
};

export default Header;
