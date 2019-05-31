// Cerrar sesión
export const exit = () => {
  return firebase.auth().signOut()
};

//Crear usuario
export const createUser = (emailSignIn, passwordSignIn) => {
  return firebase.auth().createUserWithEmailAndPassword(emailSignIn, passwordSignIn)
 };

//acceder con gmail y contraseña
export const signInUser = (emailLogIn, passwordLogIn) => {
  return firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
};

export const userSesionActive = (callback) => {
  let userCurrent = firebase.auth().currentUser;
   if (userCurrent) {
      return callback(userCurrent)
  } else {
      const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              return callback(user)
              // User is signed in.
          } else {
              // No user is signed in.
              return callback(null);
          }
          unsubscribe()
      });
  }
}

//iniciar con google
export const googleLogin = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  //console.log(providerGoogle);
  return firebase.auth().signInWithPopup(providerGoogle)
};
//iniciar con facebook
export const facebookLogin = () => {
  var provider = new firebase.auth.FacebookAuthProvider();
  //console.log(provider);
  return firebase.auth().signInWithPopup(provider)
  
};

// Agregar documentos
export const saveFeed = (uid, text, visuality, userName) => {
  let db = firebase.firestore();
  return db.collection("feeds").add({
    userId: uid,
    user: userName,
    description: text,
    state: visuality,
    likes: 0,
    date: new Date(),
  })
  
};

//LEER DOCUMENTOS
export const viewFeedDb = (callback,user) => {
  let db = firebase.firestore();
 db.collection("feeds")
 .orderBy('date', 'desc')
 .onSnapshot((querySnapshot) => {
   let data = [];
  querySnapshot.forEach((doc) => {
    const infoDelDocumento = {
      id: doc.id,
      data: doc.data()
    };
      if (doc.data().userId === user || doc.data().state === "Público") {
       data.push(infoDelDocumento);
      }  
  })
  callback(data);
})
};

// POST PÚBLICOS
// export const publicPostsOnly = (callback) => {
//   let db = firebase.firestore();
//  db.collection("feeds")
//  .where("state", "==", "Público")
//  .onSnapshot((querySnapshot) => {
//    let data = [];
//   querySnapshot.forEach((doc) => {
//     const infoDelDocumento = {
//       id: doc.id,
//       data: doc.data()
//     };
//       data.push(infoDelDocumento);
//   })
//   callback(data);
// })
// }

// BORRAR POSTS
export const deleteFeeds = (id) => {
  let db = firebase.firestore(); 
 return db.collection("feeds").doc(id).delete()
};

// EDITAR POSTS
export const updatePost = (id, text, visuality) => {
  let db = firebase.firestore();
  return db.collection("feeds").doc(id).update({
    description: text,
    state: visuality,
  })
};

// // LIKES
// export const likePost = (id, like) => {
//   let db = firebase.firestore();
//   return db.collection("feeds").doc(id).update({
//     likes:like
//   })
// }


