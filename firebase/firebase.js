import app from "firebase/app";
import firebaseConfig from "./config";
//Habilitamos la autentificacion
import "firebase/auth";

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
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
}

const firebase = new Firebase();

export default firebase;