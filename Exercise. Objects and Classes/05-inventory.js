function inventory(arr) {
  let heroes = [];

  for (let line of arr) {
    let [heroName, heroLevel, items] = line.split(" / ");
    let object = {
      hero: heroName,
      level: Number(heroLevel),
      items: items,
    };
    heroes.push(object);
  }
  heroes.sort((a, b) => a.level - b.level);

  for (let heroInfo of heroes) {
    console.log(`Hero: ${heroInfo.hero}`);
    console.log(`level => ${heroInfo.level}`);
    console.log(`items => ${heroInfo.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
