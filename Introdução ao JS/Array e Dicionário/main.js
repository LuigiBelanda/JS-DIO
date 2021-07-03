// array tem posições de seus elementos, neste caso "maça" esta na posição 0
var lista = ["maça" , "banana", "caju"];
console.log(lista);

// Pegando apenas um elemento da lista
console.log(lista[1]);

// Colocando mais uma fruta/elemento na lista com o push()
lista.push("laranja");
console.log(lista);

// Podemos tirar um elemento da lista também como o pop(), neste iremos tirar a "laranja"
lista.pop();
console.log(lista);

// Conseguimos ver quantos elementos tem na lista com o length
console.log(lista.length);

// Conseguimos reverter a ordem dos elementos com o reverse()
console.log(lista.reverse());

// Podemos transformar os elementos em strings usando o toString()
console.log(lista.toString());

// Podemos mudar a separação dos elementos com o join() - ele também passa os elementos para string
console.log(lista.join(" - "));


// =============================== 
// =============================== 


// Dicionários
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);

// Podemos pegar apenas um atributo do dicionário
console.log(fruta.nome);


// =============================== 
// =============================== 


// Dicionários + Arrays
var frutas = [
    {nome:"maça", cor:"vermelha"},
    {nome:"uva", cor:"roxo"},
    {nome:"laranja", cor:"laranja"},
];

console.log(frutas);

// aqui ele pega só o elemento na posição 1 desse array de dicionários
console.log(frutas[1]); 

// aqui ele pega só o nome do elemento na posição 1 desse array de dicionários
console.log(frutas[1].nome) 