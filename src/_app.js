import App from "next/app";
import firebase, { FirebaseContext } from "../src/firebase";
import useAutenticacion from "./Hook/useAutenticacion";
const MyApp = (props) => {
  const usuario = useAutenticacion();
  const { Component, pageProps } = props;
  return (
    <FirebaseContext.Provider value={{ firebase, usuario }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};
export default MyApp;
