function firstAndLastNums(arr) {
  let k = arr.shift();
  let firstNums = arr.slice(0, k);
  let lastNums = arr.slice(-k);

  console.log(firstNums.join(" "));
  console.log(lastNums.join(" "));
}
firstAndLastNums([2, 7, 8, 9]);
firstAndLastNums([3, 6, 7, 8, 9]);
