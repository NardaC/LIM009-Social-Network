import {viewLogin} from './view/login.js';
import {viewRegister} from './view/register.js';
import { userSesionActive } from './lib/controller-firebase/index.js';
import {viewFeed} from './view/feed.js'

const getUser = (user) =>{
  viewFeed(user);
}

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/login');
    } else if (hash === '#/register' || hash === '#/profile') {
        return viewTmp(hash);
      } else {
        return viewTmp('#/login');
      }
    }
  
const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('content');
    console.log(router)
    root.innerHTML = '';
    switch (router) {
      case 'login': viewLogin();  
        break;
      case 'register': viewRegister();
        break;
      case 'profile': userSesionActive(getUser);
        break;
      default: viewLogin();
        break;
    }
  }
  
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }