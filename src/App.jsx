import { useState, useEffect } from "react";
import Login from "./componens/Login";
import Registro from "./componens/Registro";
import Separador from "./componens/Separador";
import Conoce from "./Informacion/Conoce";

function App() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [registro, setRegistro] = useState(false);
  const [recuperar, setRecuperar] = useState(true);
  const [nosotros, setNosotros] = useState(false);

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
