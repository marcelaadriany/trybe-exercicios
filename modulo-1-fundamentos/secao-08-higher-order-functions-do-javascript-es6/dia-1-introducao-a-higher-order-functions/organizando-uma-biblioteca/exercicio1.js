const books = require('./database.js');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  // escreva aqui o seu código
    return books.find ((book) => book.author.birthYear === 1947).author.name
}
  
console.log(authorBornIn1947());