import { useState, useEffect } from "react";
import Login from "./componens/Login";
import Registro from "./componens/Registro";
import Separador from "./componens/Separador";
import Conoce from "./Informacion/Conoce";
import PanelBienvenida from "./componens/PanelBienvenida";

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

  return (
    <>
      {!registro ? (
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
      )}
    </>
  );
}

export default App;
