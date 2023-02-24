//para fixar

//forEach
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.
  // Adicione seu código aqui
emailListInData.forEach((email, index) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
})

//find
//Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

//Adicione seu código aqui
const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0)
console.log(verifyNumbers);

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

//const names = ['João', 'Irene', 'Fernando', 'Maria'];

//Adicione seu código aqui
//const verifyNames = names.find((name) => name.length === 5)
//console.log(verifyNames);

//Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
const findMusic = musicas.find((musica) => musica.id === '31031685')
console.log(findMusic);

//some e every
//Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

//Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:

//Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
//Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    //Adicione seu código aqui

const verifyAges = (people, age) => {
    return people.every((person) => person.age >= age)
}
  
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

//relembrando as HOFs
const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

//forEach
pessoas.forEach((pessoa) => console.log(`O nome da pessoa é ${pessoa.nome}`))

//find
const find = pessoas.find((pessoa) => pessoa.nome === 'Maria');
console.log(find);

//some
const some = pessoas.some((pessoa) => pessoa.idade > 30)
console.log(some);

//every
const every = pessoas.every((pessoa) => pessoa.idade > 30)
console.log(every);