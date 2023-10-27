function addAndRemove(arr) {
  let curNum = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "add") {
      result.push(curNum);
    } else if (arr[i] == "remove") {
      result.pop();
    }
    curNum++;
  }
  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
