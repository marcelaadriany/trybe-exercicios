const fs = require('fs').promises;
const path =require('path');

async function main() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()