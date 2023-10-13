function factNums(num1, num2) {
  let fact1 = num1;
  let fact2 = num2;
  let result = 0;
  for (let i = 1; i < num1; i++) {
    fact1 *= num1 - i;
  }
  for (let i = 1; i < num2; i++) {
    fact2 *= num2 - i;
  }
  result = (fact1 / fact2).toFixed(2);
  console.log(result);
}
factNums(5, 2);
factNums(6, 2);
