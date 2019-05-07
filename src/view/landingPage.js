import{signInUser, googleLogin, facebookLogin, userSesionActive} from '../controller/index.js'
import {registerPage} from'./register.js'
import {registerUserOk} from'../controller/viewController.js'
export const page1 = () => {
    const content = document.getElementById('content');
    const loginPage = `  
    <figure>
      <img src="../images/undraw_chef_lbjx.svg" alt="" style="width:300px;">
    </figure>
    <div id='login'>
      <h1>FoodBook</h1>
      <h3>¡Bienvenido, comensal!</h3>
      <form id="login-user">
        <input type="email" id="email-login" placeholder="Email">
        <input type="password" id="password-login" placeholder="Password">
        <button id="login-btn">Log in</button>
        <p>O bien ingresa con...</p>
        <button id="googleBtn"><img src="../images/search.svg" alt="Google" style="width:30px;"></img></button>
        <button id="fbBtn"><img src="../images/facebook-logo-in-circular-button-outlined-social-symbol.svg" alt="Facebook" style="width:30px;"></img></button>
      </form>
      <p>¿No tienes una cuenta? <a id="myBtn" href="#">Regístrate.</a></p>
    </div>`;
    content.innerHTML = loginPage;

    const btnLogInEmail = document.getElementById('login-btn');
    const emailLogInEmail = document.getElementById('email-login');
    const passwordLogInEmail = document.getElementById('password-login');
    btnLogInEmail.addEventListener('click', (e) => {
      e.preventDefault();
      signInUser(emailLogInEmail.value, passwordLogInEmail.value);
    });
    userSesionActive();

    const loginFacebook = document.getElementById('fbBtn');
    loginFacebook.addEventListener('click', (e) => {
        e.preventDefault();
        facebookLogin();
    })

    const loginGoogle = document.getElementById('googleBtn');
    loginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        googleLogin();
    });

    const btnRegister = document.getElementById('myBtn');
  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerPage();
    registerUserOk();
  });
};