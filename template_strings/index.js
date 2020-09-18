const nome = 'Daniel';
const sobrenome = "Filgueira"

// passando variaveis no template string
const mGreetings = `Hello ${nome}`;
console.log(mGreetings);

// passando funcoes na template string
function getName(primeiroNome, segundoNome) {
  return primeiroNome + ' ' + segundoNome;
}
const fullName = `Ola ${getName(nome, sobrenome)}`;
console.log(fullName);
