function gladiator(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
  let trashedHelm = 0;
  let trashedSword = 0;
  let trashedShield = 0;
  let trashedArmor = 0;
  let expenses = 0;
  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      trashedHelm++;
      trashedSword++;
      trashedShield++;
    } else if (i % 3 === 0) {
      trashedSword++;
    } else if (i % 2 === 0) {
      trashedHelm++;
    }
  }
    trashedArmor = Math.trunc(trashedShield / 2)

  expenses +=
    trashedHelm * helmPrice +
    trashedSword * swordPrice +
    trashedShield * shieldPrice +
    trashedArmor * armorPrice;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5);
gladiator(23, 12.50, 21.50, 40, 200);
