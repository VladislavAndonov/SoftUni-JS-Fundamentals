function increasingNums(arr) {
  let biggestNum = 0;
  let result = [];
  for (let el of arr) {
    if (biggestNum <= el) {
      biggestNum = el;
      result.push(el);
    }
  }
  console.log(result.join(" "));
}
increasingNums([1, 3, 8, 4, 10, 12, 3, 2, 24]);
increasingNums([1, 2, 3, 4]);
increasingNums([20, 3, 2, 15, 6, 1]);
