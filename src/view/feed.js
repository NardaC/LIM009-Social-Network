import { exit, saveFeed, viewFeedDb, deleteFeeds, updatePost, userSesionActive} from "../lib/controller-firebase/index.js";

export const viewFeed = (user) => {
    const root = document.getElementById('content');
    const feedPage =
    `<header>
        <p class="text-header">¡Bienvenidx, ${user.displayName || user.name}!</p>
        <img src= 'assets/logonew-white.png' class="logo-img">
        <a id="exit" class="text-header btn-signout" href="#/login">Cerrar sesión</a>     
    </header>
        <div class="feed-container">
            <div class="user-container">
                <div class="info-user margin-left">
                    <div> 
                        <img src="assets/portada1.png" width=100%>
                    </div>
                    <div class="div-img">
                        <figure>
                            ${user.photoURL === null ? `<img class="img-user" src="assets/user2.png"/>` : `<img class="img-user" src="${user.photoURL}"/>`}
                        </figure>
                        <div>
                            <p class="font-weight-bold">${user.displayName || user.name}</p>
                            <p class="font-weight-bold" >Email: ${user.email} <p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wall-feed margin-left" >
                <div class="form-post">
                    <form id ="form-input">
                        <input type="text" id="text-coment" class="input-comment" placeholder="¿Qué quieres compartir?">
                    </form>
                    <div class="btn-comment">
                        <div class="btn-comment-right">
                            <img src="assets/picture.png" class="upload-icon">
                            <select id="privacy-${user.uid}" class="privacy">
                                <option selected disabled
                                 value="">Privacidad</option>   
                                <option value="Privado" class="font-weight-privacy">Privado</option>
                                <option value="Público" class="font-weight-privacy">Público</option>
                            </select>
                            <button id="btn-publicar" class="btn-login btn-compartir">Compartir</button>
                        </div>
                    </div>
                </div>
                <div id="post-container"></div>
            </div>
        </div>`;
    root.innerHTML = feedPage;
    const btnExit = root.querySelector('#exit');
    btnExit.addEventListener('click', () => {
        exit();
    });
    const btnPublicar = root.querySelector("#btn-publicar");

    btnPublicar.addEventListener('click', () => {
        let text = root.querySelector("#text-coment").value;
        let visuality = root.querySelector(`#privacy-${user.uid}`).value;
        console.log(visuality);
        saveFeed(user.uid,text, visuality, user.displayName);
        document.getElementById("form-input").reset();
    });

    const rootList = document.querySelector("#post-container");
    const pintar = (data) => {
        rootList.innerHTML = '';
        data.forEach(objInfoPost => {            
            const article = document.createElement("article");
            article.innerHTML =
                `<article class="post">
                    <div class="post-user-info">
                        <div class="post-user-info-left">
                            <p class="post-user-name font-weight-bold">${objInfoPost.data.user}</p>
                        </div>
                        <div class="post-user-info-right">
                        ${(objInfoPost.data.userId === user.uid) ? `<img src="assets/delete-button.png" id="btn-delete-${objInfoPost.id}" class="btn-delete">` : `<img src= "assets/delete-button.png" id ="btn-delete-${objInfoPost.id}" class="btn-delete hide" ></img>`}
                        </div>
                    </div>
                    <div class="post-user-message">
                        <textarea id="text-${objInfoPost.id}" class="post-user-text" disabled rows="5" cols="75">${objInfoPost.data.description}</textarea>
                        <img src="" alt="" class="post-user-img">
                    </div>
                    <div class="post-icons">
                        <div class="post-icons-img">
                            <img src="assets/comment-white-oval-bubble.png" alt="" class="post-icon-comment comment-icon">
                            <img src="assets/like.png" alt="Like" data-like="${objInfoPost.id}" class="post-icon-like like-icon">
                            ${(objInfoPost.data.userId === user.uid) ? `<img src="assets/edit.png" alt="Edit" id="btn-edit-${objInfoPost.id}" class="post-icon-edit edit-icon">` :`<img src="assets/edit.png" alt="Edit" id="btn-edit-${objInfoPost.id}" class="post-icon-edit edit-icon hide">` }
                        </div>
                        <div class="post-icons-btn-save">
                            <div id="btn-privacy-${objInfoPost.id}">
                                ${objInfoPost.data.userId === user.uid ? `<p id="privacy-value-${objInfoPost.id}" disabled=true class="font-weight-bold">${objInfoPost.data.state}</p>` : '' }  
                            </div>
                        </div>
                    </div>
                </article>`;
        const btnDelete = article.querySelector(`#btn-delete-${objInfoPost.id}`);        
        btnDelete.addEventListener("click", () => {
            deleteFeeds(objInfoPost.id);
        });
    
        const btnEdit = article.querySelector(`#btn-edit-${objInfoPost.id}`);
     
        btnEdit.addEventListener('click', () => {
            let text = article.querySelector(`#text-${objInfoPost.id}`);
            const btnPrivacy = article.querySelector(`#privacy-value-${objInfoPost.id}`);
            if(text.disabled) {
                text.disabled = false;
                btnEdit.src = "assets/picture24px.png";
                const selectTemplate =
                `<select id="privacy-${user.uid}" class="privacy">  
                    <option selected disabled value="">Privacidad</option> 
                    <option value="Privado" class="font-weight-privacy">Privado</option>
                    <option value="Público" class="font-weight-privacy">Público</option>
                </select>`;
                btnPrivacy.innerHTML = selectTemplate;
                const btnSelect = article.querySelector(`#privacy-${user.uid}`);
                btnSelect.addEventListener('change', () => {
                    return btnSelect.value;
                })
            } else {
                text.disabled = true;
                btnEdit.src = "assets/edit.png";
                const btnSelect = article.querySelector(`#privacy-${user.uid}`);
                return updatePost(objInfoPost.id,text.value,btnSelect.value); 
            }
        });
        rootList.appendChild(article);
        });
    }
    const currentUserId =(user)=>{
    viewFeedDb(pintar, user.uid);
    }
    userSesionActive(currentUserId)
    return root;
}