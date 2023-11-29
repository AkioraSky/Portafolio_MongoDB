import React, { Component, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

import Navbar from "./Navbar";
import Cuerpo from "./cuerpo";
const { Autenticado } = UseAuth();
const Inicio = () => {
  return (
    <>
      <div id="page-wraper">
        <Navbar/>
        <Cuerpo />
        {Autenticado._id ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>}
      </div>
    </>
  );
};

export default Inicio;
