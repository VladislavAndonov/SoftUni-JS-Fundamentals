function easterEggs(str) {
  let pattern =
  /[@#]+(?<color>[a-z]{3,})[@#]+([^A-Za-z\d]*)\/+(?<count>\d+)\/+/g;

  let match = pattern.exec(str);

  while (match !== null) {
    let color = match.groups.color;
    let count = Number(match.groups.count);

    if (count <= 0) {
      match = pattern.exec(str);
      continue;
    }

    console.log(`You found ${count} ${color} eggs!`);

    match = pattern.exec(str);
  }
}
easterEggs([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
