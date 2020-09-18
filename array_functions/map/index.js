// METODO TRADICIONAL

const mArr = [1, 2, 3, 4, 5];

// let newArr = [];

// const doubleValues = (item) => {
//   return item;
// };

// for (let i = 0; i < mArr.length; i++) {
//   newArr.push(doubleValues(mArr[i]));
// }

// METODO COM MAP()

// map() + template string
let newArray = mArr.map((item, key) => {
  console.log(`O item ${item} esta na posicao: ${key}`);
  return item / 4;
});

console.log(newArray);

const mAlunos = [
  {
    nome: 'Lucas Filgueira',
    numero: 20,
    idade: 24,
    turma: 'c',
    professor: 'Paulo',
    aprovado: true,
  },
  {
    nome: 'Carlos Filgueira',
    numero: 10,
    idade: 24,
    turma: 'b',
    professor: 'Carlos',
    aprovado: false,
  },
  {
    nome: 'Daniel Filgueira',
    numero: 5,
    idade: 23,
    turma: 'a',
    professor: 'Juan',
    aprovado: true,
  },
];

// map() + template string + desestruturacao + operador ternario
// listando se o aluno foi aprovado ou nao
const mListAlunos = mAlunos.map((data, key) => {
  console.log(`O aluno ${data}`);
  return {
    nome: data.nome,
    aprovado: data.aprovado
      ? 'Este aluno foi APROVADO'
      : 'Este aluno foi REPROVADO',
  };
});

console.log(mListAlunos);
