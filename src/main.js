// Este es el punto de entrada de tu aplicacion
import { initRouter } from './router.js';

<<<<<<< HEAD
import {config} from './lib/index.js';

  firebase.initializeApp(config);

const logInBtn = document.getElementById('log-in-btn');
const signIn =document.getElementById("signIn");
const logOutBtn = document.getElementById('log-out-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const facebookBtn = document.getElementById('log-in-fb');
const gmailBtn = document.getElementById('log-in-gmail')

logInBtn.addEventListener('click', e => {
	const email = emailInput.value;
	const password  = passwordInput.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
});

signIn.addEventListener('click', e => {
	const email = emailInput.value;
	const password  = passwordInput.value;
	// toDo: escribir funcion que valide el email y el password
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
});

logOutBtn.addEventListener('click', e => {
	firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged( firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
	} else {
		console.log('no logueado');
	}
});


// inicio de sesion con facebook
const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithRedirect(provider).then(result => {
		console.log(result.user.displayName);
	})
	.catch(error => {
		console.log(error.message);
	});
}

facebookBtn.addEventListener('click', () => {
	authFacebook();
});
// Inicio con Gmail
const authGmail = ()=>{
	const provider1= new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider1).then(result => {
	
	console.log(result);
	})
	.catch(error => {
		console.log(error.message);
	});
	
}
gmailBtn.addEventListener('click', () =>{
	authGmail(); 	
})
=======
window.addEventListener('load', () => {  
  var config ={
    apiKey: "AIzaSyDhPzlMom9mAEcuyk_Dw05NY2awAH_zYAU",
    authDomain: "red-social-58567.firebaseapp.com",
    databaseURL: "https://red-social-58567.firebaseio.com",
    projectId: "red-social-58567",
    storageBucket: "red-social-58567.appspot.com",
    messagingSenderId: "305974368757",
    appId: "1:305974368757:web:1024756010c9ad41"
  };

  firebase.initializeApp(config);
  initRouter();
});
>>>>>>> 9e00af2e25eca62b8bb51c9c0e3b63df6f21e215
