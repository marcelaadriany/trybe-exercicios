//nova pessoa contratada

const newEmployees = (generatesNewEmployees) => {
    const employees = {
      id1: generatesNewEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: generatesNewEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: generatesNewEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const generatesNewEmployees = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return {fullName, email: `${email}@trybe.com`};
}

console.log(newEmployees(generatesNewEmployees));


//sorteador de loteria

const checksNumber = (myNumber, number) => myNumber === number; //checa se o meu número e o sorteado são iguais

const generatesResult = (myNumber, checksNumber) => {
    const number = Math.floor((Math.random() * 5) + 1); //gera um número aleatório entre 1 e 5
    if (myNumber === number) {
        return `Parabéns, você ganhou`
    }
    if (myNumber !== number) {
        return `Tente novamente`
    }
}

console.log(generatesResult(2, checksNumber));

//corretor automático de exame
