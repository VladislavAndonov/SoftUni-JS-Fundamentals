function minTwoNums(arr) {
  let sortAscend = arr.sort((a, b) => {
    return a - b;
  });
  let minNums = arr.slice(0, 2);
  console.log(minNums.join(" "));
}
minTwoNums([30, 15, 50, 5]);
minTwoNums([3, 0, 10, 4, 7, 3]);
