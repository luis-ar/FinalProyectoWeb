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
  setMuestraBienvenida,
  muestraBienvenida,
  setImagenUsuario,
  imagenUsuario,
  setMuestraPrograma,
  setCopiaCorreo,
}) => {
  return (
    <>
      {recuperar ? (
        <Registro
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRegistro={setRegistro}
          setRecuperar={setRecuperar}
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
          setMuestraBienvenida={setMuestraBienvenida}
          muestraBienvenida={muestraBienvenida}
          setImagenUsuario={setImagenUsuario}
          imagenUsuario={imagenUsuario}
          setMuestraPrograma={setMuestraPrograma}
          setCopiaCorreo={setCopiaCorreo}
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
