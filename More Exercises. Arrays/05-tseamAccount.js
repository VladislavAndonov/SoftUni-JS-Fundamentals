function tseamAcc(arr) {
  let games = arr.shift().split(" ");
  let curCommand = arr.shift().split(" ");
  while (curCommand[0] !== "Play!") {
    if (curCommand[0] == "Install") {
      if (!games.includes(curCommand[1])) {
        games.push(curCommand[1]);
      }
    } else if (curCommand[0] == "Uninstall") {
      if (games.includes(curCommand[1])) {
        let index = games.indexOf(curCommand[1]);
        games.splice(index, 1);
      }
    } else if (curCommand[0] == "Update") {
      if (games.includes(curCommand[1])) {
        let index = games.indexOf(curCommand[1]);
        games.splice(index, 1);
        games.push(curCommand[1]);
      }
    } else if (curCommand[0] == "Expansion") {
      let gameAndExpansion = curCommand[1].split("-");
      if (games.includes(gameAndExpansion[0])) {
        let index = games.indexOf(gameAndExpansion[0]);

        games.splice(
          Math.max(0, index + 1),
          0,
          `${gameAndExpansion[0]}:${gameAndExpansion[1]}`
        );
      }
    }
    curCommand = arr.shift().split(" ");
  }
  console.log(games.join(" "));
}
tseamAcc([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
