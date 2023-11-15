// function censoring(sentence, word) {
//   let censored = "";
//   for (let i = 0; i < word.length; i++) {
//     censored += "*";
//   }

//   while (sentence.includes(word)) {
//     sentence = sentence.replace(word, censored);
//   }

//   console.log(sentence);
// }

censoring("A small sentence with some words", "small");

function censoring(sentence, word) {
  let censored = sentence.replace(word, "*".repeat(word.length));

  while (censored.includes(word)) {
    censored = censored.replace(word, "*".repeat(word.length));
  }
  console.log(censored);
}
