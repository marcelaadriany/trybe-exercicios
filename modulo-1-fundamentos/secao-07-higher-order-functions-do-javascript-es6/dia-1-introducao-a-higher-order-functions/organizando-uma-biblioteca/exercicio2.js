const books = require('./database.js');

// Retorne o nome do livro com menor número de caracteres (menor nome)

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código

    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name
        }
    });
  return nameBook;
}

console.log(smallerName());