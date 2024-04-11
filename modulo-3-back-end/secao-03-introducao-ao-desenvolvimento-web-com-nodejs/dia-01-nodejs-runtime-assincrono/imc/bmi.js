const readlineSync = require('readline-sync');

// Solicita o peso e altura ao usuário
const weight = readlineSync.questionFloat('What is your weight? ');
const height = readlineSync.questionFloat('What is your height? ');

// Função para calcular o IMC
const calculateBMI = (weight, height) => {
    const result = weight / (height * height);
    return result;
};

// Tabela de intervalos de IMC e categorias correspondentes
const BMI_MAX_AND_MIN = {
    'Underweight': { minBMI: 0, maxBMI: 18.4 },
    'Normal Weight': { minBMI: 18.5, maxBMI: 24.9 },
    'Overweight': { minBMI: 25, maxBMI: 29.9 },
    'Obese Class I': { minBMI: 30.0, maxBMI: 34.9 },
    'Obese Class II': { minBMI: 35, maxBMI: 39.9 },
    'Obese Class III': { minBMI: 40, maxBMI: 100 }
};

// Função para determinar a categoria do IMC
const getBMICategory = (bmi) => {
    for (const category in BMI_MAX_AND_MIN) {
        const { minBMI, maxBMI } = BMI_MAX_AND_MIN[category];
        if (bmi >= minBMI && bmi <= maxBMI) {
            return category;
        }
    }
    return 'Unknown';
};

// Calcula o IMC
const bmi = calculateBMI(weight, height);

// Obtém a categoria do IMC
const bmiCategory = getBMICategory(bmi);

// Imprime o resultado com o IMC e a categoria correspondente
console.log(`Seu IMC é: ${bmi.toFixed(2)} - ${bmiCategory}`);
