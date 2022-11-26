// Arrays

// Use .length para acessar a quantidade de elementos dentro do array
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length); // 3


// Use índice 0 para acessar o primeiro elemento e length - 1 para acessar o último
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); // Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask); // Brincar com o cachorro


// adicionando elementos a um array
tasksList.push('Fazer exercícios da Trybe');  // adiciona elemento ao fim do array
console.log(tasksList);
tasksList.unshift('Acordar'); // adiciona elemento no início
console.log(tasksList);

// removendo elementos de um array
tasksList.pop();  // remove o último elemento
console.log(tasksList);
tasksList.shift(); // remove primeiro elemento

// usando o .indexOf para procurar o índice de um elemento
let indexOfTask = tasksList.indexOf('Reunião') // me diz o índice do elemento 'Reunião'
console.log(indexOfTask); // 1

/*
    # para fixar
*/

// Obtenha o valor “Serviços” do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]; // retorna o elemento que se encontra na posição 1
console.log(menuServices); // 1

// Procure o índice do valor “Portfólio” do array menu:
let indexOfPortfolio = menu.indexOf('Portfólio'); // retorna o índice do elemento Portfólio
console.log(indexOfPortfolio); // 2
console.log(indexOfPortfolio);

// Adicione o valor “Contato” no final do array menu:
let menuContato = menu.push ('Contato'); // adiciona 'Contato' no fim do array
console.log(menu);

