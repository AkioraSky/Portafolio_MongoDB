import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const ModalEditarEstu = ({
  show,
  handleClose,
  id,
  detalle,
  setEditar,
  listarEstudios,
}) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const Editar = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch(Global.url + `estudios/editar/${id}`, {
      method: "PUT",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    if (data.id == 200) {
      let titulo = data.Encabezado;
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {titulo}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setEditar(0);
      listarEstudios();
    } else {
      let titulo = data.Encabezado;
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {titulo}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="form-group" style={{ marginLeft: "40%" }}>
            <Modal.Title>Editar</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form className="user" onSubmit={Editar}>
            <div className="form-group">
              <label htmlFor="tipo" style={{ marginLeft: "40%" }}>
                Tipo de Estudio
              </label>
              <select
                name="tipo"
                className="form-control form-control"
                id="tipo"
                onChange={cambiar}
                style={{ borderRadius: "50px", fontSize: "100%" }}
              >
                <option value="N/A">Selecciona una opcion: </option>
                <option value="TECNICO">Tecnico</option>
                <option value="TECNOLOGO">Tecnologo</option>
                <option value="PROFESIONAL">Profesional</option>
                <option value="ESPECIALIZACION">Especializacion</option>
                <option value="MAESTRIA">Maestria</option>
                <option value="DOCTORADO">Doctorado</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="" style={{ marginLeft: "40%" }}>
                Fecha
              </label>
              <input
                type="date"
                className="form-control form-control-user"
                id="exampleInputEmail"
                placeholder="Detalles"
                name="fechaFin"
                onChange={cambiar}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo" style={{ marginLeft: "40%" }}>
                Notas
              </label>
              <select
                name="notas"
                className="form-control form-control-"
                id="notas"
                onChange={cambiar}
                style={{ borderRadius: "50px", fontSize: "100%" }}
              >
                <option value="N/A">Selecciona alguna Nota: </option>
                <option value="APROBADO">Aprobado</option>
                <option value="NO APROBADO">No Aprobado</option>
                <option value="EN PROCESO">En Proceso</option>
                <option value="DESERCION">Desercion</option>
              </select>
            </div>
            <div className="form-group" style={{ marginLeft: "35%" }}>
              <button
                type="submit"
                className="btn btn-success"
                style={{ margin: "20px" }}
              >
                Editar
              </button>
            </div>
          </form>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditarEstu;
