function mining(arr) {
  let resources = {};

  for (let i = 0; i < arr.length; i += 2) {
    let material = arr[i];
    let qty = Number(arr[i + 1]);

    if (material in resources) {
      resources[material] += qty;
    } else {
      resources[material] = qty;
    }
  }
  let entries = Object.entries(resources);
  for (let [resource, qty] of entries) {
    console.log(`${resource} -> ${qty}`);
  }
}
mining(["Gold", "155", "Silver", "10", "Copper", "17"]);
