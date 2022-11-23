/*
Tipos primitivos, tipagem dinâmica e operações aritméticas

No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail. Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão? Exemplo: console.log(typeof patientId) retornará number.
*/

let patientId = 50;
let isEnrolled = true; 
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); //number
console.log(typeof isEnrolled); //boolean
console.log(typeof patientInfo); //object
console.log(typeof patientEmail); //string

/*
O que aconteceria se tentássemos checar qual o tipo da variável patientAge? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué… mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined, como você pôde observar no retorno do console.log(typeof patientAge). Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string, pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
*/

console.log(typeof patientAge); //undefined, porque essa variável não foi declarada
patientId = '50'; // troquei a variável do tipo number pra uma do tipo string
console.log(typeof patientId); // o javascript já reconhece que o tipo primitivo é outro, essa é a famosa tipagem dinâmica

/*
Tipos primitivos, tipagem dinâmica e operações aritméticas
    #para fixar

- Crie uma constante chamada base e atribua a ela o valor 5.
- Crie uma constante uma chamada heigth e atribua a ela o valor 8.
- Crie uma constante chamada area e atribua a ela o resultado da multiplicação da - base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
- Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/

const base = 5;
const height = 8;
const area = base * height;

console.log(base);
console.log(height);
console.log(area);

const perimeter = base + base + height + height;
console.log(perimeter);