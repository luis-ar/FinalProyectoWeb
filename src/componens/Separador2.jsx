import React from "react";
import Header from "./Header";
import ListadoGastos from "./ListadoGastos";
import Modal from "./Modal";
import Filtros from "./Filtros";
import IconoNuevoGasto from "../Imagenes/nuevo-gasto.svg";
const Separador2 = ({
  setMuestraPrograma,
  setCopiaCorreo,
  copiaCorreo,
  setImagenUsuario,
  setNombreUsuario,
  imagenUsuario,
  nombreUsuario,
  setGastos,
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
  filtro,
  setFiltro,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  modal,
  setRegistro,
}) => {
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setMuestraPrograma={setMuestraPrograma}
        setCopiaCorreo={setCopiaCorreo}
        copiaCorreo={copiaCorreo}
        setImagenUsuario={setImagenUsuario}
        imagenUsuario={imagenUsuario}
        nombreUsuario={nombreUsuario}
        setNombreUsuario={setNombreUsuario}
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        setRegistro={setRegistro}
      />
      {isValidPresupuesto && (
        <>
          <main className="main-gasto">
            <Filtros filtro={filtro} setFiltro={setFiltro} />

            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
};

export default Separador2;
