// MATCH METHOD
function furniture(purchases) {
  let items = [];
  let totalSpent = 0;
  let pattern = />>(?<name>[A-Z]{1,2}[a-z]*)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let line = purchases.shift();

  while (line != "Purchase") {
    let match = line.match(pattern);

    if (match != null) {
      let { name, price, qty } = match.groups;
      items.push(name);
      totalSpent += Number(price) * Number(qty);
    }

    line = purchases.shift();
  }

  console.log("Bought furniture:");
  if (items.length > 0) {
    console.log(items.join("\n"));
  }
  console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);

//EXEC METHOD
function furniture(purchases) {
  let items = [];
  let totalSpent = 0;
  let pattern = />>(?<name>[A-Z]{1,2}[a-z]*)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let line = purchases.shift();

  while (line != "Purchase") {
    let match = pattern.exec(line);

    if (match != null) {
      let { name, price, qty } = match.groups;
      items.push(name);
      totalSpent += Number(price) * Number(qty);
    }

    line = purchases.shift();
  }

  console.log("Bought furniture:");
  if (items.length > 0) {
    console.log(items.join("\n"));
  }
  console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
}
