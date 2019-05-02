const page1 =()=>{
    const content = document.getElementById('content');
    const loginPage =`
    <figure><img src="" alt="logo"></figure>
    <h1>FOODBOOK</h1>
    <h3>Bienvenidx</h3>
    <section id ='login'>
        <form id="formIngresar"action="">
         <div>
            <label for="email">E-mail:</label>
            <input id="email" type="email"  maxlength="50" data-length="50" />
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" type="password"  maxlength="10" data-length="10" />
        </div>
        <button id="signIn">sign in</button>
        </form>
    </section>
    `
    content.innerHTML = loginPage;

const registerPage =()=>{
    const login = document.getElementById('login');
    login.innerHTML="";
    const register =`
        <button id="log-in-btn" type="button">log in</button>
		<button id="log-out-btn" type="button">log out</button>
		<button id="log-in-fb" type="button">facebook</button>
        <button id='log-in-gmail' type='button'>Gmail</button>
        `
    const div= document.createElement('div');
    div.innerHTML = register;
};
}