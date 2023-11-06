function store(curStock, orderedStock) {
  let storage = {};

  for (let i = 0; i < curStock.length; i += 2) {
    let product = curStock[i];
    let qty = Number(curStock[i + 1]);
    storage[product] = qty;
  }
  for (let i = 0; i < orderedStock.length; i += 2) {
    let product = orderedStock[i];
    let qty = Number(orderedStock[i + 1]);
    if (product in storage) {
      storage[product] += qty;
    } else {
      storage[product] = qty;
    }
  }
  let entries = Object.entries(storage);

  //   for (let entry of entries){
  //       console.log(`${entry[0]} -> ${entry[1]}`);
  //   }

  for (let i = 0; i < entries.length; i++) {
    console.log(`${entries[i][0]} -> ${entries[i][1]}`);
  }
}
store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
