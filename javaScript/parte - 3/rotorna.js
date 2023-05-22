// Recupere o valor armazenado do local storage
var valorArmazenado = localStorage.getItem("nome");
var imageArmazenado = localStorage.getItem("imageUrl");

// Verifique se o valor foi encontrado
if (valorArmazenado !== null) {
  // Atualize o conteúdo do elemento HTML com o valor armazenado
  let buscaNome = document.getElementById('saveName');
  buscaNome.textContent = valorArmazenado;
} else {
  // O valor não foi encontrado no local storage
  console.log("Valor não encontrado no local storage");
}

if (imageArmazenado !== null) {
  let imageArm = document.getElementById("fotoPerfil");
  imageArm.src = imageArmazenado;
} else {
  // O valor não foi encontrado no local storage
  console.log("Imagem não encontrada no local storage");
}

// Adicione um evento de clique ao botão "criarTask"
var criarTaskBtn = document.getElementById("criarTask");
criarTaskBtn.addEventListener("click", function () {
  // Redirecione para o arquivo HTML desejado
  window.location.href = "../../pages/create-task.html";
});

