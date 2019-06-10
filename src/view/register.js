import { createUser, userSesionActive } from "../lib/controller-firebase/index.js";
import { showErrorMessage } from "./login.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}
export const viewRegister = () => {
  const root= document.getElementById('content');
  root.innerHTML = '';
  const register =`
    <div class="register-container">
      <header class="header-register">
        <a href="http://localhost:5501/src/index.html#/login"><img src="assets/logonew-white.png" class="logo-img"></a>      
      </header>
      <form class="form-register">
        <input class="d-block input-w" type="text" id="name-signup" placeholder="Usuario">
        <input class="d-block input-w" type="email" id="email-signup" placeholder="Email">
        <input class="d-block input-w" type="password" id="password-signup" placeholder="Password">
        <section id= "login-error-alert" class= "error-alert"></section>
        <button id="register-btn" class="d-block btn-login btn-width btn-register">Registrarse</button>
        <a href="#/login" class="d-block btn-login btn-width back-register">Regresar</a>
      </form>
    </div>`;
      root.innerHTML = register;

        const btnRegisterEmail = root.querySelector('#register-btn');
        const emailSignUp = root.querySelector('#email-signup');
        const passwordSignUp = root.querySelector('#password-signup');
      
        btnRegisterEmail.addEventListener('click', (event) => {
          event.preventDefault();
          const nameSignUp = root.querySelector('#name-signup');
          createUser(emailSignUp.value, passwordSignUp.value, nameSignUp.value)
          .then((user) => {
            changeHash('#/profile');
            user.user.updateProfile({
              displayName: nameSignUp.value
            });
          })
          .catch((error) => {
            let errorCode = error.code;
            if (errorCode === 'auth/invalid-email') {
              document.getElementById('login-error-alert').innerHTML= '';
              showErrorMessage('Correo electrónico inválido.');
            } else if (errorCode === 'auth/weak-password') {
              document.getElementById('login-error-alert').innerHTML= '';
              showErrorMessage('La clave debe tener al menos 6 dígitos.');
            } else if (errorCode === 'auth/email-already-in-use') {
              document.getElementById('login-error-alert').innerHTML= '';
              showErrorMessage('El correo electrónico ya está siendo utilizado.');
            } else {
              document.getElementById('login-error-alert').innerHTML= '';
              showErrorMessage(errorCode);
            }
          });
        });
        userSesionActive();
 
      return root;
  };