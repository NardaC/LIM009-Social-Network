import { exit,userSesionActive } from "../view-controller/index.js";
import { saveFeed, viewFeedDb,deleteFeeds} from "../view-controller/feed.js";

export const viewFeed = (user) => {
    const root = document.getElementById('content');
    const feedPage = `
        <header>
            <p>Bienvenidx ${user.displayName || user.name}</p>
            <img src= '../images/fob-color.png' width= 200px height=50px>
            <p id="exit"><a href="#/login">Cerrar sesión</a></p>        
        </header>
        <section class="info-user">
            <div class="div-img">
                <figure><img class="img-user" src="${user.photoURL}" alt="foto"></figure>
             </div>
             <div>
                <p>${user.displayName || user.name}</p>
                <p>Email: ${user.email}<p>
            </div>
        </section>
        <div id ='form-post'> 
            <select>
                <option>Visualización</option>    
                <option value="private">Privado</option>
                <option value="public">Público</option>
            </select>
            <input type="text" id="text-coment" class="input-comment" placeholder="Que quieres compartir">
            <div>   
                <img src="../images/image.png" width="30px" >
                <input type="file" value="upload" id="fileButton"></input>
            </div>
            <a id="btn-publicar"><img src="../images/more.png" width="30px"> </a>
        </div>
        <section id="post-container">
        </section>
        `;
        root.innerHTML = feedPage;
    const btnExit = root.querySelector('#exit');
    btnExit.addEventListener('click', () => {
        console.log("salir");    
        exit() 
    });
    const btnPublicar = root.querySelector("#btn-publicar");
    btnPublicar.addEventListener('click', createNewFeed);

    const btnComent= root.querySelector("#btn-publicar");
    btnComent.addEventListener('click', () => {        
        let textcoment = root.querySelector("#text-coment").value;
        let visuality = 'public';
        saveFeed(textcoment, visuality, user);
    })
    listFeed(root)
    return root;
}

export const createNewFeed =()=>{
    const feedDescription = document.querySelector("#text-coment").value;
    const user = userSesionActive();
    if (user && feedDescription !== '') {
        document.getElementById('post-container').innerHTML = ''
        viewFeedDb(listFeed);
    } else {
        const date = new Date().toString();
        console.log(date)
        viewFeedDb(listFeed);
    }
    document.querySelector("#text-coment").value = '';
}

//  export const listFeed =(objPosts)=>{
//     const user = userSesionActive();
//     const root = document.createElement('div');
//     root.innerHTML = '';
//     const templateListFeed = `
//   <div class="container-user">
//     ${objPosts.userPhoto === null ? `<img src="../images/user2.png "/>` : `<img src="${objPosts.userPhoto}"/>`}
//     <p>Publicado por ${objPosts.user}</p>
//     ${(user.uid === objPosts.userId) ? `<img id="btn-delete-${objPosts.id}" src="../images/error.png" style="width:25px" alt="Eliminar" />`: ''}
//     <div>
//         <p>${objPosts.description}</p>
//     </div>
//     <div>
//         <span id="like-counter">${objPosts.likes}</span>
//         <a id="btn-like-${objPosts.id}" ><img src="../images/like.png" alt="Like" style="width:25px"></img></a>
//         <a id="btn-edit-${objPosts.id}"><img src="../images/edit.png" alt="Editar" style="width:25px"></img></a>
//     </div>`;
//     root.innerHTML+= templateListFeed;
//     if (user.uid === objPosts.userId) {
//         const deleteBtn = root.querySelector(`#btn-delete-${objPosts.id}`);
//         deleteBtn.addEventListener('click', () => {
//             deleteFeeds(objPosts.id)
//         });
//         // const editBtn = root.querySelector(`#btn-edit-${postObject.id}`);
//         // const textArea = root.querySelector(`#post-edit-${postObject.id}`);
//         // editBtn.addEventListener('click', () => {
//         return templateListFeed;
//     //});
//         }
//  }





export const listFeed = (root) => {    
    viewFeedDb((posts) => {        
        let html = ""
        posts.forEach(element => {
        let child = `
        <section class='feed'>
        <div class="container-user">
            ${user.photoURL === null ? `<img class="img-user" src="../../images/user2.png"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
            ${user.displayName === null ? `<p id="inf-user"><strong> ${user.email}</strong><p>`:`<p id="inf-user"><strong>${user.displayName}</strong><p>` }  
        </div>
            <div>
                <p>${element.id}</p>
                <a><img src="../images/error.png" style="width:25px" alt="Eliminar"></img></a>
            </div>
            <div>${element.description}</div>
            <a id="btn-like" ><img src="../images/like.png" alt="Like" style="width:25px"></img></a>
            <a id="btn-edit"><img src="../images/edit.png" alt="Editar" style="width:25px"></img></a>
        </section>
        `;
     html += child;
        });
        root.querySelector('#post-container').innerHTML = html;
        
        // root.innerHTML = "";
        // root.appendChild(showActUser({
        //     ...user,
        //     name,
        // }, posts))
    })

 }