import React, { Component, useState, useEffect } from "react";

import Navbar from "./Navbar";
import Cuerpo from "./cuerpo";

const Inicio = () => {
  return (
    <>
      <div id="page-wraper">
        <Navbar/>
        <Cuerpo />
      </div>
    </>
  );
};

export default Inicio;
