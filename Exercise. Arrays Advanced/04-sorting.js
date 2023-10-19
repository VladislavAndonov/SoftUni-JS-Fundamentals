function sorting(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let finalArr = [];
  while (arr.length > 0) {
    let maxNum = sortedArr.pop();
    let minNum = sortedArr.shift();

    finalArr.push(maxNum);
    finalArr.push(minNum);
  }
  console.log(finalArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
