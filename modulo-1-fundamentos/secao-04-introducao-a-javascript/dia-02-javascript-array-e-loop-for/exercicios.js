// 1. Percorra o array imprimindo todos os valores nele contidos com a função console.log()
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1){
console.log(numbers[index])
};

// 2. Some todos os valores contidos no array e imprima o resultado
let sum = 0;
for (index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum);

// 3. Calcule e imprima a média aritmética dos valores contidos no array
let mean = 0;
for (index = 0; index < numbers.length; index +=1){
    mean += numbers[index]/numbers.length;
}
console.log(mean.toFixed(1));

// 4. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”
if (mean > 20){
    console.log('valor maior que 20')
}
else{
    console.log('valor menos ou igual a 20')
}

// 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o

