function calc(firstNum, opertaor, secondNum) {
  let result = 0;
  if (opertaor === "+") {
    result = firstNum + secondNum;
  } else if (opertaor === "-") {
    result = firstNum - secondNum;
  } else if (opertaor === "/") {
    result = firstNum / secondNum;
  } else if (opertaor === "*") {
    result = firstNum * secondNum;
  }
  console.log(result.toFixed(2));
}
calc(5, "+", 10);
calc(25.5, "-", 3);
