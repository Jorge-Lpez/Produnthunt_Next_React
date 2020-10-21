import React from 'react';
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const Imagen = styled.img`
    width: 200px;
`;

const Comentario = styled.img`
    width: 50px;
`;


const Productos = (producto) => {
    console.log(producto);
    const {id, comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos} = producto.producto;
    return ( 
        <li>
            <div>
                <div>
                    <Imagen src={urlimagen} />
                </div>
                <div>
                    <h1>{nombre}</h1>
                    <p>{descripcion}</p>
                    <div>
                        <Comentario src="img/comentario.png" />
                        <p>{comentarios.length} comentarios</p>
                    </div>

                    <p>Publicado hace: { formatDistanceToNow(new Date(creado), { locale: es })}</p>
                </div>
            </div>

            <div>
                <div> &#9650; </div>
                <p>{votos}</p>
            </div>
        </li>
    )
}
 
export default Productos;