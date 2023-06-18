import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const useAutenticacion = () => {
  const [usuarioAutenticado, guardarUsuarioAutenticadp] = useState(null);
  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        guardarUsuarioAutenticadp(usuario);
      } else {
        guardarUsuarioAutenticadp(null);
      }
    });

    return () => unsuscribe();
  }, []);
  return usuarioAutenticado;
};

export default useAutenticacion;
