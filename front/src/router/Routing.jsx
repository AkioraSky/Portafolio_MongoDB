import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/public/login";
import Register from "../components/public/register";
import LayoutPublico from "../components/public/layoutPublico";
import Header from "../components/public/Header";
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
         <Route index element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
