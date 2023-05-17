import React from "react";
import Login from "./Login";
import BarraPresentacion from "./BarraPresentacion";

const Separador2 = (
  setCorreo,
  correo,
  contraseña,
  setContraseña,
  setMensaje,
  mensaje,
  setRegistro,
  setRecuperar,
  setNosotros,
  setNombreUsuario,
  nombreUsuario,
  setMuestraBienvenida,
  muestraBienvenida,
  setImagenUsuario,
  imagenUsuario,
  setMuestraPrograma,
  muestraPrograma
) => {
  return (
    <>
      {!muestraPrograma ? (
        <Login
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRegistro={setRegistro}
          setRecuperar={setRecuperar}
          setNosotros={setNosotros}
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
          setMuestraBienvenida={setMuestraBienvenida}
          muestraBienvenida={muestraBienvenida}
          setImagenUsuario={setImagenUsuario}
          imagenUsuario={imagenUsuario}
          muestraPrograma={muestraPrograma}
          setMuestraPrograma={setMuestraPrograma}
        />
      ) : (
        <BarraPresentacion />
      )}
    </>
  );
};

export default Separador2;
