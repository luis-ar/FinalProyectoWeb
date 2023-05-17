import { useState, useEffect } from "react";
import Login from "./componens/Login";
import Separador from "./componens/Separador";
import Conoce from "./Informacion/Conoce";
import BarraPresentacion from "./componens/BarraPresentacion";
function App() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [registro, setRegistro] = useState(false);
  const [recuperar, setRecuperar] = useState(true);
  const [nosotros, setNosotros] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [muestraBienvenida, setMuestraBienvenida] = useState(false);
  const [imagenUsuario, setImagenUsuario] = useState(null);
  const [muestraPrograma, setMuestraPrograma] = useState(false);

  return (
    <>
      {muestraPrograma ? (
        <BarraPresentacion
          imagenUsuario={imagenUsuario}
          nombreUsuario={nombreUsuario}
        />
      ) : !registro ? (
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
          setMuestraPrograma={setMuestraPrograma}
        />
      ) : !nosotros ? (
        <Separador
          setRegistro={setRegistro}
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRecuperar={setRecuperar}
          recuperar={recuperar}
        />
      ) : (
        <Conoce setNosotros={setNosotros} setRegistro={setRegistro} />
      )}
      {/* {!registro ? (
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
        />
      ) : !nosotros ? (
        <Separador
          setRegistro={setRegistro}
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRecuperar={setRecuperar}
          recuperar={recuperar}
        />
      ) : (
        <Conoce setNosotros={setNosotros} setRegistro={setRegistro} />
      )} */}
    </>
  );
}

export default App;
