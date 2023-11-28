import React, {useState} from 'react';
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthProvider } from "../../context/AuthProvider";
import useAuth from "../../helpers/UseAuth";
const MySwal = withReactContent(Swal2);




const NavBar = () => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  const iduser = userObj.id;
  const nombreuser = userObj.nombre;
  const { Autenticado } = useAuth();
  
    return ( <>



<div className="responsive-nav">
      <i className="fa fa-bars" id="menu-toggle"></i>
      <div id="menu" className="menu">
        <i className="fa fa-times" id="menu-close"></i>
        <div className="container">
          <div className="image">
            <a href="#">
              <img src="../../src/assets/images/callaito.jpg" alt="" />
            </a>
          </div>
          <div className="author-content">
            <h4>{Autenticado.nombre} {Autenticado.apellidos}</h4>
            <br />
            <span>Web Designer</span>
          </div>

          <nav className="main-nav" role="navigation">
            <ul className="main-menu">
              <li>
                <a href="#section1">Sobre Mi</a>
              </li>
              <li>
                <a href="#section2">Mis estudios</a>
              </li>
              <li>
                <a href="#section3">Mis Proyectos</a>
              </li>
              <li>
                <a href="#section4">Contacto</a>
              </li>
              <li>
                <a href="#section4">Agregar Datos</a>
              </li>
            </ul>
          </nav>

          <div className="social-network">
            <ul className="soial-icons">
              <li>
                <a href="https://fb.com/templatemo">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-text">
            <p>Copyright 2019 Reflux Design</p>
          </div>
        </div>
      </div>
    </div>

    </>
   

     );
};
 
export default NavBar;