function signCheck(num1, num2, num3) {
  let arrOfNums = [num1, num2, num3];
  let negativeNumsCount = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    if (arrOfNums[i] < 0) {
      negativeNumsCount++;
    }
  }
  function negativeNums(negativeNumsCount) {
    if (negativeNumsCount == 1 || negativeNumsCount == 3) {
      return "Negative";
    } else {
      return "Positive";
    }
  }
  console.log(negativeNums(negativeNumsCount));
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
