// aqui exportaras las funciones que necesites
import {viewFeed} from '../view/viewFeed.js';


//Cerrar sesión
export const exit = () => {
  return firebase.auth().signOut()
};

//Crear usuario
export const createUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
};

//acceder con gmail y contraseña
export const signInUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};
//usuario con sesion activa - muestra info del usuario registrado
export const userSesionActive = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      viewFeed(user)
    } else {
      console.log("no logeado")
    }
  });
};

//iniciar con google
export const googleLogin = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(providerGoogle)
};
//iniciar confabcebook
export const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};


//funcion que nos recomendo Mariano
// const getUserWhenReady=(callback)=>{
//   if (firebase.auth.currentUser){ callback(currentUser)}
//   else{
//    const unSucribe = firebase.auth().onAuthStateChanged((user)=>{
//      if (user){
//        callback (user)
//      }else{
//        callback(null)
//      }
//    })
//    unSucribe(); 
//   }
// }