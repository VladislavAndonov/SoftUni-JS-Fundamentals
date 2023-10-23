function coffeeLover(arr) {
  let coffeeList = arr.shift().split(" ");
  let commandsCount = Number(arr.shift());

  while (arr.length > 0) {
    let curCommand = arr.shift().split(" ");
    if (curCommand[0] == "Include") {
      coffeeList.push(curCommand[1]);
    } else if (curCommand[0] == "Remove") {
      if (curCommand[2] > coffeeList.length) {
      } else if (curCommand[1] == "first") {
        coffeeList.splice(0, curCommand[2]);
      } else if (curCommand[1] == "last") {
        coffeeList.splice(-(curCommand[2]), curCommand[2]);
      }
    } else if (curCommand[0] == "Prefer") {
      let index1 = Number(curCommand[1]);
      let index2 = Number(curCommand[2]);
      if (coffeeList.length >= index1 && coffeeList.length >= index2) {
        coffeeList[index1] = coffeeList.splice(index2, 1, coffeeList[index1])[0];
      }
    } else if (curCommand[0] == "Reverse") {
      coffeeList.reverse();
    }
  }
  console.log(`Coffees:\n${coffeeList.join(" ")}`);
}
coffeeLover([
  "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
  "5",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 0 1",
  "Prefer 3 1",
  "Reverse",
]);
