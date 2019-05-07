import {createUser}from '../controller/viewController.js'
import {exit} from '../controller/index.js'

export const registerPage = () => {
  const login = document.getElementById('login')
  login.innerHTML = '';
  const register =`
    <form>
      <input type="text" id="name-signup" placeholder="Nombre">
      <input type="text" id="lastName-signup" placeholder="Apellido">
      <input type="email" id="email-signup" placeholder="Email">
      <input type="password" id="password-signup" placeholder="Password">
      <button id="register-btn">Registrarse</button>
      <button id="regresarHome">Regresar</button>
    </form> `;
  const div = document.createElement('div')
  div.innerHTML = register;
  login.appendChild(div);
  
  document.getElementById('regresarHome').addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("ok");
    exit();
  })

// const registerUserOk = () => {
//   const btnRegisterEmail = document.getElementById('register-btn');
//   const emailSignIn = document.getElementById('email-signup');
//   const passwordSignIn = document.getElementById('password-signup');

//   btnRegisterEmail.addEventListener('click', (e) => {
//     e.preventDefault();
//     createUser(emailSignIn.value, passwordSignIn.value);
//   });
// }
};
  









