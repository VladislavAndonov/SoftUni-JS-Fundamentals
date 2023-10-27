// function printEl(arr) {
//   let step = Number(arr.pop());
//   let result = [];

//   for (let i = 0; i < arr.length; i += step) {
//     result.push(arr[i]);
//   }
//   console.log(result.join(" "));
// }
// printEl(["5", "20", "31", "4", "20", "2"]);
// printEl(["dsa", "asd", "test", "test", "2"]);
// printEl(["1", "2", "3", "4", "5", "6"]);

function printEl(arr) {
  let step = Number(arr.pop());

  let newArr = arr.filter((x, index) => index % step == 0);

  console.log(newArr.join(" "));
}
printEl(["5", "20", "31", "4", "20", "2"]);
printEl(["dsa", "asd", "test", "test", "2"]);
printEl(["1", "2", "3", "4", "5", "6"]);
