function revArrOfNums(num, curArr) {
  let revArr = [];
  for (let i = num - 1; i >= 0; i--) {
    revArr.push(curArr[i]);
  }
  console.log(revArr.join(" "));
}
revArrOfNums(3, [10, 20, 30, 40, 50]);
revArrOfNums(4, [-1, 20, 99, 5]);
revArrOfNums(2, [66, 43, 75, 89, 47]);
