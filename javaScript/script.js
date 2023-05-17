// funcionamento do borão para a parte 2
function esconde(el) {
    document.getElementById(el).style.display = 'none';
}

// validação de email e senha
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    console.log(email.value);
    console.log(password.value);
    e.preventDefault();
})
