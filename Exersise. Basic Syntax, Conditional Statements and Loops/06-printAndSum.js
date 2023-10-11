function printAndSum(startNum, endNum) {
  let sum = 0;
  let finalOutput = "";
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    finalOutput += i + " ";
  }
  console.log(finalOutput);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
