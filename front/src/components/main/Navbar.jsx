import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthProvider } from "../../context/AuthProvider";
import useAuth from "../../helpers/UseAuth";
const MySwal = withReactContent(Swal2);

const Navbar = () => {

    const { form, cambiar } = HelperForm({});
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const userObj = JSON.parse(user);
    const iduser = userObj.id;
    const nombreuser = userObj.nombre;
    const { Autenticado } = useAuth();
    return ( <>
    <header id="header" className="mobile-nav-active">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="../../src/assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="#"> {Autenticado.nombre} {Autenticado.apellidos}</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
      


<i className="bi mobile-nav-toggle d-xl-none bi-x">
  
</i>

        <ul>
          <li>
          <NavLink to="/layoutPrivado/Proyectos">
            <a  className="nav-link scrollto"><i className="bx bx-home"></i> <span>Proyectos</span></a>
            </NavLink>
            </li>
          <li>
          <NavLink to="/layoutPrivado/CrearProyecto">
            <a  className="nav-link scrollto"><i className="bx bx-user"></i> <span>Crear Proyectos</span></a>
            </NavLink>
            </li>
           
          <li>
          <NavLink to="/layoutPrivado/Estudios">
            <a  className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Estudios</span></a>
            </NavLink>
            </li>
          <li>
          <NavLink to="/layoutPrivado/CrearEstudios">
            <a  className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Crear Estudios</span></a>
            </NavLink>
            </li>
          <li>
          <NavLink to="/layoutPrivado/Salir">
            <a className="nav-link scrollto"><i className="bx bx-server"></i> <span>Salir</span></a>
            </NavLink>
            </li>
         
        </ul>
      </nav>
    </div>
  </header>

    </> );
}
 
export default Navbar;