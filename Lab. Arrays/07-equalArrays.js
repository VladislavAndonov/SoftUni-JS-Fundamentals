function equalArrs(firstArr, secondArr) {
  let areIndentical = true;
  let i = 0;
  let sum = 0;
  for (; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      areIndentical = false;
      break;
    } else {
      firstArr[i] = Number(firstArr[i]);
      sum += firstArr[i];
    }
  }
  areIndentical === true
    ? console.log(`Arrays are identical. Sum: ${sum}`)
    : console.log(`Arrays are not identical. Found difference at ${i} index`);
}
equalArrs(["10", "20", "30"], ["10", "20", "30"]);
equalArrs(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrs(["1"], ["10"]);
