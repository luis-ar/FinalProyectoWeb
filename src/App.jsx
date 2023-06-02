import { useState, useEffect } from "react";
import Login from "./componens/Login";
import Separador from "./componens/Separador";
import Conoce from "./Informacion/Conoce";
import BarraPresentacion from "./componens/BarraPresentacion";

//Extras
import { nanoid } from "nanoid";
import Separador2 from "./componens/Separador2";
function App() {
  const [correo, setCorreo] = useState("");
  const [copiaCorreo, setCopiaCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState([]);
  const [registro, setRegistro] = useState(false);
  const [recuperar, setRecuperar] = useState(true);
  const [nosotros, setNosotros] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [muestraBienvenida, setMuestraBienvenida] = useState(false);
  const [imagenUsuario, setImagenUsuario] = useState(null);
  const [muestraPrograma, setMuestraPrograma] = useState(false);
  /////extra
  const inicioPresupuesto = Number(localStorage.getItem("presupuesto")) || 0;
  const inicioGastos = JSON.parse(localStorage.getItem("gastos")) || [];
  const [presupuesto, setPresupuesto] = useState(inicioPresupuesto);

  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(inicioGastos);

  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  /////extra

  const eliminarGasto = (id) => {
    const gastosActualizadosEliminados = gastos.filter(
      (gasto) => gasto.id !== id
    );
    setGastos(gastosActualizadosEliminados);
  };

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    if (filtro) {
      console.log(filtro);
      //Filtros Gastos por categoria
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) || 0;
    if (presupuestoLS > 0) {
      setisValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      //Nuwvo gasto
      gasto.id = nanoid();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <>
      {muestraPrograma ? (
        <Separador2
          setMuestraPrograma={setMuestraPrograma}
          setCopiaCorreo={setCopiaCorreo}
          copiaCorreo={copiaCorreo}
          setImagenUsuario={setImagenUsuario}
          setNombreUsuario={setNombreUsuario}
          imagenUsuario={imagenUsuario}
          nombreUsuario={nombreUsuario}
          setGastos={setGastos}
          gastos={gastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
          filtro={filtro}
          setFiltro={setFiltro}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          gastosFiltrados={gastosFiltrados}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          modal={modal}
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
          setCopiaCorreo={setCopiaCorreo}
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
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
        />
      ) : (
        <Conoce setNosotros={setNosotros} setRegistro={setRegistro} />
      )}
    </>
  );
}

export default App;
