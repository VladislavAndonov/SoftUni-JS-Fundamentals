function intAndFloat(firstNum, secondNum, ThirdNum) {
  let sum = firstNum + secondNum + ThirdNum;
  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum);
}
intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);
