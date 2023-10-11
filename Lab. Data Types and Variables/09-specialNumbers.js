function specialNums(n) {
  let curDigit = "";
  for (let i = 1; i <= n; i++) {
    curDigit = String(i);
    let sum = 0;
    for (let j = 0; j < curDigit.length; j++) {
      sum += Number(curDigit[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${curDigit} -> True`);
    } else {
      console.log(`${curDigit} -> False`);
    }
  }
}
// specialNumbers(15)
specialNums(20);
