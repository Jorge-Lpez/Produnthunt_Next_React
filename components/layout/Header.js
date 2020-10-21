import React, { useContext } from 'react';
import Buscar from "../ui/Buscar";
import styled from "@emotion/styled";
import Navegacion from "./Navegacion";
import Link from "next/link";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";

const LineaHeader = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding:1rem 0;
`;

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const ContenedorSecundario = styled.div`
    display:flex;
    align-items:center;
`;

const Parrafo = styled.p`
    margin-right:2rem;
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    margin-right: 2rem;
    cursor: pointer;
`;

const ContenedorLogo = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    //funcion cerrar sesion en boton
    const onClickCerrar = async () => {
        firebase.cerrarSesion();
    }
   
    return ( 
        <LineaHeader>
            <ContenedorHeader>
                <ContenedorLogo>
                <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    {/* Buscador aqui */}
                    <Buscar></Buscar>
                    {/* Nav Aqui */}
                    <Navegacion></Navegacion>
                </ContenedorLogo>
                <ContenedorSecundario>
                    {usuario ? 
                        <>
                        <Parrafo>Hola: {usuario.displayName} </Parrafo>
                        <Boton
                         bgColor= "true"
                         onClick = {onClickCerrar}
                         >
                            Cerrar Sesión
                        </Boton>
                        </>
                    :
                        <>
                            <Link href="/login">
                                <Boton
                                    bgColor= "true"
                                >
                                    Login
                                </Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>
                                    Crear Cuenta
                                </Boton>
                            </Link>
                        </>
                    }
                </ContenedorSecundario>
            </ContenedorHeader>
        </LineaHeader>
     );
}
 
export default Header;