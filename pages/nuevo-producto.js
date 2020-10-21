import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { Formulario, Campo, InputSubmit, Titulo, Error} from "../components/ui/Formulario";

//Importando el firebase para iniciar la conexion 
import firebase from "../firebase";

//Utilizando el hooks validacion
import useValidacion from "../hooks/useValidacion";
import validarCrearProducto from "../validacion/validarCrearProducto";

const STATE_INICIAL = {
    nombre: "",
    empresa: "",
    imagen: "",
    url: "",
    descripcion: ""
}

const NuevoProducto = () => {

    //Error al crear cuenta
    const [error, guardarError] = useState(false);

    const { valores, errores, submitForm, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearProducto, crearCuenta);

    const {nombre, empresa, imagen, url, descripcion} = valores;
    
    async function crearCuenta(){
        
    }

    return ( 
        <Layout>
            <Titulo>Nuevo Producto</Titulo>
            <Formulario
                onSubmit = {handleSubmit}
                noValidate
            >
                <fieldset>
                    <legend>Informacion General</legend>
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
                            <label htmlFor="empresa">Empresa: </label>
                            <input
                                type="text"
                                id="empresa"
                                placeholder="Empresa"
                                name="empresa"
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={empresa}
                            />
                        </Campo>
                        {errores.empresa && <Error>{errores.empresa}</Error>}
                        <Campo>
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="file"
                                id="imagen"
                                name="imagen"
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={imagen}
                            />
                        </Campo>
                        {errores.imagen && <Error>{errores.imagen}</Error>}
                        <Campo>
                            <label htmlFor="url">URL</label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={url}
                            />
                        </Campo>
                        {errores.url && <Error>{errores.url}</Error>}
                </fieldset>
                
                <fieldset>
                    <legend>Sobre tu producto</legend>
                    <Campo>
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={descripcion}
                            />
                    </Campo>
                    {errores.descripcion && <Error>{errores.descripcion}</Error>}
                </fieldset>

                {error && <Error>{error}</Error>}
                <InputSubmit
                    type="submit"
                    value="Crear Producto"
                />
            </Formulario>
        </Layout>
     );
}
export default NuevoProducto;