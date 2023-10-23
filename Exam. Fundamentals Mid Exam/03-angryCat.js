function angryCat(priceRating, entryPoint, priceOfEl) {
  let leftEl = priceRating.slice(0, entryPoint);
  let rightEl = priceRating.slice(entryPoint + 1);
  let entryEl = priceRating[entryPoint];

  let leftDamage = 0;
  let rightDamage = 0;

  if (priceOfEl == "cheap") {
    for (let i = 0; i < leftEl.length; i++) {
      if (leftEl[i] < entryEl) {
        leftDamage += leftEl[i];
      }
    }
    for (let i = 0; i < rightEl.length; i++) {
      if (rightEl[i] < entryEl) {
        rightDamage += rightEl[i];
      }
    }
  } else if (priceOfEl == "expensive") {
    for (let i = 0; i < leftEl.length; i++) {
      if (leftEl[i] >= entryEl) {
        leftDamage += leftEl[i];
      }
    }
    for (let i = 0; i < rightEl.length; i++) {
      if (rightEl[i] >= entryEl) {
        rightDamage += rightEl[i];
      }
    }
  }
  if (leftDamage >= rightDamage) {
    console.log(`Left - ${leftDamage}`);
  } else {
    console.log(`Right - ${rightDamage}`);
  }
}
angryCat([1, 5, 1], 1, "cheap");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");