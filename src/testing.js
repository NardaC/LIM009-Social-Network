const signinBtn = document.getElementById('signin-btn');

signinBtn.addEventListener('click', () => {
  const signinEmail = document.getElementById('signin-email').value;
  const signinPassword = document.getElementById('signin-password').value;
  console.log(signinEmail);
  console.log(signinPassword);
})

// MODAL - REGISTRO
// Get the modal
const modal = document.getElementById('myModal');
// Get the button that opens the modal
const btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.addEventListener('click', () => {
  modal.style.display = 'block';
})
// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = 'none';
})
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    }
})

class authentication {
    createUserWithEmailAndPass (username, email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user.updateProfile({
                displayName: username
            })
            const emailVerificationSettings = {
                url: 'http://127.0.0.1:5501/src/index.html#'
            }
            result.user.sendEmailVerification(emailVerificationSettings).catch(error => {
                console.log(error);
            })
            .catch(error => {
                console.log(error);
            })
            firebase.auth().signOut()
        })
        .catch(error => {
            console.log(error);
        })
    }

    authEmailAndPass (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

// FORM - REGISTRO
const signupBtn = document.getElementById('signup-btn');

signupBtn.addEventListener('click', () => {
  const signupName = document.getElementById('signup-name').value;
  const signupEmail = document.getElementById('signup-email').value;
  const signupPassword = document.getElementById('signup-password').value;
  console.log(signupName);
  console.log(signupEmail);
  console.log(signupPassword);
  const auth = new authentication()
  auth.createUserWithEmailAndPass(signupEmail, signupPassword, signupName)
})
