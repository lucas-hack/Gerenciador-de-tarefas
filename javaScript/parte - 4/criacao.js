var voltarBtn = document.getElementById("voltar");
voltarBtn.addEventListener("click", function () {
  // Redirecione para o arquivo HTML desejado
  window.location.href = "";
});

var botoes = document.getElementsByClassName("botao");

// Adiciona um ouvinte de evento a cada botão
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    // Remove a classe 'selecionado' de todos os botões
    for (var j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("selecionado");
    }

    // Adiciona a classe 'selecionado' apenas ao botão clicado
    this.classList.add("selecionado");

    // Armazena o ID do botão selecionado no LocalStorage
    localStorage.setItem("selectedButton", this.id);
  });
}

var saveTaskBtn = document.getElementById("saveTask");
saveTaskBtn.addEventListener("click", function () {
  // Obter os valores dos campos de input
  var inputTitle = document.querySelector(".inputTitle").value;
  var inputDate = document.querySelector(".inputDate").value;
  var startTime = document.querySelector(".startTime").value;
  var endTime = document.querySelector(".endTime").value;
  var boxCategory = document.querySelector(".boxCategory").value;

  // Obter o botão com a categoria selecionada
  var selectedButton = document.querySelector(".botao.selecionado");

  // Obter os valores anteriores do localStorage
  var previousTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Criar um objeto com os novos valores
  var newTask = {
    inputTitle: inputTitle,
    inputDate: inputDate,
    startTime: startTime,
    endTime: endTime,
    boxCategory: boxCategory,
    selectedCategory: selectedButton ? selectedButton.id : null
  };

  // Adicionar o novo conjunto de valores ao array de tarefas anteriores
  previousTasks.push(newTask);

  // Armazenar o array atualizado no localStorage
  localStorage.setItem("tasks", JSON.stringify(previousTasks));
  
});
