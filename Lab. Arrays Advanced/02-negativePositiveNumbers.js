function arrangeArr(arr) {
  let result = [];
  for (let el of arr) {
    if (Number(el) >= 0) {
      result.push(el);
    } else {
      result.unshift(el);
    }
  }
  console.log(result.join('\n'));
}
arrangeArr(["7", "-2", "8", "9"]);
arrangeArr(["3", "-2", "0", "-1"]);
