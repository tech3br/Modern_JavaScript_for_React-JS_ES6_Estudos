// definindo variavel

const n = 'daniel';

// funcao tradicional
function getNameTraditionalFunction(nome) {
  return `Bem vindo ${nome}`;
}
console.log(getNameTraditionalFunction(n));

// arrow function - ES6
const getNameArrowFunction = (nome) => {
  return `Ola ${nome}`;
};

console.log(getNameArrowFunction(n));
