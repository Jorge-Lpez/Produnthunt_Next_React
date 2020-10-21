import React, { useEffect, useState, useContext } from 'react';
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Productos from "../components/layout/Productos";
import styled from "@emotion/styled";

const ContenedorPrincipal = styled.div`
    background-color: #f3f3f3;
`;


const Contenedor = styled.div`
    max-width: 1200px;
    width: 95%;
    padding: 5rem 0;
    margin: 0 auto;
`;

const Color = styled.ul`
   background-color: #FFF;
`;

const  Home = () => {

  const [productos, guardarProductos] = useState([]);
  const { firebase } =  useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection("productos").orderBy("creado", "desc").onSnapshot(manejarSnapshot);
    }
    obtenerProductos();
  }, [])

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map(doc =>{
      return{
        id: doc.id,
        ...doc.data()
      }
    });

    guardarProductos(productos);
  }

  return (
      <div>
          <Layout>
            <ContenedorPrincipal>
                <Contenedor>
                    <Color>
                        {productos.map(producto => (
                           <Productos
                              key={producto.id}
                              producto={producto}
                           />
                        ))}
                    </Color>
                </Contenedor>
            </ContenedorPrincipal>
          </Layout>
      </div>
  )
}

export default Home;