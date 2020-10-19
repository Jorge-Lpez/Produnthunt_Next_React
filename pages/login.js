import React, { useState } from 'react';
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit, Titulo, Error} from "../components/ui/Formulario";

//Importando el firebase para iniciar la conexion 
import firebase from "../firebase";

//Utilizando el hooks validacion
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
    email: "",
    password: ""
}

const Login = () => {

     //Error al crear cuenta
     const [error, guardarError] = useState(false);

     const { valores, errores, submitForm, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
 
     const { email, password } = valores;
     
     async function iniciarSesion(){
        try {
            await firebase.login(email, password);
            Router.push("/");
        } catch (error) {
            console.log(error);
            guardarError(error.message);
        }  
     }

    return ( 
        <Layout>
            <Titulo>Login</Titulo>
            <Formulario
                onSubmit = {handleSubmit}
                noValidate
            >
                <Campo>
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu correo"
                        name="email"
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        value={email}
                    />
                </Campo>
                {errores.email && <Error>{errores.email}</Error>}
                <Campo>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        value={password}
                    />
                </Campo>
                {errores.password && <Error>{errores.password}</Error>}
                {error && <Error>{error}</Error>}
                <InputSubmit
                    type="submit"
                    value="Iniciar Sesion"
                />
            </Formulario>
        </Layout>
     );
}
 
export default Login;