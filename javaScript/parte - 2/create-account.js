function carregarImagem() {
    var url = document.getElementById("imageUrl").value;
    document.getElementById("userImage").src = url;
}

// validação de email e senha

let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
// let textForm = document.getElementById("textForm");
// let textEmail = document.getElementById("textEmail");
// let textPassword = document.getElementById("textPassword");

form.addEventListener('submit', (e) => {
    if (email.value == "" || password.value == "") {
        // textForm.textContent = "Você precisa preencher os campos necessários";
    } else if (validEmail(email.value) === true && validPassword(password.value) === true){
        console.log(email.value);
        console.log(password.value);
        // textForm.textContent = "";
        // textEmail.textContent = "";
        // textPassword.textContent = "";
    } else {
        console.log("requisição não atendida")
    }

    e.preventDefault();
})

email.addEventListener("keyup", () => {
    if (validEmail(email.value) !== true) {
        // textEmail.textContent = "o formato do email deve ser @gmail.com";
    } else {
        console.log("email aceito")
        // textEmail.textContent = "";
    }
})

password.addEventListener("keyup", () => {
    if (validPassword(password.value) !== true){
        // textPassword.textContent = "A senha precisa ter 6 digitos, no mínimo um maiúsculo e um minúsculos"
    } else {
        console.log("senha aceita")
        // textPassword.textContent = ""
    }
})

function validEmail(email) {
    let emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(email)
}

function validPassword(password) {
let passwordPattern = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/)
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/
return passwordPattern.test(password)
}