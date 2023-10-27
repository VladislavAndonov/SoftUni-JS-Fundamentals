function rotateArr(arr) {
  let rotationsCount = arr.pop();
  for (let i = 0; i < rotationsCount; i++) {
    let curEl = arr.pop();
    arr.unshift(curEl);
  }
  console.log(arr.join(" "));
}
rotateArr(["1", "2", "3", "4", "2"]);
rotateArr(["Banana", "Orange", "Coconut", "Apple", "15"]);
