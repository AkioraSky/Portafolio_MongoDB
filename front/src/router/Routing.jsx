import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/public/login";
import Register from "../components/public/register";
import LayoutPublico from "../components/public/layoutPublico";

import LayoutPrivado from "../components/main/layoutPrivado";
//import NavBar from "../components/main/nav";
import Inicio from "../components/main/inicio";
import { AuthProvider } from "../context/AuthProvider";

const Routing = () =>{
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>

        <Route path="/" element={<LayoutPublico />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Register />} />
        </Route>

        <Route path="/MyPortafolio/" element={<LayoutPrivado />}>
          <Route index element={<Inicio />} />
        </Route>

      </Routes>
    </AuthProvider>      
    </BrowserRouter>
  );
};

export default Routing;
