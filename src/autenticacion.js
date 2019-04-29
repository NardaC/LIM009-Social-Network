import {config} from './lib/index.js';

  firebase.initializeApp(config);

const logInBtn = document.getElementById('log-in-btn');
const signIn =document.getElementById("signIn");
// const logOutBtn = document.getElementById('log-out-btn');
const facebookBtn = document.getElementById('log-in-fb');
const gmailBtn = document.getElementById('log-in-gmail')

  logInBtn.addEventListener('click', e => {
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(e => console.log(e.message));
  });

  signIn.addEventListener("click",(e)=>{
      e.preventDefault();
      let email= document.getElementById("email").value;
      let password = document.getElementById("password").value;
      // console.log(email);
      // console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(result){
        alert("registro correcto");
      })
      .catch(function(error){
       alert("no se realizado la autenticacion");
      });

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
	firebase.auth().signInWithPopup(provider).then(result => {
    alert ('exito');
    console.log(result);
	})
	.catch(error => {
    alert('error')
		console.log(error);
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