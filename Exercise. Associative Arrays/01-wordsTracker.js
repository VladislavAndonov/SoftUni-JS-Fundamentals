function tracker(arrOfWords) {
  let searched = arrOfWords.shift().split(" ");
  let objOfSearched = {};
  for (let el of searched) {
    objOfSearched[el] = 0;
  }

  for (let word of arrOfWords) {
    if (word in objOfSearched) {
      objOfSearched[word] += 1;
    }
  }

  let sortedByOccur = Object.entries(objOfSearched).sort((a, b) => b[1] - a[1]);

  for (let kvp of sortedByOccur) {
    console.log(`${kvp[0]} - ${kvp[1]}`);
  }
}
tracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
