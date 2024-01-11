function heroSpellBook(arr) {
  let heroes = {};
  let command = arr.shift();

  while (command != "End") {
    let [action, hero, spell] = command.split(" ");

    if (action == "Enroll") {
      if (hero in heroes) {
        console.log(`${hero} is already enrolled.`);
      } else {
        heroes[hero] = { spellBook: [] };
      }
    }

    if (action == "Learn") {
      if (!heroes[hero]) {
        console.log(`${hero} doesn't exist.`);
      } else {
        if (heroes[hero].spellBook.includes(spell)) {
          console.log(`${hero} has already learnt ${spell}`);
        } else {
          heroes[hero].spellBook.push(spell);
        }
      }
    }

    if (action == "Unlearn") {
      if (!heroes[hero]) {
        console.log(`${hero} doesn't exist.`);
      } else {
        if (heroes[hero].spellBook.includes(spell)) {
          let idx = heroes[hero].spellBook.indexOf(spell);
          heroes[hero].spellBook.splice(idx, 1);
        } else {
          console.log(`${hero} doesn't know ${spell}`);
        }
      }
    }

    command = arr.shift();
  }

  console.log("Heroes:");
  Object.entries(heroes).forEach(([hero, { spellBook }]) => {
    console.log(`== ${hero}: ${spellBook.join(", ") || ""}`);
  });
}
// heroSpellBook([
//   "Enroll Stefan",
//   "Enroll Peter",
//   "Enroll Stefan",
//   "Learn Stefan ItShouldWork",
//   "Learn John ItShouldNotWork",
//   "Unlearn George Dispel",
//   "Unlearn Stefan ItShouldWork",
//   "End",
// ]);

// heroSpellBook(["Enroll Stefan",
// "Learn Stefan ItShouldWork",
// "Learn Stefan ItShouldWork",
// "Unlearn Stefan NotFound",
// "End"])

heroSpellBook([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
