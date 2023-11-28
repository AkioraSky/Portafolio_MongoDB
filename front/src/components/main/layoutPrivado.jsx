import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {Autenticado._id ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>}
        </div>
      </div>
    </div>
  );
};

export default LayoutPrivado;
