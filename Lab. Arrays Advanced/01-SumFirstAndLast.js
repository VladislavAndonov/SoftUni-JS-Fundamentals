function sum(arr) {
  let first = Number(arr.shift());
  let last = Number(arr.pop());

  console.log(first + last);
}
sum(["20", "30", "40"]);
