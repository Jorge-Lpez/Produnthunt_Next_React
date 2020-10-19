import React from 'react';
import Layout from "../components/layout/Layout";
import { Formulario, Campo, InputSubmit, Titulo, Error} from "../components/ui/Formulario";

//Utilizando el hooks validacion
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: ""
}

const CrearCuenta = () => {

    const { valores, errores, submitForm, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const {nombre, email, password} = valores;
    
    function crearCuenta(){
        console.log("Creando cuenta...");
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
                <InputSubmit
                    type="submit"
                    value="Crear Cuenta"
                />
            </Formulario>
        </Layout>
     );
}
 
export default CrearCuenta;