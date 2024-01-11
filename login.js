function btn_register(){
    const login = document.getElementsByClassName('login');
    for (let i = 0; i < login.length; i++) {
        login[i].style.display = 'none'; 
    }
    const register = document.getElementsByClassName('register');
    for (let i = 0; i < register.length; i++) {
        register[i].style.display = 'flex'; 
    }
}
function btn_login(){
    const register = document.getElementsByClassName('register');
    for (let i = 0; i < register.length; i++) {
        register[i].style.display = 'none'; 
    }
    const login = document.getElementsByClassName('login');
    for (let i = 0; i < login.length; i++) {
        login[i].style.display = 'flex'; 
    }
}