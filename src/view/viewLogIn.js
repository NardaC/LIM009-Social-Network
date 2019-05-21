import {facebookLogin,googleLogin,createUser,userSesionActive,signInUser, exit} from '../view-controller/index.js'
import { viewRegister } from "../view/viewRegister.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}

export const viewLogin = () => {
    const root= document.getElementById('content')
    const loginPage = `
    <main>  
      <div id="login-container">
        <div class="row-login">
          <div class="column-login">
            <div class="column-login-image">
                <figure>
                    <img class="s-size b-size" src="../images/undraw_Bibliophile_hwqc.svg" alt="">
                </figure>
        </div>
        </div>
        <div class="column-login">
            <div id='login' class="column-login-login">
                <img class="center" src= 'https://i.postimg.cc/rpPnvrL1/fbook.png'>
                <h1 class="center">¡Bienvenido, comensal!</h1>
            <form id="login-user">
                <input class="d-block input-w" type="email" id="email-login" placeholder="Email">
                <input class="d-block input-w" type="password" id="password-login" placeholder="Password">
                <button class="d-block btn-login btn-width" id="login-btn">Log in</button>
                <p class="m-auto">O bien ingresa con...</p>
                <a id="googleBtn"><img src="../images/search.svg" alt="Google" style="width:30px;"></img></a>
                <a id="fbBtn"><img src="../images/facebook-logo-in-circular-button-outlined-social-symbol.svg" alt="Facebook" style="width:30px;"></img></a>
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
      .catch((error) => console.log(error));
    });
     
     
    const loginFacebook = root.querySelector('#fbBtn');
    loginFacebook.addEventListener('click', e => {
      e.preventDefault();
      facebookLogin()
      .then(() => changeHash('#/profile'))
      .catch((error) => console.log(error));

    })
  
    const loginGoogle = root.querySelector('#googleBtn');
    loginGoogle.addEventListener('click', e => {
      e.preventDefault();
      googleLogin()
        .then(() => changeHash('#/profile'))
        .catch((error) => console.log(error));
    });
    return root;
}

