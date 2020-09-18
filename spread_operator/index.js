// definindo Array (lista)
let mArr1 = [1, 2, 3, 4, 'teste']; 

let mArr2 = mArr1;
//  !== é diferente de:
let mArr3 = [...mArr1];

// fazendo um push() (inserindo um novo item à lista)
mArr1.push(6);

console.log(mArr1);
console.log(mArr2);
console.log([...mArr3]);


let mObj1 = {
  nome: 'Daniel',
  idade: 24,
  sexo: 'Masculino',
  time: 'São Paulo',
};

let mObj2 = {
  nome: 'Tamires',
  idade: 22,
  sexo: 'Feminino',
  time: 'São Paulo',
};

let mObj3 = { ...mObj1, ...mObj2 };

console.log(mObj3);
