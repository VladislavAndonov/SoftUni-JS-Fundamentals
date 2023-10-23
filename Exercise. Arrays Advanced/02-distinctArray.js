function uniqueNums(arr) {
  let uniqueArr = [];
  for (let el of arr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
  console.log(uniqueArr.join(" "));
}
uniqueNums([7, 8, 9, 7, 2, 3, 4, 1, 2]);
uniqueNums([20, 8, 12, 13, 4, 4, 8, 5]);
