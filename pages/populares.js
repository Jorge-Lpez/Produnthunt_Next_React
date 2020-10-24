import React from 'react';
import Layout from "../components/layout/Layout";
import Productos from "../components/layout/Productos";
import useProductos from "../hooks/useProductos";

const Populares = () => {

    const productos   = useProductos("votos");

    return ( 
        <Layout>
            <div className="listado-productos">
                <div className="contenedor">
                    <ul className="bg-white">
                        {productos.map(producto => (
                           <Productos
                              key={producto.id}
                              producto={producto}
                           />
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
     );
}
 
export default Populares;