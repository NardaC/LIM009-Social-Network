import {facebookLogin,googleLogin,createUser,userSesionActive,signInUser, exit} from '../lib/controller-firebase/index.js';
//import { viewRegister } from "../view/viewRegister.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}
export const showErrorMessage = (errorText) => {
  let errorMessage = document.createElement('p');
  let textError = document.createTextNode(errorText);
  errorMessage.appendChild(textError);
  document.getElementById('login-error-alert').appendChild(errorMessage);
};

export const viewLogin = () => {
    const root= document.getElementById('content')
    const loginPage = 
    `<main>  
      <div id="login-container">
        <div class="row-login">
          <div class="column-login">
            <div class="column-login-image">
                <figure>
                    <img class="s-size b-size" src="assets/undraw_street_food_hm5i.svg" alt="">
                </figure>
            </div>
        </div>
        <div class="column-login">
            <div id='login' class="column-login-login">
                <img class="center" src= 'https://i.postimg.cc/rpPnvrL1/fbook.png'>
                <h1 class="center">¡Bienvenidx, comensal!</h1>
            <form id="login-user">
                <input class="d-block input-w" type="email" id="email-login" placeholder="Email">
                <input class="d-block input-w" type="password" id="password-login" placeholder="Password">
                <section id= "login-error-alert" class= "error-alert"></section>
                <button class="d-block btn-login btn-width" id="login-btn">Inicia sesión</button>
                <p class="m-auto">O bien ingresa con...</p>
                <a id="fbBtn"><img class="social-btn" src="assets/facebook-logo-in-circular-button-outlined-social-symbol.svg" alt="Facebook"></img></a>
                <a id="googleBtn"><img class="social-btn" src="assets/search.svg" alt="Google"></img></a>
            </form>
          <p class="m-auto">¿No tienes una cuenta? <a id="myBtn" class="register" href="#/register">Regístrate.</a></p>
          </div>
          </div>
        </div>
      </div>
    </main>`;
    root.innerHTML = loginPage;
  
    const btnLogInEmail = root.querySelector('#login-btn');
    const emailLogInEmail = root.querySelector('#email-login');
    const passwordLogInEmail = root.querySelector('#password-login');

    
    btnLogInEmail.addEventListener('click', (event) => {
      event.preventDefault();
      signInUser(emailLogInEmail.value, passwordLogInEmail.value)
      .then(() => changeHash('#/profile'))
      .catch((error) => {
        let errorCode = error.code;
        console.log(error.code);
        if (errorCode === 'auth/user-not-found') {
          showErrorMessage('Usuario no registrado.');
        } else if (errorCode === 'auth/weak-password') {
          showErrorMessage('La clave debe tener al menos 6 dígitos.');
        } else if (errorCode === 'auth/wrong-password') {
          showErrorMessage('Clave inválida');
        } else if (errorCode === 'auth/invalid-email') {
          showErrorMessage('Correo electrónico inválido.');
        } else {
          showErrorMessage(errorCode);
        }        
      });
    });
      
    const loginFacebook = root.querySelector('#fbBtn');
    loginFacebook.addEventListener('click', e => {
      e.preventDefault();
      facebookLogin()
      .then(() => changeHash('#/profile'))
      .catch((error) => {
        console.log(error);
        
      });

    });
  
    const loginGoogle = root.querySelector('#googleBtn');
    loginGoogle.addEventListener('click', e => {
      e.preventDefault();
      googleLogin()
        .then(() => changeHash('#/profile'))
        .catch((error) => alert(error));
    });
    return root;
}

