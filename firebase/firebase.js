import app from "firebase/app";
import firebaseConfig from "./config";
//Habilitamos la autentificacion
import "firebase/auth";
//Habilitamos el firebasestore para guardar archivos en la base de datos
import "firebase/firestore";
//Habilitamos el storage
import "firebase/storage";

class Firebase {
    constructor() {

        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }

        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //Registrar unn usuario 
    async registrar(nombre, email, password){
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

    //Inicia sesion del usuario 
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email,password);
    }

    //Cerrar sesion 
    async cerrarSesion() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();

export default firebase;