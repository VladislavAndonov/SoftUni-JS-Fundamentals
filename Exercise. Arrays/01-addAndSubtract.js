function addAndSubtract(arr) {
  let newSum = 0;
  let oldSum = 0;
  for (let i = 0; i < arr.length; i++) {
    oldSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    newSum += arr[i];
  }
  console.log(arr);
  console.log(oldSum);
  console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
