// Aqui estamos fazendo uma função chamada "soma"
// esta função irá receber dois parâmetros, n1 e n2
// e depois vai retornar a soma desse dois 
function soma(n1, n2) {
    return n1 + n2;
}

// aqui fazemos um alert() que chama a função soma() e passa os dois valores 5 e 10
alert(soma(5, 10));


// =============================== 
// =============================== 


// Fazemos aqui um função de replace, onde passamos três parâmetros
// frase, nome e novo_nome
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

// Aqui passamos os três parâmetros, neste caso a frase é "Vai Japão"
// o nome que a gente que trocar é "Japão"
// e vamos trocar ele por "Brasil"
alert(setReplace("Vai Japão", "Japão", "Brasil"));


// =============================== 
// =============================== 


// Esta função serve para recebermos a idade de um usuário e ver
// se ele é maior de idade ou não
function validaIdade(idade) {
    var validar;
   
    if (idade >= 18) {
        validar = true;
    } 
    else {
        validar = false;
    }

    return validar;
}

// criamos a var idade e o usuário insere um valor nela pode meio do prompt()
var idade = prompt("Qual sua idade?");

// depois chamamos a função passando a var idade pra ela
console.log(validaIdade(idade));