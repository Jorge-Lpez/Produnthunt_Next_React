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

const Producto = () => {

    //Routing para obtener el id actual 
    const router = useRouter();
    const { query: { id } } = router;

    //Creando estate para guardar el resultado de la busqueda
    const [producto, guardarProducto] = useState("");
    //state para el error en la consulta 
    const [error, guardarError] = useState(false);
    //State para activar el spinner 
    const [activar, guardarActivar] = useState(false);
    // Extrayendo firebase de firebasecontext para llamar a la funciones de firebase
    const { firebase, usuario } = useContext(FirebaseContext);

    useEffect(() => {
        if(id){
            const obtenerProducto = async ()  => {
                const productoQuery = await firebase.db.collection("productos").doc(id);
                const producto = await productoQuery.get();
                if(producto.exists){
                    guardarProducto(producto.data());
                    guardarActivar(true);
                    setTimeout(() => {
                        guardarActivar(false);
                    }, 2000);
                }else{
                    guardarError(true);
                }
            }
            obtenerProducto();
        }
    }, [id, producto]);

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
                                                        <form>
                                                            <Campo>
                                                                <input
                                                                    type="text"
                                                                    name="mensaje"
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
                                                {comentarios.map( comentario => (
                                                    <li>
                                                        <p>{comentario.nombre}</p>
                                                        <p>Escrito por: {comentario.usuarioNombre}</p>
                                                    </li>
                                                ))}
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
                               </>
                            }
                        </div>   
                    }
            </>
        </Layout>
     );
}
 
export default Producto;