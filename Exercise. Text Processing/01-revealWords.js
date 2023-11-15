function revealWords(wordStr, sentence) {
  let words = wordStr.split(", ");
  let sentenceArr = sentence.split(" ");

  for (let word of words) {
    let replaced = word.replace(word, "*".repeat(word.length));
    if (sentenceArr.includes(replaced)) {
      let indx = sentenceArr.indexOf(replaced);
      sentenceArr.splice(indx, 1, word);
    }
  }
  console.log(sentenceArr.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
