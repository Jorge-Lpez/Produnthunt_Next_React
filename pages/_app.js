import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAutentificacion from "../hooks/useAutentificacion";

const MyApp = props => {
  const usuario = useAutentificacion();

  const { Component, pageProps } = props;
  return(
    <FirebaseContext.Provider
      value = {{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps}/>
    </FirebaseContext.Provider>
  )
}
/*function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/

export default MyApp;
