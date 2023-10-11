function arrayRotation(arr, rotationsCount) {
  for (let i = 0; i < rotationsCount; i++) {
    let el = arr.shift(arr[i]);
    arr.push(el);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
