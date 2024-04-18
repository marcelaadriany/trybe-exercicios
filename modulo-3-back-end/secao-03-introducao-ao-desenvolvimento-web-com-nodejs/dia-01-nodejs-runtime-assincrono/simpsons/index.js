const fs = require('fs').promises;

// A - cria a função que le todos os dados do arquivo
async function readFile () {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

// B- cria a função que pega os personagens por id
async function getSimpsonById (id) {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id );
    if (!chosenSimpson) {
      throw new Error('id não encontrado')
    } return chosenSimpson;
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

// C - cria uma função que altera o arquivo, retirando os personagens com id 10 e 6
async function filterSimpsons () {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newArray = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !=='10');
  return await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
//  await readFile();
//  const simpson = await getSimpsonById(11);
//  console.log(simpson);

}

main();