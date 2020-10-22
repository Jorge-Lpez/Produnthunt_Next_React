import React, { useState, useContext } from 'react';
import FileUploader from "react-firebase-file-uploader"
import Layout from "../components/layout/Layout";
import Router, { useRouter } from "next/router";
import { Formulario, Campo, InputSubmit, Titulo, Error} from "../components/ui/Formulario";

//Importando el firebase para iniciar la conexion 
import { FirebaseContext } from "../firebase";

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

    //State de las imagenes 
    const [nombreimagen, guardarNombre] = useState("");
    const [subiendo, guardarSubiendo] = useState(false);
    const [progreso, guardarProgreso] = useState(0);
    const [urlimagen, guardarUrlImagen] = useState("");

    const { valores, errores, submitForm, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);

    const {nombre, empresa, imagen, url, descripcion} = valores;

    //HOOK  de routing para rideccionar 
    const router = useRouter();

    //Context con las operaciones crud de firebase 
    const { usuario, firebase } = useContext(FirebaseContext);
    
    async function crearProducto(){
        //Si el usuario no esta autenticado llevar al login
        if(!usuario){
            return router.push("/login");
        }

        //Crear el objeto de nuevo producto
        const producto = {
            nombre,
            empresa,
            url,
            urlimagen,
            descripcion,
            votos: 0,
            comentarios: [],
            creado: Date.now()
        }
        //Insertarlo en la base de datos
        firebase.db.collection("productos").add(producto);

        return router.push("/");
    }

    //Funciones para cargar la imagen y mostrar informacion llenando los state
    const handleUploadStart = () => {
        guardarProgreso(0);
        guardarSubiendo(true);
    }
    const handleProgress = progreso => guardarProgreso( { progreso });

    const handleUploadError = error => {
        guardarSubiendo(error);
        console.log(error);
    }

    const handleUploadSuccess = nombre => {
        guardarProgreso(100);
        guardarSubiendo(false);
        guardarNombre(nombre);
        firebase
            .storage
            .ref("productos")
            .child(nombre)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                guardarUrlImagen(url);
            
            } )
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
                            <FileUploader
                                accept="image/*"
                                id="imagen"
                                name="imagen"
                                randomizeFilename
                                storageRef={firebase.storage.ref("productos")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            />
                        </Campo>
                       
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
                <InputSubmit
                    type="submit"
                    value="Crear Producto"
                />
            </Formulario>
        </Layout>
     );
}
export default NuevoProducto;