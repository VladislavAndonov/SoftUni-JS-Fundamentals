function strOccurrences(text, word) {
  let splitWords = text.split(" ");
  let count = 0;

  while (splitWords.includes(word)) {
    let idx = splitWords.indexOf(word);
    splitWords.splice(idx, 1);
    count++;
  }
  console.log(count);
}
strOccurrences("This is a word and it also is a sentence", "is");
