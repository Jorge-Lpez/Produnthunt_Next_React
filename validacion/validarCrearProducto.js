export default function validarCrearProducto(valores){

    let errores = {};

    if(!valores.nombre){
        errores.nombre = "El nombre del producto es obligatorio"
    }

    if(!valores.empresa){
        errores.empresa = "El nombre de la empresa es obligatorio "
    }

    if(!valores.imagen){
        errores.imagen = "La imagen es indispensable para el producto"
    }

    if(!valores.url){
        errores.url = "La url de tu producto es obligatoria"
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "Tu url no es valida, Ingresa una URL valida"
    }

    if(!valores.descripcion){
        errores.descripcion = "La descripcion es importante para conocer tu producto";
    }

    return errores;
}