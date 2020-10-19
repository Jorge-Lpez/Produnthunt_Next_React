import React, { useState, useEffect } from 'react';


const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;
            if(noErrores){
                fn(); //Fn = Funcion que se ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    //Funcion para leer los datos del formulario 
    const handleChange = e =>{
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    //Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e =>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }

    //Funcion que se realiza cuando se sale de un input
    const handleBlur = () =>{
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }

    return{
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidacion;