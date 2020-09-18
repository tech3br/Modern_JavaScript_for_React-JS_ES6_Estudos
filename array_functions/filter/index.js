const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mTecnicos = [
  {
    nome: 'Daniel Filgueira',
    idade: 24,
    cidade: 'Sao Paulo',
  },
  {
    nome: 'Paulo Filgueira',
    idade: 50,
    cidade: 'Santa Catarina',
  },
  {
    nome: 'Carlos Filgueira',
    idade: 62,
    cidade: 'Sao Paulo',
  },
];

// arrow function + filter() + map() + params + condicao + template string
const mTecnicosMaisVelhos = (array) => {
  // filtrando tecnicos pela idade maior que 50
  const filterTecs = array.filter((tec) => tec.idade >= 50);
  const mTecVelhos = filterTecs.map((tec) => {
    return ' ' + tec.nome;
  });
  console.log(`Os tecnicos mais velhos sao: ${mTecVelhos}`);
};
mTecnicosMaisVelhos(mTecnicos);
