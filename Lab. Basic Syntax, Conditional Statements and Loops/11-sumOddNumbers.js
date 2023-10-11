function sumOddNums(numOfLines) {
  let linesPrinted = 1;
  let i = 1;
  let sum = 0;
  while (linesPrinted <= numOfLines) {
    if (i % 2 === 1) {
      console.log(i);
      sum += i;
      linesPrinted++;
    }
    i++;
  }
  console.log(`Sum: ${sum}`);
}
sumOddNums(9);
sumOddNums(11);
