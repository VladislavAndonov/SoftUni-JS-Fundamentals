function revInPlace(curArr) {
  let revArr = [];
  for (let i = curArr.length - 1; i >= 0; i--) {
    revArr.push(curArr[i]);
  }
  console.log(revArr.join(" "));
}
revInPlace(["a", "b", "c", "d", "e"]);
revInPlace(["abc", "def", "hig", "klm", "nop"]);
revInPlace(["33", "123", "0", "dd"]);
