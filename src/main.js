import { initRouter } from './router.js';

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