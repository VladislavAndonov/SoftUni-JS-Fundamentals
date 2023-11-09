function party(arr) {
  let idx = arr.indexOf("PARTY");
  let invited = arr.slice(0, idx);
  let arrived = arr.slice(idx + 1);

  for (let guest of arrived) {
    if (invited.includes(guest)) {
      let index = invited.indexOf(guest);
      invited.splice(index, 1);
    }
  }
  let sortedList = invited.sort((a, b) => a.localeCompare(b));
  console.log(sortedList.length);
  console.log(sortedList.join("\n"));
}
party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
