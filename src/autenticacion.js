
  const registrar =document.getElementById("logIn");

  registrar.addEventListener("click",(e)=>{
      e.preventDefault();
      let email= document.getElementById("email").value;
      let password = document.getElementById("password").value;
      // console.log(email);
      // console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(result){
        alert("registro correcto");
      })
      .catch(function(error){
       alert("no se realizado la autenticacion");
      });

  });