function arrManipulations(arr) {
  let arrOfNums = arr.shift().split(" ");

  while (arr.length > 0) {
    let curManipulation = arr.shift().split(" ");
    if (curManipulation[0] == "Add") {
      arrOfNums.push(curManipulation[1]);
    } else if (curManipulation[0] == "Remove") {
      while (arrOfNums.includes(curManipulation[1])) {
        let getIndex = arrOfNums.indexOf(curManipulation[1]);
        arrOfNums.splice(getIndex, 1);
      }
    } else if (curManipulation[0] == "RemoveAt") {
      arrOfNums.splice(curManipulation[1], 1);
    } else if (curManipulation[0] == "Insert") {
      arrOfNums.splice(curManipulation[2], 0, curManipulation[1]);
    }
  }
  console.log(arrOfNums.join(" "));
}
arrManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

// arrManipulations(['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2']);
