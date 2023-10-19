function guestList(arr) {
  let finalList = [];
  for (let i = 0; i < arr.length; i++) {
    let curCommand = arr[i].split(" ");
    let curName = curCommand[0];
    if (curCommand.includes("not")) {
      if (finalList.includes(curName)) {
        let indexGuest = finalList.indexOf(curName);
        finalList.splice(indexGuest, 1);
      } else {
        console.log(`${curName} is not in the list!`);
      }
    } else {
      if (finalList.includes(curName)) {
        console.log(`${curName} is already in the list!`);
      } else {
        finalList.push(curName);
      }
    }
  }
  console.log(finalList.join(" \n"));
}
guestList([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
guestList([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
