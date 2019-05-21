// Agregar feeds
import{userSesionActive} from "./index.js"
export const saveFeed = (text, visuality, uid,userName,userPhoto) => {
    let db = firebase.firestore();
    return db.collection("feeds").add({
        description: text,
        state: visuality,
        likes: 0,
        userId: uid,
        user:userName,
        userPhoto: userPhoto,
        date: new Date(),
    })
//     .then(() => {
//     document.getElementById('form-post').reset();
//     console.log("Document written succesfully");        
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
};


//Leer feeds
export const viewFeedDb = (callback) => {
    let db = firebase.firestore();
    db.collection("feeds")
    .onSnapshot((querySnapshot) => {
		const data = [];
		querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
			data.push({id: doc.id,...doc.data()});
			console.log(data);
		});
		callback(data);
	});
}
//actualizar feeds
// export const updateFeeds = (idPost, description) => { 
//     let db = firebase.firebase();
//     return db,collection('feeds').doc(idPost).update({
//     description: description
//     });
// }

// Borrar feeds
export const deleteFeeds = (id) => {
    let db = firebase.firestore();
    db.collection("feeds").doc(id).delete()};
   
//like feeds
// export const likeFeeds = (idPost, counter) => {
//     return firebase.firestore().collection('feeds').doc(idPost).update({
//     likes: counter
//   });
// }; 

// Editar documentos  
//  export const editar = (id,text) => {
//     let db = firebase.firestore();
//     document.getElementById('text-coment').value=text-coment ;
//     var boton=document.getElementById('btn-publicar');
//     boton.innerHTML='Editar';
//     boton.onclick=function(){
//       var washingtonRef = db.collection("feeds").doc(id);
//       var text= document.getElementById('text').value;
//       // Set the "capital" field of the city 'DC'
//     return washingtonRef.update({
//         description: text
//     })
//     .then(function() {
//         console.log("Document successfully updated!");
//         boton.innerHTML='Guardar';
//         document.getElementById("text").value='';
//     })
//     .catch(function(error) {
//         // The document probably doesn't exist.
//         console.error("Error updating document: ", error);
//         });
//     }
// };

