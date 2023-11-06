function storage(arr) {
  let myMap = new Map();
  for (let el of arr) {
    let [product, qty] = el.split(" ");
    qty = Number(qty);
    if (myMap.has(product)) {
      let curQty = myMap.get(product);
      let newQty = curQty + qty;
      myMap.set(product, newQty);
    } else {
      myMap.set(product, qty);
    }
  }
  for (let entry of myMap) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
