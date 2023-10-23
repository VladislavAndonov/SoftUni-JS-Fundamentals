function gainingXP(arr) {
  let neededXP = arr.shift();
  let curXP = 0;
  let totalBattles = arr.shift();
  let battlesCount = 1;

  while (battlesCount <= totalBattles) {
    let curBattleXP = arr.shift();
    if (battlesCount % 3 == 0 && battlesCount % 5 == 0) {
      curBattleXP *= 1.05;
    } else if (battlesCount % 3 == 0) {
      curBattleXP *= 1.15;
    } else if (battlesCount % 5 == 0) {
      curBattleXP *= 0.9;
    }
    curXP += curBattleXP;
    if (curXP >= neededXP) {
      console.log(
        `Player successfully collected his needed experience for ${battlesCount} battles.`
      );
      return;
    }
    battlesCount++;
  }
  console.log(
    `Player was not able to collect the needed experience, ${(
      neededXP - curXP
    ).toFixed(2)} more needed.`
  );
}
gainingXP([500, 5, 50, 100, 200, 100, 30]);
gainingXP([500, 5, 50, 100, 200, 100, 20]);
gainingXP([400, 5, 50, 100, 200, 100, 20]);
