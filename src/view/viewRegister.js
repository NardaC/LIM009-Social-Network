import { createUser, userSesionActive } from "../view-controller/index.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}
export const viewRegister = () => {
  const root= document.getElementById('content');
  root.innerHTML = '';
  const register =`
      <form>
        <input type="text" id="name-signup" placeholder="Nombre">
        <input type="text" id="lastName-signup" placeholder="Apellido">
        <input type="email" id="email-signup" placeholder="Email">
        <input type="password" id="password-signup" placeholder="Password">
        <button id="register-btn">Registrarse</button>
        <button id="regresarLogin"><a href="#/login">Regresar</a></button>
        
      </form> `;
      root.innerHTML = register;

        const btnRegisterEmail = root.querySelector('#register-btn');
        const emailSignUp = root.querySelector('#email-signup');
        const passwordSignUp = root.querySelector('#password-signup');
    
        btnRegisterEmail.addEventListener('click', (event) => {
          event.preventDefault();
          createUser(emailSignUp.value, passwordSignUp.value)
          changeHash('#/profile');
        });
        userSesionActive();
 
      return root;
  };