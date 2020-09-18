//definindo variaveis
const nome = 'Daniel Filgueira';
const nomeArr = nome.split(' ');

console.log(nomeArr);

//metodo tradicional
//let firstName = nomeArr[0];
//let lastName = nomeArr[1];

//metodo com desestruturacao
let [firstName, lastName] = nomeArr;

console.log(firstName);
console.log(lastName);

// definindo objeto com chave e valor
const person = {
  mfirstName: 'Daniel',
  mlastName: 'Filgueira',
  mAge: 24,
};

// objeto com desestruturacao
const { mfirstName, mAge, mlastName } = person;
console.log(mfirstName);
console.log(mAge);
console.log(mlastName);
