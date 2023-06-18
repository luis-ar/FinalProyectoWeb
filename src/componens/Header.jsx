import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";
import BarraPresentacion from "./BarraPresentacion";

const Header = ({
  setMuestraPrograma,
  setCopiaCorreo,
  copiaCorreo,
  setImagenUsuario,
  setNombreUsuario,
  imagenUsuario,
  nombreUsuario,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
  gastos,
  setRegistro,
}) => {
  return (
    <div className="header-global divHeader">
      <BarraPresentacion
        setMuestraPrograma={setMuestraPrograma}
        setCopiaCorreo={setCopiaCorreo}
        copiaCorreo={copiaCorreo}
        setImagenUsuario={setImagenUsuario}
        imagenUsuario={imagenUsuario}
        setNombreUsuario={setNombreUsuario}
        nombreUsuario={nombreUsuario}
        setPresupuesto={setPresupuesto}
        setGastos={setGastos}
        setisValidPresupuesto={setisValidPresupuesto}
        setRegistro={setRegistro}
      />
      <h1 className="titulo-header">Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      )}
    </div>
  );
};

export default Header;
