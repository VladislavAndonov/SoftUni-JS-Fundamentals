function amazingNums(num) {
  let numToString = String(num);
  let curDigit = "";
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    curDigit = Number(numToString[i]);
    sum += curDigit;
  }
  let sumToString = String(sum);
  let curChar = "";
  for (let j = 0; j < sumToString.length; j++) {
    curChar = sumToString[j];
    if (curChar === "9") {
      console.log(`${num} Amazing? True`);
      return;
    }
  }
  console.log(`${num} Amazing? False`);
}
amazingNums(1233);
amazingNums(999);
