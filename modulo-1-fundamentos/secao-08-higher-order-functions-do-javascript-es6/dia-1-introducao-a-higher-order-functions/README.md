# Parte I
## Nova pessoa contratada
Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

- crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
- utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

## Sorteador de loteria
Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

## Corretor automático de exame
Crie uma HOF que receberá três parâmetros:

- O primeiro será um array de respostas corretas (soluções);
- O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
- O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
- Uma resposta correta adiciona 1 ponto à pontuação final;
- A ausência de uma resposta não altera a pontuação (quando for “N.A”);
- Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
- Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

# Parte II - Organizando uma biblioteca
## 🚀 Organizando uma biblioteca
Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
- Retorne o nome do livro com menor número de caracteres (menor nome).
- Encontre o primeiro livro cujo nome possua 26 caracteres.
- Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
- Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
- Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.



