function numSequience(n, k) {
  let result = [1];
  let curArr = [];
  let curN = 1;
  for (let i = 0; i < n - 1; i++) {
    curArr = result.slice(-k, i);
    for (let j = 0; j < curArr.length; j++) {
      curN += curArr[j];
    }
    result.push(curN);
  }
  console.log(result.join(" "));
}
numSequience(6, 3);
numSequience(8, 2);
