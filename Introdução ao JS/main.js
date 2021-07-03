// JS é uma linguagem de tipagem dinâmica, por isso não precisamos necessariamente declarar o tipo da var 
var nome = "Luigi Belanda";
var idade = 17;
var idade2 = 10;

var idadestr = "17";
var idade2str = "10";

var frase = "Hello mundo!";

// Esta função solta um alerta no site com a string que esta escrita ali ou var etc 
alert("Meu primeiro JS (APENAS UMA STRING)");
alert("Bem vindo " + nome + " (CONCATENANDO O TEXTO COM UMA VAR)");
alert(nome + " eu sei que vc tem " + idade + " anos (CONCATENANDO COM 2 VAR)");

// Por conta da tipagem dinâmica em nenhum momento eu disse que as 2 vars eram integer
// mesmo assim o JS entende o tipo da var e soma elas 
alert(idade + idade2 + " (AQUI ELE ESTA SOMANDO A VAR IDADE COM A VAR IDADE2)");

// Por outro lado se eu colocar o valor das vars entre "" (aspas) ele considera que é uma string
// e o resultado fica assim
alert(idadestr + idade2str + " (AQUI ELE ESTA PEGANDO 2 VARS DO TIPO STRING E JUNTANDO)");

// Em vez do alert podemos usar o console.log para ver o resultado de vars ou mensagens
console.log(nome);
console.log(idade);

// Na frase a seguir podemos mudar o começo dela e usar "Oi" em vez de "Hello", fazemos isso
// usando o replace()
console.log(frase);
console.log(frase.replace("Hello", "Oiii"));

// Podemos deixar também toda a string em letras maiúsculas ou minúsculas usando o toUpperCase() ou toLowerCase()
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());