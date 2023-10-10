function maxNum(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let curInt = arr[i];
    let isTopInt = true;
    for (x = i + 1; x < arr.length; x++) {
      let nextInt = arr[x];
      if (curInt <= nextInt) {
        isTopInt = false;
        break;
      }
    }
    if (isTopInt === true) {
      newArr.push(curInt);
    }
  }
  console.log(newArr.join(' '));
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);
