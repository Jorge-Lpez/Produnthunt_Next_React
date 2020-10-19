import React, { useState } from 'react';
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit, Titulo, Error} from "../components/ui/Formulario";

//Importando el firebase para iniciar la conexion 
import firebase from "../firebase";

//Utilizando el hooks validacion
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: ""
}

const CrearCuenta = () => {

    //Error al crear cuenta
    const [error, guardarError] = useState(false);

    const { valores, errores, submitForm, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const {nombre, email, password} = valores;
    
    async function crearCuenta(){
        //console.log("Creando cuenta...");
        try {
            await firebase.registrar(nombre, email, password);   
            Router.push("/");
        } catch (error) {
            console.error("Hubo un error al crear el usuario " , error.message);
            guardarError(error.message);
        }
    }

    return ( 
        <Layout>
            <Titulo>Crear Cuenta</Titulo>
            <Formulario
                onSubmit = {handleSubmit}
                noValidate
            >
                <Campo>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Tu Nombre"
                        name="nombre"
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        value={nombre}
                    />
                </Campo>
                {errores.nombre && <Error>{errores.nombre}</Error>}
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
                    value="Crear Cuenta"
                />
            </Formulario>
        </Layout>
     );
}
 
export default CrearCuenta;