import styled from "@emotion/styled";

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        label{
            flex: 0 0 150px;
            font-size: 1.8rem;
        }

        input{
            flex: 1;
            padding: 1rem;
        }
`;

export const InputSubmit = styled.input`
        background: var(--naranja);
        width: 100%;
        padding: 1.5rem;
        text-align: center;
        color: #fff;
        font-size: 1.8rem;
        text-transform: uppercase;
        border: none;
        font-family: "PT Sans", sans-serif;
        font-weight: 700;

        &:hover{
            cursor: pointer;
        }
`;

export const Titulo= styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

export const Error = styled.p`
    background: red;
    padding: 1rem;
    color: white;
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;