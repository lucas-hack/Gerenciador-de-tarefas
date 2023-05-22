function carregarImagem() {
    var url = document.getElementById("imageUrl").value;
    document.getElementById("userImage").src = url;
}

let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");
let imageUrl = document.getElementById("imageUrl")
let nome = document.getElementById("nome");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value === "" || password.value === "" || nome.value === "") {
        console.log("Você precisa preencher os campos necessários");
    } else if (validEmail(email.value) && validPassword(password.value) && validNome(nome.value)) {
        console.log(email.value);
        console.log(password.value);
        console.log(nome.value);

        localStorage.setItem("email", email.value); // Armazenar valor no Local Storage

        localStorage.setItem("password", password.value);

        localStorage.setItem("nome", nome.value);

        localStorage.setItem("imageUrl", imageUrl.value);

        window.location.href = "home.html"
        
    } else {
        console.log("Requisição não atendida");
    }
});

email.addEventListener("keyup", () => {
    if (validEmail(email.value)) {
        console.log("Email aceito");
    } else {
        console.log("O formato do email deve ser exemplo@gmail.com");
    }
});

password.addEventListener("keyup", () => {
    if (validPassword(password.value)) {
        console.log("Senha aceita");
    } else {
        console.log("A senha precisa ter no mínimo 6 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número");
    }
});

nome.addEventListener('keyup', () => {
    if (validNome(nome.value)) {
        console.log("Nome validado");
    } else {
        console.log("O nome precisa ter pelo menos uma letra maiúscula e uma letra minúscula, com no mínimo 3 caracteres");
    }
});

imageUrl.addEventListener("keyup", () => {
    if (validPassword(imageUrl.value)) {
        console.log("imagem não aceita");
    } else {
        console.log("imagem aceita");
    }
});

function validEmail(email) {
    let emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}

function validPassword(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/;
    return passwordPattern.test(password);
}

function validNome(nome) {
    let nomePattern = /^(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
    return nomePattern.test(nome);
}

function validImageUrl(imageUrl) {
    let imageUrlPattern = /\.(jpeg|jpg|gif|png)$/i;
    return imageUrlPattern.test(imageUrl);
}