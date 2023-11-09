function cardGame(arr) {
  let players = {};
  let powerValues = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14};
  let powerTypes = {S: 4, H: 3, D: 2, C: 1};

  for (let line of arr) {
    let [name, handStr] = line.split(": ");
    let hand = handStr.split(", ");

    if (name in players) {
      players[name].push(...hand);
    } else {
      players[name] = hand;
    }
  }

  let entries = Object.entries(players);
  for (let [name, deck] of entries){
    let uniqueCards = new Set(deck);
    let deckValue = 0;
    
    for (let card of uniqueCards){
        let power = card.slice(0, card.length - 1);
        let type = card[card.length - 1];
        let cardValue = powerValues[power] * powerTypes[type];
        deckValue += cardValue;
    }
    console.log(`${name}: ${deckValue}`);
}
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
