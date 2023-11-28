import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/public/login";
import Register from "../components/public/register";
import LayoutPublico from "../components/public/layoutPublico";

import LayoutPrivado from "../components/main/layoutPrivado";
import Proyecto from "../components/main/Proyectos";
import CrearProyecto from "../components/main/CrearProyecto";
import Estudios from "../components/main/Estudios";
import CrearEstudio from "../components/main/CrearEstudio";
//import NavBar from "../components/main/nav";

import Proyectos from "../components/main/Proyectos";
import { AuthProvider } from "../context/AuthProvider";

const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LayoutPublico />}>
            <Route path="/login" element={<Login />} />
            <Route index element={<Register />} />
          </Route>

          <Route path="/LayoutPrivado/" element={<LayoutPrivado />}>
            <Route index element={<Proyectos />} />
            <Route path="Proyectos" element={<Proyecto />} />
            <Route path="CrearProyecto" element={<CrearProyecto />} />
            <Route path="Estudios" element={<Estudios />} />
            <Route path="CrearEstudios" element={<CrearEstudio />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
