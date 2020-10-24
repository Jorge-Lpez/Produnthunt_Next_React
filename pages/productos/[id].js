import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Error404 from "../../components/layout/404";
import { FirebaseContext } from "../../firebase";
import styled from "@emotion/styled";
import Spinner from "../../components/layout/Spinner";
import { Campo, InputSubmit} from "../../components/ui/Formulario";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Boton  from "../../components/ui/Boton";

const ContenedorProducto = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Nombre = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const Titulo2 = styled.h2`
    margin: 2rem 0;
`;

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Producto = () => {

    //Routing para obtener el id actual 
    const router = useRouter();
    const { query: { id } } = router;

    //Crando state para cambio de producto y no ciclar la aplicacion
    const[consultarDB, guardarConsultarDB] = useState(true);
    //Creando estate para guardar el resultado de la busqueda
    const [producto, guardarProducto] = useState("");
    //state para el error en la consulta 
    const [error, guardarError] = useState(false);
    //State para activar el spinner 
    const [activar, guardarActivar] = useState(false);
    //Creando state para comentarios
    const [nuevosComentarios, guardarComentarios] = useState({
        mensaje: ""
    });

    // Extrayendo firebase de firebasecontext para llamar a la funciones de firebase
    const { firebase, usuario } = useContext(FirebaseContext);

    useEffect(() => {
        if(id && consultarDB){
            const obtenerProducto = async ()  => {
                const productoQuery = await firebase.db.collection("productos").doc(id);
                const producto = await productoQuery.get();
                if(producto.exists){
                    guardarProducto(producto.data());
                    guardarConsultarDB(false);
                    guardarActivar(true);
                    setTimeout(() => {
                        guardarActivar(false);
                    }, 1000);
                }else{
                    guardarError(true);
                    guardarConsultarDB(false);
                }
            }
            obtenerProducto();
        }
    }, [id]);

    //guardarActivar(true);
    //if(Object.keys(producto).length === 0)return <Spinner/>;
    const {comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado} = producto;

    const votarProducto = () => {
        if(!usuario){
            return router.push("/");
        }
        
        const NuevoVotos = votos + 1;

        //Verficar si el usuario ha votado 
        if(haVotado.includes(usuario.uid))return;
        //Guardar el ID del usuario que ha votado
        const hanvotado = [...haVotado, usuario.uid];
        //Agregando a la base de datos
        firebase.db.collection("productos").doc(id).update({votos: NuevoVotos, haVotado: hanvotado});    

        //Agregando al state
        guardarProducto({
            ...producto,
            votos: NuevoVotos
        });
        guardarConsultarDB(true);
    }

    //Creando funcion para llenar el state de comentarios
    const handleComentarios = (e) =>{
        guardarComentarios({
            ...nuevosComentarios,
            [e.target.name] : e.target.value
        });
    }

    //Funcion vewrifica si es el creador el que escribe el comeentario
    const origenCreador = id => {
        if(creador.id === id){
            return true;
        }
    }

    //Creando funcion boton comentar en el formulario para agregar formulari
    const onsubmitComentario = (e) => {
        e.preventDefault();
        if(!usuario){
            return router.push("/");
        }
        //Informacion extra al comentario 
        nuevosComentarios.usuarioId = usuario.uid;
        nuevosComentarios.usuarioNombre = usuario.displayName;
        //Tomar copia de comentario y agregarlos al arreglo
        const nuevosComentario = [...comentarios, nuevosComentarios];
        //Actualizar la BD
        firebase.db.collection("productos").doc(id).update({
            comentarios: nuevosComentario
        })
        // Actualizar el state
        guardarProducto({
            ...producto,
            comentarios: nuevosComentario
        })
        guardarComentarios({
            mensaje: ""
        });
        guardarConsultarDB(true);
    }

    //Verificar si el cliente es el mismo que el usuario registrado
    const borrarCreador = () =>{
        if(!usuario){
            return false;
        }

        if(creador.id === usuario.uid){
            return true;
        }
    }

    //Eliminar un producto de la bd
    const eliminarProducto = async () => {
        
        if(!usuario){
            return router.push("/login");
        }

        if(creador.id !== usuario.uid){
            return router.push("/");
        }

        try {
            await firebase.db.collection("productos").doc(id).delete();
            router.push("/");
        } catch (error){
            console.log(error)
        }
    }

    return ( 
        <Layout>
            <>
                    {error ? <Error404/> :
                    
                        <div className="contenedor">
                            {activar || !producto ?
                                <Spinner/>
                            : <>
                                    <Nombre>
                                    {nombre}
                                    </Nombre>
                                    <ContenedorProducto>
                                         <div>
                                                <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale: es })} </p>
                                                <p>Por {creador.nombre} de {empresa}</p>
                                                <img src={urlimagen}/>
                                                <p>{descripcion}</p>
                                                {usuario &&
                                                    <>
                                                        <h2>Agrega tu comentario</h2>
                                                        <form
                                                            onSubmit={onsubmitComentario}
                                                        >
                                                            <Campo>
                                                                <input
                                                                    type="text"
                                                                    name="mensaje"
                                                                    onChange={handleComentarios}
                                                                    value={nuevosComentarios.mensaje}
                                                                />
                                                            </Campo>
                                                            <InputSubmit
                                                                type="submit"
                                                                value="Agregar Comentario"
                                                            />
                                                        </form>
                                                    </>    
                                                }
                                                <Titulo2>Comentarios</Titulo2>
                                                {comentarios.length === 0 ? "Aun no hay comentarios" :
                                                    <ul>
                                                        {comentarios.map( (comentario, i) => (
                                                            <li
                                                                key={`${comentario.usuarioId}-${i}`}
                                                            >
                                                                <p>{comentario.mensaje}</p>
                                                                <p>Escrito por:
                                                                    <span>{`  ${ comentario.usuarioNombre }`}</span>
                                                                </p>
                                                                {origenCreador(comentario.usuarioId) &&
                                                                    <CreadorProducto>Es creador</CreadorProducto>
                                                                }
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </div>
                                            <aside>
                                                <Boton
                                                    target="_blank"
                                                    bgColor="true"
                                                    href={url}
                                                >
                                                    Visitar Url
                                                </Boton>
                                                <div className="campo-votos">
                                                    <p className="votos">{votos} Votos</p>
                                                    {usuario &&
                                                        <Boton
                                                            onClick={votarProducto}
                                                        >
                                                            Votar
                                                        </Boton>
                                                    }
                                                </div>
                                            </aside>
                                    </ContenedorProducto>
                                    { borrarCreador() && 
                                        <Boton
                                            onClick={eliminarProducto}
                                        >
                                            Eliminar Producto
                                        </Boton>
                                    }
                               </>
                            }
                        </div>   
                    }
            </>
        </Layout>
     );
}
 
export default Producto;