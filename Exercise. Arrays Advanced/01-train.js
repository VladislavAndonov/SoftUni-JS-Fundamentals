function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let wagonCap = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command.length == 2) {
      wagons.push(Number(command[1]));
    } else {
      for (let j = 0; j < wagons.length; j++) {
        let addPassengers = Number(command);
        if (wagons[j] + addPassengers <= wagonCap) {
          wagons[j] += addPassengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
