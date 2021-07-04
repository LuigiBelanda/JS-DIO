// Aqui fazemos uma função para assim que o usuário clicar no botão
// que esta no index.html ele chamar a função abaixo e soltar o alert()
function clicou() {
    alert("Obrigado por clicar");
}

// Nesta função assim que o usuário clicar no outro botão
// iremos chamar a função abaixo, ela pega o elemento da página
// com id = agradecimento e com o innerHTML injetemos um texto 
// na tag selecionada
function mensagem() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
}

// Com essa função iremos redirecionar o usuário para outra página
// para isso podemos usar o window.open() que irá abrir uma página em outra aba
// ou usar o window.location.href = "" que irá abrir uma página na mesma aba
function redirecionamento() {
    // window.open("https://digitalinnovation.one/");
    window.location.href = "https://www.microsoft.com/pt-br/";
}


// Com as duas funções abaixo vamos trocar o texto de um elemento html
// iremos fazer isso assim que o usuário passar o mouse por cima do elemento
// ou quando o usuário tirar o mouse de cima do elemento
function trocadetexto() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Vc passou o mouse por cima do texto");
}

function voltartexto() {
    document.getElementById("mousemove").innerHTML = "Passa o mouse por cima";
}

// função que é chamada pelo onload no HTML
function load() {
    alert("Página carregada");
}

// essa função pega qual a opção que o usuário está escolhendo no select
// e mostra o valor no console
function funcaoChange(elemento) {
    console.log(elemento.value);
}