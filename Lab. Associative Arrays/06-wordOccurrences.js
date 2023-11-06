function wordOccur(arr) {
  let obj = {};

  for (let word of arr) {
    if (word in obj) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  }
  let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let el of sortedObj) {
    console.log(`${el[0]} -> ${el[1]} times`);
  }
}
wordOccur([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
