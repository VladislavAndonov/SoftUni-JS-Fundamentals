function oddPosition(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let doubleNum = arr[i] * 2;
      result.unshift(doubleNum);
    }
  }
  console.log(result.join(" "));
}
oddPosition([10, 15, 20, 25]);
oddPosition([3, 0, 10, 4, 7, 3]);
