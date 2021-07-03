// com o comando prompt() ele irá criar algo parecido com o alert()
// mas terá um campo para o usuário escrever algo
var idade = prompt("Qual sua idade?");

// Com o if ele irá ver se a var idade tem o valor maior ou igual a 18
// se sim, ele fala que é maior de idade
// se não, ele fala que é menor de idade

if (idade >= 18) {
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}


// =============================== 
// =============================== 


// Laços de repetição - WHILE

var count = 0;

while (count <= 10) {
    console.log(count);
    // count = count + 1;
    count++; // faz a mesma coisa que a linha anterior, soma +1 a var
}

// Laços de repetição - FOR

var count2;

//count2 = 0 (qual o valor que a var começa)
//count2 <= 10 (condicional)
//count2++ (o que é pra fazer caso a condicional for favorável)
for (count2 = 0; count2 <= 10; count2++){
    console.log(count2);
}


// =============================== 
// =============================== 


// Date

var d = new Date();
console.log(d);

// Pegar só o mês
console.log(d.getMonth() + 1);

// Pegar só a hora
console.log(d.getHours());