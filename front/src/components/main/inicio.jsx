import React, { Component, useState, useEffect } from "react";

import NavBar from "./nav";
import Cuerpo from "./cuerpo";

const Inicio = () => {
  return (
    <>
      <div id="page-wraper">
        <NavBar />
        <Cuerpo />
      </div>
    </>
  );
};

export default Inicio;
