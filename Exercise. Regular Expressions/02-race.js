function race(arr) {
  let participants = arr.shift().split(", ");
  let line = arr.shift();

  let results = {};

  let letterPattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;

  for (let name of participants) {
    results[name] = 0;
  }
  while (line != "end of race") {
    let matchName = line.match(letterPattern);
    let matchDistance = line.match(distancePattern);

    let curName = matchName.join("");
    let curDistance = 0;
    matchDistance.forEach((digit) => {
      curDistance += Number(digit);
    });

    if (curName in results) {
      results[curName] += curDistance;
    }
    line = arr.shift();
  }
  let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sortedResults[0][0]}`);
  console.log(`2nd place: ${sortedResults[1][0]}`);
  console.log(`3rd place: ${sortedResults[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
