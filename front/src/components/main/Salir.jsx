
import React, { useEffect } from "react";
import UseAuth from "../../helpers/UseAuth";
import { useNavigate } from "react-router-dom";
const Salir = () => {
    const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  useEffect(() => {





    localStorage.clear();
    setAutenticado({});
    Navigate("/");
    window.location.reload();
    return (  <>
      <h1>Saliendo</h1>
    </>
    );
  })
};
 
export default Salir;