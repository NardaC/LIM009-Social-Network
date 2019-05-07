import {createUser, signInUser} from './controller/index.js'

 // Funcion de Login email contrasena
 const registerUserOk = () => {
    const btnRegisterEmail = document.getElementById('register-btn');
    const emailSignIn = document.getElementById('email-signup');
    const passwordSignIn = document.getElementById('password-signup');

    btnRegisterEmail.addEventListener('click', (e) => {
      e.preventDefault();
      createUser(emailSignIn.value, passwordSignIn.value);
    });
  }
 
  const btnRegister = document.getElementById('myBtn');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerPage();
    registerUserOk();
  });

  const btnLogInEmail = document.getElementById('login-btn');
  const emailLogInEmail = document.getElementById('email-login');
  const passwordLogInEmail = document.getElementById('password-login');
  btnLogInEmail.addEventListener('click', (e) => {
    e.preventDefault();
    signInUser(emailLogInEmail.value, passwordLogInEmail.value);
  });