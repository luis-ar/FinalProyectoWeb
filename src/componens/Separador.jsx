import React, { useState } from "react";
import Registro from "./Registro";
import RecuperarCuenta from "./RecuperarCuenta";

const Separador = ({
  setRecuperar,
  recuperar,
  setCorreo,
  correo,
  contraseña,
  setContraseña,
  setMensaje,
  mensaje,
  setRegistro,
  setNombreUsuario,
  nombreUsuario,
}) => {
  return (
    <>
      {recuperar ? (
        <Registro
          setRegistro={setRegistro}
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
        />
      ) : (
        <RecuperarCuenta
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRegistro={setRegistro}
          setRecuperar={setRecuperar}
        />
      )}
    </>
  );
};

export default Separador;
