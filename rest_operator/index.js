const mSum = (num1, num2, ...rest) => {
  console.log(num1);
  console.log(num2);
  console.log(rest);
  let soma = num1 + num2;
  console.log(soma);
};
mSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
