
  const registrar =document.getElementById("logIn");

  registrar.addEventListener("click",(e)=>{
      e.preventDefault();
      let email= document.getElementById("email").value;
      let password = document.getElementById("password").value;
    //   console.log(email);
    //   console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
    // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        window.location.href="#errorModal";
    // ...
  });

  })